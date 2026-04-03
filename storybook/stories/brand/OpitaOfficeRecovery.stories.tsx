import type { Meta, StoryObj } from '@storybook/react';
import { OpitaOfficeDemoPage } from '@opita-code/opita-brand-ui';
import { runOrderDeviationRecoveryScenario } from '@opita-code/opita-office-sandbox';

const scenario = runOrderDeviationRecoveryScenario('2026-04-03');

const meta: Meta<typeof OpitaOfficeDemoPage> = {
  title: 'Brand/Pages/Opita Office Recovery',
  component: OpitaOfficeDemoPage
};

export default meta;

type Story = StoryObj<typeof OpitaOfficeDemoPage>;

function formatOrderState(label: string, order: typeof scenario.orderBefore) {
  return [
    `${label}`,
    `order id: ${order.id}`,
    `status: ${order.status}`,
    `priority: ${order.priority}`,
    `owner: ${order.owner}`,
    `total: ${order.total}`,
    `updated at: ${order.lastUpdatedAt}`
  ];
}

export const DeviationAndRecovery: Story = {
  args: {
    brand: 'Opita Sync',
    navLinks: ['Recovery', 'Deviation', 'Verify', 'Remediate'],
    hero: {
      eyebrow: 'Recovery scenario',
      title: 'Detect the deviation, run the recovery, prove the state improved.',
      subtitle:
        'This scenario shows that the demo tenant is not only capable of acting. It can detect that an initial correction was insufficient, recommend a recovery path and stabilize the order afterwards.',
      primaryCtaLabel: 'Inspect deviation',
      secondaryCtaLabel: 'Review recovery path'
    },
    summaryCards: [
      {
        eyebrow: 'Deviation',
        title: 'A partial correction is not treated as success by default',
        description: 'The system can recognize when a change moved something forward but still left an unhealthy operational pattern.'
      },
      {
        eyebrow: 'Recovery',
        title: 'The agent proposes a stabilizing follow-up action',
        description: 'The demo becomes more credible when it can recover from a weak intermediate state instead of celebrating it.'
      },
      {
        eyebrow: 'Trust',
        title: 'The outcome is verified again after the recovery path',
        description: 'The final state must prove that the recovery actually improved the order rather than just moving it around.'
      }
    ],
    scenarioThesis:
      'A truly ambitious demo should show that the system can detect a weak intermediate decision and recommend the next stabilizing move instead of pretending every first action was already correct.',
    whyNowItems: [
      'operators often stop after the first partial fix because the system gives them no better feedback',
      'AI becomes much more credible when it can say this is still not healthy enough',
      'executives trust systems that can self-criticize and recover, not only execute'
    ],
    whyOpitaSyncItems: [
      'it can differentiate partial progress from a stable outcome',
      'it keeps the recovery path governed instead of hiding it in manual cleanup',
      'it turns deviation detection into a visible product capability'
    ],
    trustLayerItems: [
      'the deviation is named explicitly instead of being hidden',
      'the system records both the initial change and the recovery decision',
      'the final verification confirms whether the state is actually healthier'
    ],
    afterTheCallItems: [
      'the initial correction runs and the system evaluates the new state',
      'a deviation advisor recommends a stabilizing follow-up action',
      'the recovery path executes and closes with a second verification'
    ],
    beforePanel: {
      title: 'Before',
      items: formatOrderState('Order before first action', scenario.orderBefore)
    },
    afterPanel: {
      title: 'After recovery',
      items: formatOrderState('Order after recovery', scenario.orderAfterRecovery),
      tone: 'muted'
    },
    governancePanel: {
      title: 'Deviation advisor',
      items: [scenario.deviation.recommendation, ...scenario.deviation.findings]
    },
    verificationPanel: {
      title: 'Verification after recovery',
      items: [scenario.verificationAfterRecovery.summary, ...scenario.verificationAfterRecovery.findings],
      tone: 'muted'
    },
    intent: scenario.initialAgentAction.intent,
    proposal: `${scenario.initialAgentAction.proposal} Recovery proposal: ${scenario.recoveryAgentAction.proposal}`,
    executionSummary: `${scenario.initialAgentAction.executionSummary} Recovery: ${scenario.recoveryAgentAction.executionSummary}`,
    recommendedNextAction: scenario.recoveryAgentAction.recommendedNextAction
  }
};
