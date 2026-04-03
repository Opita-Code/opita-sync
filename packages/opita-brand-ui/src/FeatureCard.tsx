import React from 'react';

export type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function FeatureCard({ eyebrow, title, description }: FeatureCardProps) {
  return (
    <article
      style={{
        background: '#F5F7FA',
        border: '1px solid #C9D2DC',
        borderRadius: 16,
        padding: 24
      }}
    >
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
      <h3 style={{ color: '#0B1530', marginBottom: 12, marginTop: 12 }}>{title}</h3>
      <p style={{ color: '#334155', lineHeight: 1.6, margin: 0 }}>{description}</p>
    </article>
  );
}
