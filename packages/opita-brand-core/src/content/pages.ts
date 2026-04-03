import type { DomainContent } from './domains';
import type { RoleContent } from './roles';

export type NarrativePageHero = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export type DomainPageContent = {
  domainId: DomainContent['id'];
  hero: NarrativePageHero;
  summaryCards: { eyebrow: string; title: string; description: string }[];
};

export type RolePageContent = {
  roleId: RoleContent['id'];
  hero: NarrativePageHero;
  summaryCards: { eyebrow: string; title: string; description: string }[];
};

export type OverviewPageContent = {
  hero: NarrativePageHero;
  summaryCards: { eyebrow: string; title: string; description: string }[];
};

export type StoryNarrativeContent = {
  id: 'governed-corridor' | 'evidence-recovery' | 'controlled-adoption';
  hero: NarrativePageHero;
  summaryCards: { eyebrow: string; title: string; description: string }[];
  sequenceTitle: string;
  sequenceItems: string[];
  principlesTitle: string;
  principlesItems: string[];
};

export const domainPageContents: DomainPageContent[] = [
  {
    domainId: 'tenant-configuration-governance',
    hero: {
      eyebrow: 'Domain 1',
      title: 'Make tenant configuration changes operable, visible and governed.',
      subtitle:
        'Use Opita Sync to govern what exists for a tenant: capabilities, connectors and baseline profiles, with preview, approval, evidence and recovery kept explicit.',
      primaryCtaLabel: 'Explore tenant operability',
      secondaryCtaLabel: 'Review configuration governance'
    },
    summaryCards: [
      {
        eyebrow: 'Operability',
        title: 'Bootstrap until the tenant becomes operable',
        description: 'The story starts when a tenant can be activated into a usable governed state, not when a dashboard looks polished.'
      },
      {
        eyebrow: 'Catalog',
        title: 'Govern what exists and is enabled',
        description: 'Capabilities, connectors and governance baselines stay visible instead of living in hidden configuration sprawl.'
      },
      {
        eyebrow: 'Control',
        title: 'Preview and recover configuration changes',
        description: 'Configuration promotion stays auditable and recoverable instead of becoming blind automation.'
      }
    ]
  },
  {
    domainId: 'tenant-access-and-delegation-governance',
    hero: {
      eyebrow: 'Domain 2',
      title: 'Govern who can act inside the tenant with explicit authority.',
      subtitle:
        'Use Opita Sync to control grants, approvals, delegation and revoke paths without turning tenant access into vague automation or oversized IAM framing.',
      primaryCtaLabel: 'Explore authority governance',
      secondaryCtaLabel: 'Review grants and delegation'
    },
    summaryCards: [
      {
        eyebrow: 'Authority',
        title: 'Make grants and delegation explicit',
        description: 'The value is not generic access management. The value is visible tenant authority with controlled change paths.'
      },
      {
        eyebrow: 'Approval',
        title: 'Block sensitive actions behind approval',
        description: 'Approval-sensitive grants and delegations should feel intentional, inspectable and justified.'
      },
      {
        eyebrow: 'Revocation',
        title: 'Keep revoke and drift prevention visible',
        description: 'Access control is only credible if revoke and authority drift are treated as first-class operational concerns.'
      }
    ]
  }
];

export const rolePageContents: RolePageContent[] = [
  {
    roleId: 'admin-tenant',
    hero: {
      eyebrow: 'Role narrative',
      title: 'Give the tenant admin explicit control without turning them into a superuser myth.',
      subtitle:
        'The admin tenant story should show how one role keeps operability, visible catalog, delegation boundaries and governance ownership coherent across the product.',
      primaryCtaLabel: 'Explore admin authority',
      secondaryCtaLabel: 'Review tenant governance'
    },
    summaryCards: [
      {
        eyebrow: 'Enablement',
        title: 'Control what exists for the tenant',
        description: 'Admin tenant must be able to reason about capabilities, connectors and baselines without hidden platform behavior.'
      },
      {
        eyebrow: 'Authority',
        title: 'Control who can use, approve or delegate it',
        description: 'The role matters because authority boundaries stay legible instead of dissolving into generic administration language.'
      },
      {
        eyebrow: 'Visibility',
        title: 'Keep the tenant operable and observable',
        description: 'Operability is a governance responsibility, not only a setup task.'
      }
    ]
  },
  {
    roleId: 'operator',
    hero: {
      eyebrow: 'Role narrative',
      title: 'Help operators move faster without erasing governance.',
      subtitle:
        'The operator story should show one governed corridor from intake to inspection and recovery, instead of pretending execution can bypass authority, approvals or evidence.',
      primaryCtaLabel: 'Explore operator flow',
      secondaryCtaLabel: 'Review governed corridor'
    },
    summaryCards: [
      {
        eyebrow: 'Corridor',
        title: 'Move through proposal, preview and execution',
        description: 'Operator value lives in guided flow, not in direct opaque automation.'
      },
      {
        eyebrow: 'Inspection',
        title: 'Keep inspection and recovery visible',
        description: 'The corridor is only credible if outcomes, evidence and recovery stay legible after action.'
      },
      {
        eyebrow: 'Friction',
        title: 'Reduce effort without turning the role into a free agent',
        description: 'Speed matters, but not at the cost of removing governance checkpoints from the story.'
      }
    ]
  },
  {
    roleId: 'approver',
    hero: {
      eyebrow: 'Role narrative',
      title: 'Make sensitive decisions with traceability, not lightweight approval theater.',
      subtitle:
        'The approver story should show why approval exists, what context backs the decision and how release, reject and escalate remain explicit inside the governed corridor.',
      primaryCtaLabel: 'Explore approver flow',
      secondaryCtaLabel: 'Review approval authority'
    },
    summaryCards: [
      {
        eyebrow: 'Decision',
        title: 'Approve with enough context to matter',
        description: 'Approval only adds value if the decision is informed, explicit and justified.'
      },
      {
        eyebrow: 'Traceability',
        title: 'Keep release, reject and escalate auditable',
        description: 'Decision paths must remain visible in the corridor instead of collapsing into a binary click.'
      },
      {
        eyebrow: 'Authority',
        title: 'Protect high-risk actions with real governance',
        description: 'Sensitive changes need authority framing, not vague automation language.'
      }
    ]
  }
];

export const overviewPageContent: OverviewPageContent = {
  hero: {
    eyebrow: 'Product overview',
    title: 'One governed control plane, two real domains, explicit authority by role.',
    subtitle:
      'Use this page to explain Opita Sync as a whole: tenant operability, governed change flow, explicit authority and recoverable outcomes built on top of OSF.',
    primaryCtaLabel: 'Explore the product domains',
    secondaryCtaLabel: 'Review governed roles'
  },
  summaryCards: [
    {
      eyebrow: 'Product',
      title: 'Operate business changes through one governed corridor',
      description: 'The product value is not a chatbot or a generic platform. It is a visible corridor from intent to recovery.'
    },
    {
      eyebrow: 'Domains',
      title: 'Carry tenant configuration and tenant authority as real domains',
      description: 'The breadth that matters today is already here: what exists for a tenant, and who can act inside it.'
    },
    {
      eyebrow: 'Roles',
      title: 'Keep admin, operator and approver authority explicit',
      description: 'The narrative stays strong when every role has visible responsibility inside the product.'
    }
  ]
};

export const storyNarrativeContents: StoryNarrativeContent[] = [
  {
    id: 'governed-corridor',
    hero: {
      eyebrow: 'Governed corridor',
      title: 'Show the path from intent to recovery without implying free execution from chat.',
      subtitle:
        'This page explains the core sequence of Opita Sync: AI-first experience, governed preview, explicit approval, execution, inspection and recovery inside one visible corridor.',
      primaryCtaLabel: 'Explore the corridor',
      secondaryCtaLabel: 'Review governed steps'
    },
    summaryCards: [
      {
        eyebrow: 'Intent',
        title: 'Capture intent without equating conversation to execution',
        description: 'The product starts by interpreting intent, not by letting chat mutate systems directly.'
      },
      {
        eyebrow: 'Governance',
        title: 'Keep preview and approval explicit',
        description: 'The corridor only has value if governance remains visible before execution happens.'
      },
      {
        eyebrow: 'Recovery',
        title: 'Leave inspection and recovery available after action',
        description: 'The story closes only when outcomes can still be explained and corrected.'
      }
    ],
    sequenceTitle: 'Corridor sequence',
    sequenceItems: [
      'intent captured',
      'proposal created',
      'preview reviewed',
      'governance applied',
      'execution runs',
      'inspection and recovery remain available'
    ],
    principlesTitle: 'Mandatory labels',
    principlesItems: [
      'AI-first experience',
      'governed preview',
      'explicit approval',
      'canonical evidence',
      'inspection and recovery'
    ]
  },
  {
    id: 'evidence-recovery',
    hero: {
      eyebrow: 'Evidence and recovery',
      title: 'The product is valuable because it stays explainable and recoverable after execution.',
      subtitle:
        'This page explains why Opita Sync matters beyond action: evidence remains canonical, inspection reconstructs the case and recovery stays explicit instead of being treated as an afterthought.',
      primaryCtaLabel: 'Explore evidence trail',
      secondaryCtaLabel: 'Review recovery path'
    },
    summaryCards: [
      {
        eyebrow: 'Evidence',
        title: 'Store canonical records for every meaningful path',
        description: 'Evidence is part of product value, not just debug residue.'
      },
      {
        eyebrow: 'Inspection',
        title: 'Reconstruct what happened end-to-end',
        description: 'The system must explain not only what ran, but why, under which approvals and with which correlated artifacts.'
      },
      {
        eyebrow: 'Recovery',
        title: 'Keep correction explicit and governed',
        description: 'Recovery remains a first-class path instead of an informal side process.'
      }
    ],
    sequenceTitle: 'Evidence sequence',
    sequenceItems: [
      'change is proposed',
      'preview exposes risk and approvals',
      'execution stays correlated',
      'evidence is stored canonically',
      'inspection reconstructs the case',
      'recovery remains explicit and governed'
    ],
    principlesTitle: 'Mandatory terms',
    principlesItems: [
      'evidence trail',
      'canonical records',
      'inspection view',
      'explicit recovery',
      'no direct mutation outside governed paths'
    ]
  },
  {
    id: 'controlled-adoption',
    hero: {
      eyebrow: 'Controlled adoption',
      title: 'Demonstrate value clearly in a few real cases before chasing breadth.',
      subtitle:
        'This page explains the post-consolidation move of the product: use the two real domains in guided adoption with a few tenants, close support, real feedback and visible governance value.',
      primaryCtaLabel: 'Explore controlled adoption',
      secondaryCtaLabel: 'Review adoption criteria'
    },
    summaryCards: [
      {
        eyebrow: 'Focus',
        title: 'Choose cases where operational pain is obvious',
        description: 'The product should start where repetitive requests, scattered approvals and unclear traceability already hurt.'
      },
      {
        eyebrow: 'Guidance',
        title: 'Show the two domains through a simple guided narrative',
        description: 'The story must explain what exists for a tenant and who can use, approve or delegate it.'
      },
      {
        eyebrow: 'Signal',
        title: 'Capture operational and commercial evidence, not vanity breadth',
        description: 'The point is repeatability, tenant activation clarity and perceived value of approvals, audit trail and recovery.'
      }
    ],
    sequenceTitle: 'Adoption phases',
    sequenceItems: [
      'select a short list of painful cases',
      'run a guided demo per domain',
      'activate a few tenants with close support',
      'capture operational and commercial feedback',
      'decide whether to expand adoption or open the next strategic move'
    ],
    principlesTitle: 'What to preserve',
    principlesItems: [
      'few tenants',
      'close accompaniment',
      'clear governance value',
      'real feedback',
      'no premature breadth'
    ]
  }
];
