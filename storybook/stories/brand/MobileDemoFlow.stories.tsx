import type { Meta, StoryObj } from '@storybook/react';
import { opitaOfficeMobileDemoFlowContent } from '@opita-code/opita-brand-core';
import { MobileDemoFlowPage } from '@opita-code/opita-brand-ui';
import { runOrderRecoveryScenario } from '@opita-code/opita-office-sandbox';

const scenario = runOrderRecoveryScenario('2026-04-03');

const meta: Meta<typeof MobileDemoFlowPage> = {
  title: 'Brand/Pages/Mobile Demo Flow',
  component: MobileDemoFlowPage
};

export default meta;

type Story = StoryObj<typeof MobileDemoFlowPage>;

export const LiveCallEntry: Story = {
  args: {
    brand: 'Opita Sync',
    navLinks: ['Mobile', 'Live call', 'Verify', 'Next action'],
    hero: {
      eyebrow: opitaOfficeMobileDemoFlowContent.hero.eyebrow,
      title: opitaOfficeMobileDemoFlowContent.hero.title,
      subtitle: opitaOfficeMobileDemoFlowContent.hero.subtitle,
      primaryCtaLabel: opitaOfficeMobileDemoFlowContent.hero.primaryCta,
      secondaryCtaLabel: opitaOfficeMobileDemoFlowContent.hero.secondaryCta
    },
    callMoments: opitaOfficeMobileDemoFlowContent.callMoments,
    operatorSignals: opitaOfficeMobileDemoFlowContent.operatorSignals,
    compactVerification: opitaOfficeMobileDemoFlowContent.compactVerification,
    mobilePrinciples: opitaOfficeMobileDemoFlowContent.mobilePrinciples,
    liveIntent: scenario.agentAction.intent,
    liveProposal: scenario.agentAction.proposal,
    liveOutcome: `${scenario.agentAction.executionSummary} ${scenario.agentAction.verificationSummary}`
  }
};
