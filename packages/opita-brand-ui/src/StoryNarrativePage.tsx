import React from 'react';
import { Hero, type HeroProps } from './Hero';
import { InfoPanel } from './InfoPanel';
import { PageShell } from './PageShell';
import { SectionHeading } from './SectionHeading';
import { ValueGrid, type ValueGridItem } from './ValueGrid';

export type StoryNarrativePageProps = {
  brand: string;
  navLinks: string[];
  hero: HeroProps;
  summaryCards: ValueGridItem[];
  sequenceTitle: string;
  sequenceItems: string[];
  principlesTitle: string;
  principlesItems: string[];
};

export function StoryNarrativePage({
  brand,
  navLinks,
  hero,
  summaryCards,
  sequenceTitle,
  sequenceItems,
  principlesTitle,
  principlesItems
}: StoryNarrativePageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <Hero {...hero} />
      <ValueGrid items={summaryCards} />
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Narrative structure"
          title="The story must remain explicit, governed and non-agentic"
          description="These pages explain central product narratives without collapsing them into generic AI platform language."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          <InfoPanel title={sequenceTitle} items={sequenceItems} />
          <InfoPanel title={principlesTitle} items={principlesItems} tone="muted" />
        </div>
      </section>
    </PageShell>
  );
}
