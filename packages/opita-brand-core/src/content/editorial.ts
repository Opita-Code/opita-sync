export type OnePagerContent = {
  headline: string;
  summary: string;
  proofPoints: string[];
};

export type SalesEmailContent = {
  subject: string;
  intro: string;
  positioning: string;
  nextStep: string;
};

export type DomainBridgeContent = {
  title: string;
  summary: string;
  bridgeStatement: string;
  avoid: string[];
};

export type ArchitectureStoryContent = {
  title: string;
  summary: string;
  productSurfaces: string[];
  governedCorridor: string[];
  osfAuthority: string[];
  focusCenter: string[];
};

export const companyBoilerplate =
  'Opita Sync is an AI-first governed control plane built on top of Opita Sync Framework (OSF). It helps organizations activate tenants, govern operational changes and workflows, and preserve approvals, evidence, inspection and recovery over real systems without losing control.';

export const onePagerContent: OnePagerContent = {
  headline: 'Operate governed business changes with AI-first guidance.',
  summary:
    'Opita Sync is an AI-first governed control plane built on top of OSF. It helps organizations activate tenants, govern sensitive changes, and preserve approvals, evidence, inspection and recovery over real workflows.',
  proofPoints: [
    'tenant activation to an operable state',
    'governed corridor from intent to recovery',
    'two real product domains already in use',
    'explicit approvals, evidence and recovery paths'
  ]
};

export const salesEmailContent: SalesEmailContent = {
  subject: 'Governed control for [team / process]',
  intro:
    'We think Opita Sync may be relevant because your team operates sensitive changes while still needing approval, traceability and control.',
  positioning:
    'Opita Sync is not a generic AI platform. It is an AI-first governed control plane built to make those changes clearer, reviewable and recoverable.',
  nextStep:
    'A practical next step is a short session to map one tenant use case, its approval posture and the expected outcome.'
};

export const domainBridgeContent: DomainBridgeContent = {
  title: 'The two domains form one coherent system',
  summary:
    'Domain 1 governs what is available for a tenant. Domain 2 governs who can use, approve or delegate what exists. They must be presented together as one operating model.',
  bridgeStatement: 'Domain 1 governs what is available. Domain 2 governs who can act on it.',
  avoid: ['showing them as unrelated product lines', 'making domain 2 look like an optional add-on']
};

export const architectureStoryContent: ArchitectureStoryContent = {
  title: 'Architecture map — product over kernel, experience over authority confusion',
  summary:
    'This story explains the current product structure clearly: Opita Sync is the product/control plane and OSF is the governed kernel. The center is governed control, AI-first experience and canonical authority in OSF.',
  productSurfaces: ['admin tenant', 'operator', 'approver', 'AI-first experience'],
  governedCorridor: ['intake', 'proposal', 'preview', 'governance', 'execution', 'inspection/recovery'],
  osfAuthority: ['contracts', 'policy', 'approvals', 'runtime', 'event log', 'evidence', 'inspection/recovery core'],
  focusCenter: ['governed control plane', 'AI-first experience', 'canonical authority in OSF']
};
