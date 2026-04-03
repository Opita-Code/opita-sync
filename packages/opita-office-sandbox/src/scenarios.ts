import type { OpitaOfficeAgentAction, OpitaOfficeOrder, OpitaOfficeTask } from './models';
import { OpitaOfficeSandboxStore, verifyOrderOperationalImprovement } from './runtime';

export type OrderRecoveryScenarioResult = {
  businessDate: string;
  orderBefore: OpitaOfficeOrder;
  orderAfter: OpitaOfficeOrder;
  taskBefore: OpitaOfficeTask;
  taskAfter: OpitaOfficeTask;
  verification: ReturnType<typeof verifyOrderOperationalImprovement>;
  agentAction: OpitaOfficeAgentAction;
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
