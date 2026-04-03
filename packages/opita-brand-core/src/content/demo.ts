import type { NarrativePageHero } from './pages';

export type DemoLandingContent = {
  hero: NarrativePageHero;
  summaryCards: { eyebrow: string; title: string; description: string }[];
  scenarioThesis: string;
  whyNow: string[];
  whyOpitaSync: string[];
  trustLayer: string[];
  afterTheCall: string[];
};

export type MobileDemoFlowContent = {
  hero: NarrativePageHero;
  callMoments: string[];
  operatorSignals: string[];
  compactVerification: string[];
  mobilePrinciples: string[];
};

export const opitaOfficeDemoLandingContent: DemoLandingContent = {
  hero: {
    eyebrow: 'Demo tenant',
    title: 'Talk to an operative agent, govern the change, verify the outcome.',
    subtitle:
      'Opita Sync turns a real-time operative request into a governed plan, executes it over a live demo tenant and proves whether the system is healthier after the change. Opita Office is the sandbox ERP that makes that story concrete.',
    primaryCta: 'Start the guided demo',
    secondaryCta: 'Inspect the governed flow'
  },
  summaryCards: [
    {
      eyebrow: 'Vision',
      title: 'This is not a chatbot with automation behind it',
      description: 'The landing-demo positions Opita Sync as a governed operating system for business changes, not as generic conversational software.'
    },
    {
      eyebrow: 'Reality',
      title: 'The demo acts over a live sandbox tenant',
      description: 'The operative agent works over Opita Office, a prepared ERP sandbox that preserves state during the day and can reset to a reproducible baseline.'
    },
    {
      eyebrow: 'Trust',
      title: 'Every meaningful step stays explainable and verifiable',
      description: 'The value is not just execution. The value is proposal, approval, evidence, verification and next-best-action in one governed loop.'
    }
  ],
  scenarioThesis:
    'The landing-demo must feel like a new category of controlled operational system: ambitious, explainable and visibly superior to fragmented manual coordination.',
  whyNow: [
    'operational work is still fragmented across approvals, spreadsheets, tickets and partial automation',
    'teams want AI speed but cannot afford to lose auditability and control',
    'critical changes need systems that can propose, execute and verify instead of only route humans manually'
  ],
  whyOpitaSync: [
    'it treats AI as the interaction layer, not as the unchecked source of authority',
    'it keeps governance, evidence and recovery visible across the same flow',
    'it can demonstrate the value over a real sandbox tenant instead of hiding behind static slides'
  ],
  trustLayer: [
    'every meaningful step leaves evidence that can be reconstructed later',
    'the system separates proposal, approval, execution and verification instead of hiding them in one black box',
    'recovery remains available if the change does not improve the state or introduces new drift'
  ],
  afterTheCall: [
    'the system records what was proposed and what was actually approved',
    'the change executes over the sandbox tenant and leaves evidence',
    'the demo verifies whether the state improved and recommends the next-best action'
  ]
};

export const opitaOfficeMobileDemoFlowContent: MobileDemoFlowContent = {
  hero: {
    eyebrow: 'Mobile live call',
    title: 'Call the operative agent, get a governed answer, track the change in real time.',
    subtitle:
      'The mobile experience is not a compressed website. It is the live entrypoint of the demo tenant: a guided operative call that becomes a governed change over Opita Office.',
    primaryCta: 'Start the live call',
    secondaryCta: 'See what happens next'
  },
  callMoments: [
    'the user starts a live call with the operative agent',
    'the agent interprets the request quickly and asks one or two high-value questions',
    'the system returns a governed proposal before any meaningful execution happens'
  ],
  operatorSignals: [
    'the mobile UI keeps the operator oriented with short state transitions',
    'sensitive changes surface approval needs instead of hiding them',
    'the user can see whether the system is proposing, waiting, executing or verifying'
  ],
  compactVerification: [
    'mobile should summarize whether the change improved the state',
    'the result must name what changed and what risk still exists',
    'the next-best-action should appear immediately after verification'
  ],
  mobilePrinciples: [
    'real-time entry, not long-form dashboard',
    'guided brevity over dense explanation',
    'trust through explicit state changes',
    'the call starts the governed loop, it does not bypass it'
  ]
};
