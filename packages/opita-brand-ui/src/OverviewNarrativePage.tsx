import React from 'react';
import type { DomainContent, RoleContent } from '@opita-code/opita-brand-core';
import { DomainCard } from './DomainCard';
import { Hero, type HeroProps } from './Hero';
import { PageShell } from './PageShell';
import { RoleCard } from './RoleCard';
import { SectionHeading } from './SectionHeading';
import { ValueGrid, type ValueGridItem } from './ValueGrid';

export type OverviewNarrativePageProps = {
  brand: string;
  navLinks: string[];
  hero: HeroProps;
  summaryCards: ValueGridItem[];
  domains: DomainContent[];
  roles: RoleContent[];
};

export function OverviewNarrativePage({ brand, navLinks, hero, summaryCards, domains, roles }: OverviewNarrativePageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <Hero {...hero} />
      <ValueGrid items={summaryCards} />
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Product domains"
          title="The two real product domains currently carried by Opita Sync"
          description="This overview keeps the product breadth grounded in what already exists instead of inventing a third vertical."
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
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Product roles"
          title="Authority stays explicit across admin, operator and approver"
          description="This overview shows the product as a governed operating model, not just a set of screens."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {roles.map((role) => (
            <RoleCard key={role.id} name={role.name} summary={role.summary} storyFocus={role.storyFocus} avoid={role.avoid} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
