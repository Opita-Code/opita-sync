import React from 'react';
import { FeatureCard } from './FeatureCard';

export type ValueGridItem = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ValueGridProps = {
  title?: string;
  items: ValueGridItem[];
};

export function ValueGrid({ title, items }: ValueGridProps) {
  return (
    <section>
      {title ? <h2 style={{ color: '#0B1530' }}>{title}</h2> : null}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24
        }}
      >
        {items.map((item) => (
          <FeatureCard
            key={`${item.eyebrow}-${item.title}`}
            eyebrow={item.eyebrow}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
