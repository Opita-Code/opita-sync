import React from 'react';
import { Callout } from './Callout';
import { InfoPanel } from './InfoPanel';
import { PageShell } from './PageShell';
import { SectionHeading } from './SectionHeading';
import { ValueGrid } from './ValueGrid';

export type RecoveryWarRoomPageProps = {
  brand: string;
  navLinks: string[];
  deviationFindings: string[];
  deviationRecommendation: string;
  initialExecutionSummary: string;
  recoveryProposal: string;
  recoveryExecutionSummary: string;
  recoveryNextAction: string;
  beforeItems: string[];
  afterRecoveryItems: string[];
  verificationFindings: string[];
  initialIntent: string;
  initialProposal: string;
  finalVerificationSummary: string;
};

export function RecoveryWarRoomPage({
  brand,
  navLinks,
  deviationFindings,
  deviationRecommendation,
  initialExecutionSummary,
  recoveryProposal,
  recoveryExecutionSummary,
  recoveryNextAction,
  beforeItems,
  afterRecoveryItems,
  verificationFindings,
  initialIntent,
  initialProposal,
  finalVerificationSummary
}: RecoveryWarRoomPageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <SectionHeading
        eyebrow="Recovery war room"
        title="When first execution is not enough, the system must self-correct"
        description="This story is a different composition style: an incident narrative board centered on deviation diagnosis and remediation checkpoints."
      />

      <ValueGrid
        items={[
          {
            eyebrow: 'Detection',
            title: 'Intermediate state marked as weak',
            description: deviationFindings[0] ?? 'Deviation detected and escalated for recovery.'
          },
          {
            eyebrow: 'Advisor',
            title: 'Recovery recommendation issued',
            description: deviationRecommendation
          },
          {
            eyebrow: 'Closure',
            title: 'Post-recovery verification passed',
            description: finalVerificationSummary
          }
        ]}
      />

      <section style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 16 }}>
          <InfoPanel title="Deviation findings" items={deviationFindings} />
          <Callout>
            <strong>Initial action was valid but insufficient</strong>
            <p style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.6 }}>{initialExecutionSummary}</p>
          </Callout>
          <InfoPanel title="Recovery action" items={[recoveryProposal, recoveryExecutionSummary, `Next step: ${recoveryNextAction}`]} tone="muted" />
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          <InfoPanel title="Before first action" items={beforeItems} />
          <InfoPanel title="After recovery" items={afterRecoveryItems} tone="muted" />
          <InfoPanel title="Verification after recovery" items={verificationFindings} />
        </div>
      </section>

      <section style={{ display: 'grid', gap: 16 }}>
        <SectionHeading
          eyebrow="Audit trail"
          title="Why this builds trust"
          description="The important part is not only that recovery happened, but that the system can explain why recovery was necessary."
        />
        <InfoPanel
          title="Evidence chain"
          items={[
            `Intent: ${initialIntent}`,
            `Initial proposal: ${initialProposal}`,
            `Recovery proposal: ${recoveryProposal}`,
            `Final verification: ${finalVerificationSummary}`
          ]}
        />
      </section>
    </PageShell>
  );
}
