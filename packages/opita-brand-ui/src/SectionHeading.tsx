import React from 'react';

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header style={{ display: 'grid', gap: 8 }}>
      {eyebrow ? (
        <div
          style={{
            color: '#44607F',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2 style={{ color: '#0B1530', margin: 0 }}>{title}</h2>
      {description ? <p style={{ color: '#334155', lineHeight: 1.6, margin: 0 }}>{description}</p> : null}
    </header>
  );
}
