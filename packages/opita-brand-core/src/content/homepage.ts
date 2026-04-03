export type HomepageValueCard = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HomepageHeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

export const homepageHeroContent: HomepageHeroContent = {
  eyebrow: 'AI-first governed control plane',
  title: 'Operate business changes with control, evidence and recovery.',
  subtitle:
    'Opita Sync is a governed control plane built on OSF. It helps teams move from intent to proposal, preview, approval, execution, inspection and recovery without losing authority, evidence or traceability.',
  primaryCta: 'See how the governed corridor works',
  secondaryCta: 'Explore the two product domains'
};

export const homepageValueCards: HomepageValueCard[] = [
  {
    eyebrow: 'Tenant',
    title: 'Activate a tenant',
    description: 'Bootstrap governance, visible catalog and connectors until a tenant becomes operable.'
  },
  {
    eyebrow: 'Control',
    title: 'Govern every sensitive step',
    description: 'Preview, approvals, evidence and recovery stay visible instead of disappearing behind automation.'
  },
  {
    eyebrow: 'Domains',
    title: 'Operate two real product domains',
    description: 'Start with tenant configuration governance and tenant access/delegation governance as real product surfaces.'
  }
];
