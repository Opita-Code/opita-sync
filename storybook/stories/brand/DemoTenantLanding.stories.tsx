import type { Meta, StoryObj } from '@storybook/react';
import { opitaOfficeDemoLandingContent } from '@opita-code/opita-brand-core';
import { OpitaOfficeDemoPage } from '@opita-code/opita-brand-ui';
import { runOrderRecoveryScenario } from '@opita-code/opita-office-sandbox';

const scenario = runOrderRecoveryScenario('2026-04-03');

const meta: Meta<typeof OpitaOfficeDemoPage> = {
  title: 'Brand/Pages/Demo Tenant Landing',
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

export const ExecutiveLanding: Story = {
  args: {
    brand: 'Opita Sync',
    navLinks: ['Demo', 'Why now', 'Opita Office', 'Audit'],
    hero: {
      eyebrow: opitaOfficeDemoLandingContent.hero.eyebrow,
      title: opitaOfficeDemoLandingContent.hero.title,
      subtitle: opitaOfficeDemoLandingContent.hero.subtitle,
      primaryCtaLabel: opitaOfficeDemoLandingContent.hero.primaryCta,
      secondaryCtaLabel: opitaOfficeDemoLandingContent.hero.secondaryCta
    },
    summaryCards: opitaOfficeDemoLandingContent.summaryCards,
    scenarioThesis: opitaOfficeDemoLandingContent.scenarioThesis,
    whyNowItems: opitaOfficeDemoLandingContent.whyNow,
    whyOpitaSyncItems: opitaOfficeDemoLandingContent.whyOpitaSync,
    trustLayerItems: opitaOfficeDemoLandingContent.trustLayer,
    afterTheCallItems: opitaOfficeDemoLandingContent.afterTheCall,
    beforePanel: {
      title: 'Before',
      items: formatOrderState('Order before change', scenario.orderBefore)
    },
    afterPanel: {
      title: 'After',
      items: formatOrderState('Order after change', scenario.orderAfter),
      tone: 'muted'
    },
    governancePanel: {
      title: 'Approval task',
      items: [
        `task id: ${scenario.taskAfter.id}`,
        `sensitivity: ${scenario.taskAfter.sensitivity}`,
        `status before: ${scenario.taskBefore.status}`,
        `status after: ${scenario.taskAfter.status}`,
        `latest comment: ${scenario.taskAfter.comments[scenario.taskAfter.comments.length - 1]}`
      ]
    },
    verificationPanel: {
      title: 'Verification',
      items: [scenario.verification.summary, ...scenario.verification.findings],
      tone: 'muted'
    },
    intent: scenario.agentAction.intent,
    proposal: scenario.agentAction.proposal,
    executionSummary: scenario.agentAction.executionSummary,
    recommendedNextAction: scenario.agentAction.recommendedNextAction
  }
};
