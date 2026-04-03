import React from 'react';
import { Hero, type HeroProps } from './Hero';
import { PageShell } from './PageShell';
import { SectionHeading } from './SectionHeading';
import { ValueGrid, type ValueGridItem } from './ValueGrid';

export type LandingPageProps = {
  brand: string;
  navLinks: string[];
  hero: HeroProps;
  sectionEyebrow?: string;
  sectionTitle: string;
  sectionDescription?: string;
  valueCards: ValueGridItem[];
};

export function LandingPage({
  brand,
  navLinks,
  hero,
  sectionEyebrow,
  sectionTitle,
  sectionDescription,
  valueCards
}: LandingPageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <Hero {...hero} />
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading eyebrow={sectionEyebrow} title={sectionTitle} description={sectionDescription} />
        <ValueGrid items={valueCards} />
      </section>
    </PageShell>
  );
}
