import React from 'react';
import { Callout } from './Callout';
import { CodeBlock } from './CodeBlock';
import { SectionHeading } from './SectionHeading';

export type DocsPageProps = {
  brand: string;
  navItems: string[];
  eyebrow?: string;
  title: string;
  description: string;
  callout?: string;
  exampleTitle?: string;
  code: string;
};

export function DocsPage({ brand, navItems, eyebrow, title, description, callout, exampleTitle, code }: DocsPageProps) {
  return (
    <main style={{ background: '#FFFFFF', padding: 32, fontFamily: 'Inter, Arial, sans-serif' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '280px minmax(0, 1fr)',
          gap: 32
        }}
      >
        <aside
          style={{
            background: '#F5F7FA',
            border: '1px solid #C9D2DC',
            borderRadius: 24,
            padding: 24,
            alignSelf: 'start'
          }}
        >
          <div style={{ color: '#0B1530', fontWeight: 800, fontSize: 20, marginBottom: 20 }}>{brand}</div>
          <div style={{ display: 'grid', gap: 12, color: '#334155' }}>
            {navItems.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </aside>
        <article
          style={{
            background: '#FFFFFF',
            border: '1px solid #C9D2DC',
            borderRadius: 24,
            padding: 32,
            display: 'grid',
            gap: 20
          }}
        >
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          {callout ? <Callout>{callout}</Callout> : null}
          {exampleTitle ? <h2 style={{ color: '#0B1530', marginBottom: 0 }}>{exampleTitle}</h2> : null}
          <CodeBlock code={code} />
        </article>
      </div>
    </main>
  );
}
