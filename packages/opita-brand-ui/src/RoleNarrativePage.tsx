import React from 'react';
import type { DomainContent, RoleContent } from '@opita-code/opita-brand-core';
import { DomainCard } from './DomainCard';
import { Hero, type HeroProps } from './Hero';
import { PageShell } from './PageShell';
import { RoleSection } from './RoleSection';
import { SectionHeading } from './SectionHeading';
import { ValueGrid, type ValueGridItem } from './ValueGrid';

export type RoleNarrativePageProps = {
  brand: string;
  navLinks: string[];
  hero: HeroProps;
  summaryCards: ValueGridItem[];
  role: RoleContent;
  relatedDomains: DomainContent[];
};

export function RoleNarrativePage({ brand, navLinks, hero, summaryCards, role, relatedDomains }: RoleNarrativePageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <Hero {...hero} />
      <ValueGrid items={summaryCards} />
      <RoleSection eyebrow="Product role" title={role.name} description={role.summary} role={role} />
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          title="Domains this role must keep coherent"
          description="This page shows how the same role participates across real product domains instead of acting as a generic platform administrator."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {relatedDomains.map((domain) => (
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
