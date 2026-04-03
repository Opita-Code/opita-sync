import React from 'react';
import type { DomainContent, RoleContent } from '@opita-code/opita-brand-core';
import { DomainSection } from './DomainSection';
import { Hero, type HeroProps } from './Hero';
import { PageShell } from './PageShell';
import { ValueGrid, type ValueGridItem } from './ValueGrid';

export type DomainNarrativePageProps = {
  brand: string;
  navLinks: string[];
  hero: HeroProps;
  summaryCards: ValueGridItem[];
  domain: DomainContent;
  roles: RoleContent[];
};

export function DomainNarrativePage({ brand, navLinks, hero, summaryCards, domain, roles }: DomainNarrativePageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <Hero {...hero} />
      <ValueGrid items={summaryCards} />
      <DomainSection
        eyebrow="Product domain"
        title={domain.name}
        description={domain.summary}
        domain={domain}
        roles={roles}
      />
    </PageShell>
  );
}
