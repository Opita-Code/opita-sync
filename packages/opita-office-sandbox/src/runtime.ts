import type {
  OpitaOfficeAgentAction,
  OpitaOfficeOrder,
  OpitaOfficeSeedState,
  OpitaOfficeTask
} from './models';
import {
  type OpitaOfficeSandboxSnapshot,
  createAgentActionId,
  getInitialOpitaOfficeSnapshot,
  shouldResetForNewBusinessDate
} from './storage';

export type OrderPatch = Partial<Pick<OpitaOfficeOrder, 'status' | 'priority' | 'owner'>>;

export type VerificationResult = {
  summary: string;
  improved: boolean;
  findings: string[];
};

export type DeviationAssessment = {
  hasDeviation: boolean;
  findings: string[];
  recommendation: string;
};

export type RecordAgentActionInput = Omit<OpitaOfficeAgentAction, 'id' | 'createdAt'> & {
  createdAt?: string;
};

function cloneState(state: OpitaOfficeSeedState): OpitaOfficeSeedState {
  return structuredClone(state);
}

export function verifyOrderOperationalImprovement(before: OpitaOfficeOrder, after: OpitaOfficeOrder): VerificationResult {
  const findings: string[] = [];

  if (before.owner === 'Unassigned' && after.owner !== 'Unassigned') {
    findings.push('la orden ya tiene owner asignado');
  }

  if (before.status === 'blocked' && after.status !== 'blocked') {
    findings.push('la orden dejó de estar bloqueada');
  }

  if (before.priority === 'urgent' && after.priority !== 'urgent') {
    findings.push('la prioridad se normalizó o redujo');
  }

  const improved = findings.length > 0;

  return {
    improved,
    findings,
    summary: improved
      ? `Se verificó mejora operativa: ${findings.join(', ')}.`
      : 'No se detectó mejora operativa clara en la orden después del cambio.'
  };
}

export function assessOrderDeviation(order: OpitaOfficeOrder): DeviationAssessment {
  const findings: string[] = [];

  if (order.owner === 'Unassigned' || order.owner === 'Temporary Bot') {
    findings.push('la orden mantiene un owner no confiable para operación continua');
  }

  if (order.priority === 'urgent' && order.status !== 'blocked') {
    findings.push('la prioridad sigue en urgent aun después de una corrección parcial');
  }

  if (order.status === 'pending' && order.owner !== 'Unassigned' && order.priority === 'urgent') {
    findings.push('la orden avanzó, pero todavía conserva una combinación operativa desviada');
  }

  return {
    hasDeviation: findings.length > 0,
    findings,
    recommendation:
      findings.length > 0
        ? 'Aplicar un recovery path: asignar owner estable, normalizar prioridad y cerrar el cambio con un estado operativo consistente.'
        : 'No se detectan desvíos relevantes en la orden.'
  };
}

export class OpitaOfficeSandboxStore {
  private snapshot: OpitaOfficeSandboxSnapshot;

  constructor(businessDate: string) {
    this.snapshot = getInitialOpitaOfficeSnapshot(businessDate);
  }

  get businessDate(): string {
    return this.snapshot.businessDate;
  }

  get state(): OpitaOfficeSeedState {
    return cloneState(this.snapshot.state);
  }

  ensureBusinessDate(currentBusinessDate: string): { resetApplied: boolean } {
    if (shouldResetForNewBusinessDate(currentBusinessDate, this.snapshot)) {
      this.snapshot = getInitialOpitaOfficeSnapshot(currentBusinessDate);
      return { resetApplied: true };
    }

    return { resetApplied: false };
  }

  getOrder(orderId: string): OpitaOfficeOrder | undefined {
    return this.snapshot.state.orders.find((order) => order.id === orderId);
  }

  getTask(taskId: string): OpitaOfficeTask | undefined {
    return this.snapshot.state.tasks.find((task) => task.id === taskId);
  }

  patchOrder(orderId: string, patch: OrderPatch, changedAt: string): { before: OpitaOfficeOrder; after: OpitaOfficeOrder } {
    const index = this.snapshot.state.orders.findIndex((order) => order.id === orderId);

    if (index === -1) {
      throw new Error(`Order not found: ${orderId}`);
    }

    const before = structuredClone(this.snapshot.state.orders[index]);
    const after: OpitaOfficeOrder = {
      ...before,
      ...patch,
      lastUpdatedAt: changedAt
    };

    this.snapshot.state.orders[index] = after;

    return { before, after };
  }

  approveTask(taskId: string, comment: string): { before: OpitaOfficeTask; after: OpitaOfficeTask } {
    const index = this.snapshot.state.tasks.findIndex((task) => task.id === taskId);

    if (index === -1) {
      throw new Error(`Task not found: ${taskId}`);
    }

    const before = structuredClone(this.snapshot.state.tasks[index]);
    const after: OpitaOfficeTask = {
      ...before,
      status: 'approved',
      comments: [...before.comments, comment]
    };

    this.snapshot.state.tasks[index] = after;

    return { before, after };
  }

  recordAgentAction(input: RecordAgentActionInput): OpitaOfficeAgentAction {
    const action: OpitaOfficeAgentAction = {
      id: createAgentActionId(this.snapshot.state.agentJournal.length + 1),
      createdAt: input.createdAt ?? new Date().toISOString(),
      intent: input.intent,
      proposal: input.proposal,
      decision: input.decision,
      executionSummary: input.executionSummary,
      verificationSummary: input.verificationSummary,
      recommendedNextAction: input.recommendedNextAction
    };

    this.snapshot.state.agentJournal.push(action);

    return action;
  }
}
