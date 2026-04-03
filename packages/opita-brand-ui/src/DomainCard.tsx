import React from 'react';
import { BulletList } from './BulletList';

export type DomainCardProps = {
  name: string;
  summary: string;
  primaryAudience: string[];
  storyFocus: string[];
};

export function DomainCard({ name, summary, primaryAudience, storyFocus }: DomainCardProps) {
  return (
    <article style={{ background: '#F5F7FA', border: '1px solid #C9D2DC', borderRadius: 20, padding: 24, display: 'grid', gap: 16 }}>
      <div>
        <div style={{ color: '#44607F', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Domain</div>
        <h3 style={{ color: '#0B1530', marginBottom: 8, marginTop: 12 }}>{name}</h3>
        <p style={{ color: '#334155', lineHeight: 1.6, margin: 0 }}>{summary}</p>
      </div>
      <div>
        <strong style={{ color: '#0B1530' }}>Primary audience</strong>
        <p style={{ color: '#334155', marginBottom: 0, marginTop: 8 }}>{primaryAudience.join(' · ')}</p>
      </div>
      <div>
        <strong style={{ color: '#0B1530' }}>Story focus</strong>
        <BulletList items={storyFocus} />
      </div>
    </article>
  );
}
