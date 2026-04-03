import type { OpitaOfficeSeedState } from './models';
import { opitaOfficeSeedState } from './seed';

export type OpitaOfficeStorageStrategy = 'sqlite-planned' | 'in-memory-bootstrap';

export type OpitaOfficeSandboxSnapshot = {
  businessDate: string;
  state: OpitaOfficeSeedState;
};

export function createAgentActionId(sequence: number): string {
  return `agent_action_${String(sequence).padStart(4, '0')}`;
}

export function getInitialOpitaOfficeSnapshot(businessDate: string): OpitaOfficeSandboxSnapshot {
  return {
    businessDate,
    state: structuredClone(opitaOfficeSeedState)
  };
}

export function shouldResetForNewBusinessDate(currentBusinessDate: string, snapshot: OpitaOfficeSandboxSnapshot): boolean {
  return snapshot.businessDate !== currentBusinessDate;
}

export const opitaOfficeStoragePlan = {
  currentPhase: 'bootstrap' as const,
  currentStrategy: 'in-memory-bootstrap' as OpitaOfficeStorageStrategy,
  targetStrategy: 'sqlite-planned' as OpitaOfficeStorageStrategy,
  resetPolicy: 'reset when business date changes',
  note: 'SQLite queda definido como target para la demo ambiciosa; este primer corte deja modelo, seed y reglas de reset listas.'
};
