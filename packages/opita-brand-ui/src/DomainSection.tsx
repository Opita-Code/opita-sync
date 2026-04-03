import React from 'react';
import type { DomainContent, RoleContent } from '@opita-code/opita-brand-core';
import { DomainCard } from './DomainCard';
import { InfoPanel } from './InfoPanel';
import { RoleCard } from './RoleCard';
import { SectionHeading } from './SectionHeading';

export type DomainSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  domain: DomainContent;
  roles?: RoleContent[];
};

export function DomainSection({ eyebrow, title, description, domain, roles = [] }: DomainSectionProps) {
  return (
    <section style={{ display: 'grid', gap: 24 }}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <DomainCard
        name={domain.name}
        summary={domain.summary}
        primaryAudience={domain.primaryAudience}
        storyFocus={domain.storyFocus}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        <InfoPanel title="Visual focus" items={domain.visualFocus} />
        <InfoPanel title="Required message blocks" items={domain.messageBlocks} />
      </div>
      {roles.length ? (
        <div style={{ display: 'grid', gap: 16 }}>
          <SectionHeading title="Roles that matter most in this domain" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {roles.map((role) => (
              <RoleCard key={role.id} name={role.name} summary={role.summary} storyFocus={role.storyFocus} avoid={role.avoid} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
