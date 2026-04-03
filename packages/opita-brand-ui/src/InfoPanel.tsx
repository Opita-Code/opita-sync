import React from 'react';
import { BulletList } from './BulletList';

export type InfoPanelProps = {
  title: string;
  items: string[];
  tone?: 'default' | 'muted';
};

export function InfoPanel({ title, items, tone = 'default' }: InfoPanelProps) {
  const background = tone === 'muted' ? '#F5F7FA' : '#FFFFFF';

  return (
    <article
      style={{
        background,
        border: '1px solid #C9D2DC',
        borderRadius: 16,
        padding: 20
      }}
    >
      <strong style={{ color: '#0B1530' }}>{title}</strong>
      <BulletList items={items} />
    </article>
  );
}
