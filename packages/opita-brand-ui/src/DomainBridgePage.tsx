import React from 'react';
import type { DomainContent } from '@opita-code/opita-brand-core';
import { BulletList } from './BulletList';
import { DomainCard } from './DomainCard';
import { Hero, type HeroProps } from './Hero';
import { PageShell } from './PageShell';
import { SectionHeading } from './SectionHeading';

export type DomainBridgePageProps = {
  brand: string;
  navLinks: string[];
  hero: HeroProps;
  summary: string;
  bridgeStatement: string;
  avoid: string[];
  domains: DomainContent[];
};

export function DomainBridgePage({ brand, navLinks, hero, summary, bridgeStatement, avoid, domains }: DomainBridgePageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <Hero {...hero} />
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading eyebrow="Domain bridge" title="Explain both domains as one coherent operating model" description={summary} />
        <article style={{ background: '#F5F7FA', border: '1px solid #C9D2DC', borderRadius: 16, padding: 20 }}>
          <strong style={{ color: '#0B1530' }}>Bridge statement</strong>
          <p style={{ color: '#334155', lineHeight: 1.6, marginBottom: 0, marginTop: 12 }}>{bridgeStatement}</p>
        </article>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {domains.map((domain) => (
            <DomainCard
              key={domain.id}
              name={domain.name}
              summary={domain.summary}
              primaryAudience={domain.primaryAudience}
              storyFocus={domain.storyFocus}
            />
          ))}
        </div>
      </section>
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Avoid"
          title="What the domain story should not do"
          description="These warnings preserve the coherence of the product narrative."
        />
        <article style={{ background: '#FFFFFF', border: '1px solid #C9D2DC', borderRadius: 16, padding: 20 }}>
          <BulletList items={avoid} />
        </article>
      </section>
    </PageShell>
  );
}
