import React from 'react';
import { Callout } from './Callout';
import { Hero, type HeroProps } from './Hero';
import { InfoPanel } from './InfoPanel';
import { PageShell } from './PageShell';
import { SectionHeading } from './SectionHeading';
import { ValueGrid, type ValueGridItem } from './ValueGrid';

export type OpitaOfficeDemoPanel = {
  title: string;
  items: string[];
  tone?: 'default' | 'muted';
};

export type OpitaOfficeDemoPageProps = {
  brand: string;
  navLinks: string[];
  hero: HeroProps;
  summaryCards: ValueGridItem[];
  scenarioThesis: string;
  whyNowItems: string[];
  whyOpitaSyncItems: string[];
  trustLayerItems: string[];
  afterTheCallItems: string[];
  beforePanel: OpitaOfficeDemoPanel;
  afterPanel: OpitaOfficeDemoPanel;
  governancePanel: OpitaOfficeDemoPanel;
  verificationPanel: OpitaOfficeDemoPanel;
  intent: string;
  proposal: string;
  executionSummary: string;
  recommendedNextAction: string;
};

export function OpitaOfficeDemoPage({
  brand,
  navLinks,
  hero,
  summaryCards,
  scenarioThesis,
  whyNowItems,
  whyOpitaSyncItems,
  trustLayerItems,
  afterTheCallItems,
  beforePanel,
  afterPanel,
  governancePanel,
  verificationPanel,
  intent,
  proposal,
  executionSummary,
  recommendedNextAction
}: OpitaOfficeDemoPageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <Hero {...hero} />
      <ValueGrid items={summaryCards} />
      <Callout>
        <strong>Scenario thesis</strong>
        <p style={{ marginBottom: 0, marginTop: 12, lineHeight: 1.6 }}>{scenarioThesis}</p>
      </Callout>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        <InfoPanel title="Why now" items={whyNowItems} />
        <InfoPanel title="Why Opita Sync" items={whyOpitaSyncItems} tone="muted" />
      </section>
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Trust layer"
          title="Why an executive can trust what this system is doing"
          description="The demo should make evidence, explainability and recovery feel central to the product instead of optional technical extras."
        />
        <InfoPanel title="Evidence, trust and recovery" items={trustLayerItems} tone="muted" />
      </section>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        <InfoPanel title={beforePanel.title} items={beforePanel.items} tone={beforePanel.tone} />
        <InfoPanel title={afterPanel.title} items={afterPanel.items} tone={afterPanel.tone} />
      </section>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        <InfoPanel title={governancePanel.title} items={governancePanel.items} tone={governancePanel.tone} />
        <InfoPanel title={verificationPanel.title} items={verificationPanel.items} tone={verificationPanel.tone} />
      </section>
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="After the call"
          title="What happens after the operative request is captured"
          description="The landing-demo should make the post-call loop explicit so the system feels governed and trustworthy instead of magical."
        />
        <InfoPanel title="After the call loop" items={afterTheCallItems} tone="muted" />
      </section>
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Agent journal"
          title="Intent, proposal, execution and next-best-action"
          description="The demo must keep proposal, decision, execution and verification as separate layers instead of collapsing everything into one AI answer."
        />
        <div style={{ display: 'grid', gap: 16 }}>
          <Callout>
            <strong>Intent</strong>
            <p style={{ marginBottom: 0, marginTop: 12, lineHeight: 1.6 }}>{intent}</p>
          </Callout>
          <Callout>
            <strong>Proposal</strong>
            <p style={{ marginBottom: 0, marginTop: 12, lineHeight: 1.6 }}>{proposal}</p>
          </Callout>
          <Callout>
            <strong>Execution + next step</strong>
            <p style={{ marginBottom: 12, marginTop: 12, lineHeight: 1.6 }}>{executionSummary}</p>
            <p style={{ margin: 0, lineHeight: 1.6 }}>
              <strong>Recommended next action:</strong> {recommendedNextAction}
            </p>
          </Callout>
        </div>
      </section>
    </PageShell>
  );
}
