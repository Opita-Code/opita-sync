export type OpitaOfficeCustomer = {
  id: string;
  name: string;
  segment: 'enterprise' | 'growth' | 'smb';
  owner: string;
  riskLevel: 'low' | 'medium' | 'high';
  status: 'active' | 'watch' | 'blocked';
};

export type OpitaOfficeOrder = {
  id: string;
  customerId: string;
  status: 'draft' | 'pending' | 'blocked' | 'approved' | 'fulfilled';
  priority: 'normal' | 'high' | 'urgent';
  total: number;
  owner: string;
  lastUpdatedAt: string;
};

export type OpitaOfficeInventoryItem = {
  sku: string;
  productName: string;
  availableUnits: number;
  reorderThreshold: number;
  status: 'healthy' | 'low' | 'critical';
};

export type OpitaOfficeTask = {
  id: string;
  taskType: 'approval' | 'review' | 'remediation';
  subjectRef: string;
  sensitivity: 'normal' | 'sensitive' | 'restricted';
  status: 'open' | 'approved' | 'rejected' | 'completed';
  assignee: string;
  comments: string[];
};

export type OpitaOfficeAgentAction = {
  id: string;
  createdAt: string;
  intent: string;
  proposal: string;
  decision: string;
  executionSummary: string;
  verificationSummary: string;
  recommendedNextAction: string;
};

export type OpitaOfficeSeedState = {
  customers: OpitaOfficeCustomer[];
  orders: OpitaOfficeOrder[];
  inventory: OpitaOfficeInventoryItem[];
  tasks: OpitaOfficeTask[];
  agentJournal: OpitaOfficeAgentAction[];
};
