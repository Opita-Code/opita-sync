import React from 'react';
import type { DomainContent } from '@opita-code/opita-brand-core';
import { BulletList } from './BulletList';
import { Callout } from './Callout';
import { DomainCard } from './DomainCard';
import { Hero, type HeroProps } from './Hero';
import { PageShell } from './PageShell';
import { SectionHeading } from './SectionHeading';

export type EditorialOnePagerPageProps = {
  brand: string;
  navLinks: string[];
  hero: HeroProps;
  summary: string;
  proofPoints: string[];
  boilerplate: string;
  bridgeStatement: string;
  domains: DomainContent[];
};

export function EditorialOnePagerPage({
  brand,
  navLinks,
  hero,
  summary,
  proofPoints,
  boilerplate,
  bridgeStatement,
  domains
}: EditorialOnePagerPageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <Hero {...hero} />
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="One-pager"
          title="Short product framing with real proof points"
          description={summary}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
          <Callout>
            <strong>Company boilerplate</strong>
            <p style={{ marginBottom: 0, marginTop: 12, lineHeight: 1.6 }}>{boilerplate}</p>
          </Callout>
          <Callout>
            <strong>Proof points</strong>
            <BulletList items={proofPoints} />
          </Callout>
        </div>
      </section>
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Domain bridge"
          title="The two domains should be sold as one system"
          description={bridgeStatement}
        />
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
    </PageShell>
  );
}
