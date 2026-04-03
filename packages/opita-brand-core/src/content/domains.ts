export type DomainContent = {
  id: 'tenant-configuration-governance' | 'tenant-access-and-delegation-governance';
  name: string;
  summary: string;
  primaryAudience: string[];
  storyFocus: string[];
  visualFocus: string[];
  messageBlocks: string[];
  avoid: string[];
};

export const domainContents: DomainContent[] = [
  {
    id: 'tenant-configuration-governance',
    name: 'Tenant configuration governance',
    summary:
      'Help teams govern what exists and is enabled for a tenant without losing preview, approval, evidence or recovery.',
    primaryAudience: ['admin tenant', 'operator'],
    storyFocus: ['what is enabled for a tenant', 'capabilities', 'connectors', 'policy / approval / classification baselines', 'tenant operability'],
    visualFocus: ['tenant bootstrap', 'visible catalog', 'connector projection', 'baseline governance profiles', 'governed preview and promotion'],
    messageBlocks: ['tenant activation to operable', 'enable / disable capabilities', 'enable / disable connectors', 'preview before promotion', 'inspection and recovery when changes go wrong'],
    avoid: ['broad interoperability claims', 'generic AI platform framing', 'access/delegation language as main theme']
  },
  {
    id: 'tenant-access-and-delegation-governance',
    name: 'Tenant access and delegation governance',
    summary:
      'Help teams govern who can act inside the tenant with explicit approval, revocation and delegation controls.',
    primaryAudience: ['admin tenant', 'approver'],
    storyFocus: ['who can use a capability', 'who can approve a capability', 'who can delegate authority', 'how grants and delegations are revoked and audited'],
    visualFocus: ['capability grants', 'sensitive grants blocked for approval', 'delegation paths', 'revoke flows', 'access admin workspace'],
    messageBlocks: ['grant visible capability', 'approve sensitive access', 'revoke explicitly and visibly', 'delegate with controlled authority', 'prevent hidden authority drift'],
    avoid: ['treating access as generic IAM enterprise platform', 'overpromising federation or identity breadth', 'hiding approval-sensitive changes behind vague automation language']
  }
];
