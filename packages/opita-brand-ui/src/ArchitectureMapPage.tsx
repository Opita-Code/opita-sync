import React from 'react';
import { BulletList } from './BulletList';
import { Hero, type HeroProps } from './Hero';
import { PageShell } from './PageShell';
import { SectionHeading } from './SectionHeading';

export type ArchitectureMapPageProps = {
  brand: string;
  navLinks: string[];
  hero: HeroProps;
  summary: string;
  productSurfaces: string[];
  governedCorridor: string[];
  osfAuthority: string[];
  focusCenter: string[];
};

export function ArchitectureMapPage({
  brand,
  navLinks,
  hero,
  summary,
  productSurfaces,
  governedCorridor,
  osfAuthority,
  focusCenter
}: ArchitectureMapPageProps) {
  return (
    <PageShell brand={brand} navLinks={navLinks}>
      <Hero {...hero} />
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Architecture narrative"
          title="Product surfaces, governed corridor and OSF authority in one view"
          description={summary}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          <article style={{ background: '#FFFFFF', border: '1px solid #C9D2DC', borderRadius: 16, padding: 20 }}>
            <strong style={{ color: '#0B1530' }}>Layer 1 — Product surfaces</strong>
            <BulletList items={productSurfaces} />
          </article>
          <article style={{ background: '#FFFFFF', border: '1px solid #C9D2DC', borderRadius: 16, padding: 20 }}>
            <strong style={{ color: '#0B1530' }}>Layer 2 — Governed corridor</strong>
            <BulletList items={governedCorridor} />
          </article>
          <article style={{ background: '#FFFFFF', border: '1px solid #C9D2DC', borderRadius: 16, padding: 20 }}>
            <strong style={{ color: '#0B1530' }}>Layer 3 — OSF authority</strong>
            <BulletList items={osfAuthority} />
          </article>
        </div>
      </section>
      <section style={{ display: 'grid', gap: 24 }}>
        <SectionHeading
          eyebrow="Narrative center"
          title="What the architecture story should center"
          description="This keeps the visual from drifting into interoperability theater or framework confusion."
        />
        <article style={{ background: '#F5F7FA', border: '1px solid #C9D2DC', borderRadius: 16, padding: 20 }}>
          <BulletList items={focusCenter} />
        </article>
      </section>
    </PageShell>
  );
}
