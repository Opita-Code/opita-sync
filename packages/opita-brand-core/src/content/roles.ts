export type RoleContent = {
  id: 'admin-tenant' | 'operator' | 'approver';
  name: string;
  summary: string;
  storyFocus: string[];
  visualFocus: string[];
  bestAssetTypes: string[];
  avoid: string[];
};

export const roleContents: RoleContent[] = [
  {
    id: 'admin-tenant',
    name: 'Admin tenant',
    summary:
      'Help the tenant admin understand and control both what is enabled for the tenant and who can use, approve or delegate it.',
    storyFocus: ['activating a tenant', 'governing what exists for the tenant', 'governing who can use and delegate it', 'keeping the tenant operable and visible'],
    visualFocus: ['tenant activation / operable state', 'visible catalog and connectors', 'baseline profiles', 'access admin workspace', 'blocked / revoked / approval-sensitive items'],
    bestAssetTypes: ['admin walkthroughs', 'tenant setup diagrams', 'admin landing section', 'admin-specific one-pager'],
    avoid: ['making admin tenant look like a system superuser for everything', 'hiding governance behind generic administration wording']
  },
  {
    id: 'operator',
    name: 'Operator',
    summary: 'Help operators act with less friction while preserving governance, evidence and recovery.',
    storyFocus: ['moving through the governed corridor', 'proposal / preview / execution', 'inspection and recovery'],
    visualFocus: ['intake / proposal workspace', 'readable preview', 'operator workspace', 'inspection and recovery path'],
    bestAssetTypes: ['operator walkthroughs', 'governed corridor visuals', 'preview / inspection storytelling', 'demo sequences by scenario'],
    avoid: ['presenting operator as a free agent with direct execution', 'hiding approvals or recovery from the story']
  },
  {
    id: 'approver',
    name: 'Approver',
    summary: 'Help approvers make sensitive decisions with enough context, reason codes and traceability.',
    storyFocus: ['explicit approval', 'sensitive changes', 'decision traceability', 'release / reject / escalate'],
    visualFocus: ['approval request', 'preview signal', 'release / reject / escalate', 'approval-sensitive grants and delegations'],
    bestAssetTypes: ['approval journey slides', 'governance-specific landing sections', 'approval-sensitive scenario walkthroughs', 'auditability messaging blocks'],
    avoid: ['making approval look like a lightweight click with no consequence', 'hiding why approval exists in the corridor']
  }
];
