import type { OpitaOfficeAgentAction, OpitaOfficeOrder, OpitaOfficeTask } from './models';
import { OpitaOfficeSandboxStore, assessOrderDeviation, verifyOrderOperationalImprovement } from './runtime';

export type OrderRecoveryScenarioResult = {
  businessDate: string;
  orderBefore: OpitaOfficeOrder;
  orderAfter: OpitaOfficeOrder;
  taskBefore: OpitaOfficeTask;
  taskAfter: OpitaOfficeTask;
  verification: ReturnType<typeof verifyOrderOperationalImprovement>;
  agentAction: OpitaOfficeAgentAction;
};

export type OrderDeviationRecoveryScenarioResult = {
  businessDate: string;
  orderBefore: OpitaOfficeOrder;
  orderAfterInitialChange: OpitaOfficeOrder;
  orderAfterRecovery: OpitaOfficeOrder;
  deviation: ReturnType<typeof assessOrderDeviation>;
  verificationAfterRecovery: ReturnType<typeof verifyOrderOperationalImprovement>;
  initialAgentAction: OpitaOfficeAgentAction;
  recoveryAgentAction: OpitaOfficeAgentAction;
};

export function runOrderRecoveryScenario(businessDate: string): OrderRecoveryScenarioResult {
  const store = new OpitaOfficeSandboxStore(businessDate);
  const changedAt = `${businessDate}T10:30:00Z`;

  const task = store.approveTask('task_001', 'Approved during demo flow after reviewing the governed proposal.');
  const order = store.patchOrder(
    'ord_1001',
    {
      owner: 'Lucía',
      status: 'approved',
      priority: 'high'
    },
    changedAt
  );

  const verification = verifyOrderOperationalImprovement(order.before, order.after);

  const agentAction = store.recordAgentAction({
    intent: 'Corregir una orden urgente bloqueada y dejarla lista para continuar el flujo operativo.',
    proposal:
      'Asignar owner válido, remover el estado blocked, reducir la prioridad a high y conservar trazabilidad del cambio como acción gobernada.',
    decision: 'Approval granted for the sensitive operational update after review of the proposed correction.',
    executionSummary:
      'Updated order ord_1001: owner set to Lucía, status moved to approved, priority reduced from urgent to high.',
    verificationSummary: verification.summary,
    recommendedNextAction:
      'Verificar si existen otras órdenes urgentes sin owner válido y revisar si el customer asociado necesita seguimiento adicional.'
  });

  return {
    businessDate,
    orderBefore: order.before,
    orderAfter: order.after,
    taskBefore: task.before,
    taskAfter: task.after,
    verification,
    agentAction
  };
}

export function runOrderDeviationRecoveryScenario(businessDate: string): OrderDeviationRecoveryScenarioResult {
  const store = new OpitaOfficeSandboxStore(businessDate);
  const changedAt = `${businessDate}T11:10:00Z`;
  const recoveryAt = `${businessDate}T11:18:00Z`;

  const firstChange = store.patchOrder(
    'ord_1001',
    {
      owner: 'Temporary Bot',
      status: 'pending',
      priority: 'urgent'
    },
    changedAt
  );

  const deviation = assessOrderDeviation(firstChange.after);

  const initialAgentAction = store.recordAgentAction({
    intent: 'Corregir rápidamente una orden urgente bloqueada para que deje de estar detenida.',
    proposal:
      'Mover la orden fuera de blocked y asignar un owner temporal mientras se estabiliza el flujo.',
    decision: 'Cambio inicial ejecutado como corrección parcial para liberar el cuello de botella inmediato.',
    executionSummary:
      'The order moved from blocked to pending with owner Temporary Bot, but retained urgent priority.',
    verificationSummary: deviation.recommendation,
    recommendedNextAction: 'Run recovery to replace the temporary owner and normalize priority before considering the order stable.'
  });

  const recovery = store.patchOrder(
    'ord_1001',
    {
      owner: 'Lucía',
      status: 'approved',
      priority: 'high'
    },
    recoveryAt
  );

  const verificationAfterRecovery = verifyOrderOperationalImprovement(firstChange.before, recovery.after);

  const recoveryAgentAction = store.recordAgentAction({
    intent: 'Cerrar el desvío detectado después de la corrección parcial.',
    proposal:
      'Aplicar recovery sobre la orden: owner estable, prioridad normalizada y estado coherente con el flujo aprobado.',
    decision: 'Recovery path executed after deviation detection and review of the partial correction.',
    executionSummary:
      'The order was stabilized with owner Lucía, status approved and priority reduced to high.',
    verificationSummary: verificationAfterRecovery.summary,
    recommendedNextAction:
      'Inspect whether similar urgent orders still rely on temporary ownership and open a remediation sweep if needed.'
  });

  return {
    businessDate,
    orderBefore: firstChange.before,
    orderAfterInitialChange: firstChange.after,
    orderAfterRecovery: recovery.after,
    deviation,
    verificationAfterRecovery,
    initialAgentAction,
    recoveryAgentAction
  };
}
