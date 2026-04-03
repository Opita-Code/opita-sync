import React from 'react';
import { BulletList } from './BulletList';

export type RoleCardProps = {
  name: string;
  summary: string;
  storyFocus: string[];
  avoid: string[];
};

export function RoleCard({ name, summary, storyFocus, avoid }: RoleCardProps) {
  return (
    <article style={{ background: '#FFFFFF', border: '1px solid #C9D2DC', borderRadius: 20, padding: 24, display: 'grid', gap: 16 }}>
      <div>
        <div style={{ color: '#44607F', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Role</div>
        <h3 style={{ color: '#0B1530', marginBottom: 8, marginTop: 12 }}>{name}</h3>
        <p style={{ color: '#334155', lineHeight: 1.6, margin: 0 }}>{summary}</p>
      </div>
      <div>
        <strong style={{ color: '#0B1530' }}>Story focus</strong>
        <BulletList items={storyFocus} />
      </div>
      <div>
        <strong style={{ color: '#0B1530' }}>Avoid</strong>
        <BulletList items={avoid} />
      </div>
    </article>
  );
}
