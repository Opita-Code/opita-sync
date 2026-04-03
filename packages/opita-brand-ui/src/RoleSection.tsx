import React from 'react';
import type { RoleContent } from '@opita-code/opita-brand-core';
import { InfoPanel } from './InfoPanel';
import { RoleCard } from './RoleCard';
import { SectionHeading } from './SectionHeading';

export type RoleSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  role: RoleContent;
};

export function RoleSection({ eyebrow, title, description, role }: RoleSectionProps) {
  return (
    <section style={{ display: 'grid', gap: 24 }}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <RoleCard name={role.name} summary={role.summary} storyFocus={role.storyFocus} avoid={role.avoid} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        <InfoPanel title="Visual focus" items={role.visualFocus} tone="muted" />
        <InfoPanel title="Best asset types" items={role.bestAssetTypes} tone="muted" />
      </div>
    </section>
  );
}
