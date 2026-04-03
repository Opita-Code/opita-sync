import React from 'react';
import { Callout } from './Callout';
import { InfoPanel } from './InfoPanel';
import { PageShell } from './PageShell';
import { SectionHeading } from './SectionHeading';
import { ValueGrid } from './ValueGrid';

export type ExecutiveControlRoomPageProps = {
  brand: string;
  navLinks: string[];
  beforeItems: string[];
  afterItems: string[];
  intent: string;
  proposal: string;
  executionSummary: string;
  recommendedNextAction: string;
  verificationSummary: string;
  verificationFindings: string[];
  taskId: string;
  taskStatusBefore: string;
  taskStatusAfter: string;
  taskSensitivity: string;
  latestTaskComment: string;
  orderBeforeId: string;
};

export function ExecutiveControlRoomPage({
  brand,
  navLinks,
  beforeItems,
  afterItems,
  intent,
  proposal,
  executionSummary,
  recommendedNextAction,
  verificationSummary,
  verificationFindings,
  taskId,
  taskStatusBefore,
  taskStatusAfter,
  taskSensitivity,
  latestTaskComment,
  orderBeforeId
}: ExecutiveControlRoomPageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <SectionHeading
        eyebrow="Executive control room"
        title="Single-screen operational decision cockpit"
        description="This storytelling variant is intentionally different from the long landing page: it behaves like an incident cockpit where every panel is action-oriented."
      />

      <ValueGrid
        items={[
          {
            eyebrow: 'Signal',
            title: 'Urgent blocked order detected',
            description: `${orderBeforeId} is blocked and ownerless before the intervention.`
          },
          {
            eyebrow: 'Decision',
            title: 'Governed approval completed',
            description: `Task ${taskId} moved from ${taskStatusBefore} to ${taskStatusAfter}.`
          },
          {
            eyebrow: 'Outcome',
            title: 'State improved and verified',
            description: verificationSummary
          }
        ]}
      />

      <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1fr', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 16 }}>
          <InfoPanel title="Before state" items={beforeItems} />
          <Callout>
            <strong>Intent captured from operative flow</strong>
            <p style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.6 }}>{intent}</p>
          </Callout>
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          <InfoPanel title="After state" items={afterItems} tone="muted" />
          <Callout>
            <strong>Execution summary</strong>
            <p style={{ marginTop: 12, marginBottom: 12, lineHeight: 1.6 }}>{executionSummary}</p>
            <p style={{ margin: 0, lineHeight: 1.6 }}>
              <strong>Next best action:</strong> {recommendedNextAction}
            </p>
          </Callout>
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          <InfoPanel title="Governance snapshot" items={[`sensitivity: ${taskSensitivity}`, `latest comment: ${latestTaskComment}`]} />
          <InfoPanel title="Verification findings" items={verificationFindings} tone="muted" />
        </div>
      </section>

      <section style={{ display: 'grid', gap: 16 }}>
        <SectionHeading
          eyebrow="Operator timeline"
          title="From request to evidence in three checkpoints"
          description="A compact narrative for demos where people need an operational sequence, not a marketing page."
        />
        <InfoPanel title="Timeline" items={[`1) Request received: ${intent}`, `2) Proposal + approval: ${proposal}`, `3) Verified outcome: ${verificationSummary}`]} />
      </section>
    </PageShell>
  );
}
