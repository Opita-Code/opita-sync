import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExecutiveControlRoomPage, OpitaOfficeDemoPage } from '@opita-code/opita-brand-ui';
import { runOrderRecoveryScenario } from '@opita-code/opita-office-sandbox';

const scenario = runOrderRecoveryScenario('2026-04-03');

const meta: Meta<typeof OpitaOfficeDemoPage> = {
  title: 'Brand/Pages/Opita Office Sandbox'
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

export const OrderRecoveryFlow: Story = {
  render: () => (
    <OpitaOfficeDemoPage
      brand="Opita Sync"
      navLinks={['Demo tenant', 'Opita Office', 'Audit', 'Verify']}
      hero={{
        eyebrow: 'Demo tenant sandbox',
        title: 'Opita Office — governed operational change over a live ERP sandbox',
        subtitle:
          'This page makes the first demo scenario visible: a blocked urgent order is reviewed, approved, corrected and verified inside the Opita Office sandbox.',
        primaryCtaLabel: 'Review governed change',
        secondaryCtaLabel: 'Inspect verification'
      }}
      summaryCards={[
        {
          eyebrow: 'Intent',
          title: 'A real operational problem exists before the agent acts',
          description: 'The order starts blocked, urgent and without a valid owner, which makes the correction meaningful.'
        },
        {
          eyebrow: 'Governance',
          title: 'Sensitive change still passes through approval',
          description: 'The demo shows that execution is guided and governed, not a direct consequence of a conversation.'
        },
        {
          eyebrow: 'Verification',
          title: 'The system proves whether the change improved the state',
          description: 'After execution, the tenant can inspect whether the order is actually healthier than before.'
        }
      ]}
      scenarioThesis="The wow moment is not just a proposal. It is the full loop: proposal, approval, execution, verification and next-best-action over a system prepared for demo."
      beforePanel={{ title: 'Before', items: formatOrderState('Order before change', scenario.orderBefore) }}
      afterPanel={{ title: 'After', items: formatOrderState('Order after change', scenario.orderAfter), tone: 'muted' }}
      governancePanel={{
        title: 'Approval task',
        items: [
          `task id: ${scenario.taskAfter.id}`,
          `sensitivity: ${scenario.taskAfter.sensitivity}`,
          `status before: ${scenario.taskBefore.status}`,
          `status after: ${scenario.taskAfter.status}`,
          `latest comment: ${scenario.taskAfter.comments[scenario.taskAfter.comments.length - 1]}`
        ]
      }}
      verificationPanel={{ title: 'Verification', items: [scenario.verification.summary, ...scenario.verification.findings], tone: 'muted' }}
      intent={scenario.agentAction.intent}
      proposal={scenario.agentAction.proposal}
      executionSummary={scenario.agentAction.executionSummary}
      recommendedNextAction={scenario.agentAction.recommendedNextAction}
    />
  )
};

export const ExecutiveControlRoom: Story = {
  render: () => (
    <ExecutiveControlRoomPage
      brand="Opita Sync"
      navLinks={['Control room', 'Evidence', 'Governance', 'Verify']}
      beforeItems={formatOrderState('Order before change', scenario.orderBefore)}
      afterItems={formatOrderState('Order after change', scenario.orderAfter)}
      intent={scenario.agentAction.intent}
      proposal={scenario.agentAction.proposal}
      executionSummary={scenario.agentAction.executionSummary}
      recommendedNextAction={scenario.agentAction.recommendedNextAction}
      verificationSummary={scenario.verification.summary}
      verificationFindings={scenario.verification.findings}
      taskId={scenario.taskAfter.id}
      taskStatusBefore={scenario.taskBefore.status}
      taskStatusAfter={scenario.taskAfter.status}
      taskSensitivity={scenario.taskAfter.sensitivity}
      latestTaskComment={scenario.taskAfter.comments[scenario.taskAfter.comments.length - 1]}
      orderBeforeId={scenario.orderBefore.id}
    />
  )
};
