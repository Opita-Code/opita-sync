import React from 'react';
import { Hero, type HeroProps } from './Hero';
import { InfoPanel } from './InfoPanel';
import { PageShell } from './PageShell';
import { SectionHeading } from './SectionHeading';

export type MobileDemoFlowPageProps = {
  brand: string;
  navLinks: string[];
  hero: HeroProps;
  callMoments: string[];
  operatorSignals: string[];
  compactVerification: string[];
  mobilePrinciples: string[];
  liveIntent: string;
  liveProposal: string;
  liveOutcome: string;
};

export function MobileDemoFlowPage({
  brand,
  navLinks,
  hero,
  callMoments,
  operatorSignals,
  compactVerification,
  mobilePrinciples,
  liveIntent,
  liveProposal,
  liveOutcome
}: MobileDemoFlowPageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <Hero {...hero} />
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Live call flow"
          title="What the mobile user experiences during the operative call"
          description="The mobile experience should feel immediate and guided, while still making governance explicit."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          <InfoPanel title="Call moments" items={callMoments} />
          <InfoPanel title="Operator signals" items={operatorSignals} tone="muted" />
        </div>
      </section>
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Compact trust"
          title="What mobile must still prove after the call starts"
          description="Even in a compact flow, the system has to show verification and next-best-action instead of stopping at execution."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          <InfoPanel title="Compact verification" items={compactVerification} />
          <InfoPanel title="Mobile principles" items={mobilePrinciples} tone="muted" />
        </div>
      </section>
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Live sample"
          title="How the same demo case appears from mobile"
          description="This sample keeps the same governed case as the web demo, but framed as a short live-call flow instead of a broad executive page."
        />
        <div style={{ display: 'grid', gap: 16 }}>
          <InfoPanel title="Live intent" items={[liveIntent]} />
          <InfoPanel title="Live proposal" items={[liveProposal]} tone="muted" />
          <InfoPanel title="Live outcome" items={[liveOutcome]} />
        </div>
      </section>
    </PageShell>
  );
}
