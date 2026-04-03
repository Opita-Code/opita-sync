import type { OpitaOfficeSeedState } from './models';

export const opitaOfficeSeedState: OpitaOfficeSeedState = {
  customers: [
    { id: 'cust_001', name: 'Northwind Retail', segment: 'enterprise', owner: 'Lucía', riskLevel: 'medium', status: 'watch' },
    { id: 'cust_002', name: 'Atlas Logistics', segment: 'growth', owner: 'Tomás', riskLevel: 'high', status: 'active' },
    { id: 'cust_003', name: 'Blue Harbor Foods', segment: 'smb', owner: 'Martina', riskLevel: 'low', status: 'active' }
  ],
  orders: [
    { id: 'ord_1001', customerId: 'cust_001', status: 'blocked', priority: 'urgent', total: 18250, owner: 'Unassigned', lastUpdatedAt: '2026-04-03T08:00:00Z' },
    { id: 'ord_1002', customerId: 'cust_002', status: 'pending', priority: 'high', total: 9600, owner: 'Tomás', lastUpdatedAt: '2026-04-03T08:15:00Z' },
    { id: 'ord_1003', customerId: 'cust_003', status: 'draft', priority: 'normal', total: 2400, owner: 'Martina', lastUpdatedAt: '2026-04-03T08:20:00Z' }
  ],
  inventory: [
    { sku: 'sku_001', productName: 'Office Hub', availableUnits: 42, reorderThreshold: 20, status: 'healthy' },
    { sku: 'sku_002', productName: 'Sync Bridge', availableUnits: 8, reorderThreshold: 10, status: 'low' },
    { sku: 'sku_003', productName: 'Approval Pad', availableUnits: 2, reorderThreshold: 8, status: 'critical' }
  ],
  tasks: [
    { id: 'task_001', taskType: 'approval', subjectRef: 'ord_1001', sensitivity: 'restricted', status: 'open', assignee: 'Approver', comments: ['Urgent order with missing owner assignment'] },
    { id: 'task_002', taskType: 'review', subjectRef: 'cust_002', sensitivity: 'sensitive', status: 'open', assignee: 'Admin tenant', comments: ['Customer risk profile changed this week'] }
  ],
  agentJournal: []
};
