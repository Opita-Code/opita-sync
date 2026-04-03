import type { Meta, StoryObj } from '@storybook/react';
import { domainContents } from '@opita-code/opita-brand-core';
import { DomainCard, SectionHeading } from '@opita-code/opita-brand-ui';

const meta: Meta<typeof DomainCard> = {
  title: 'Brand/Components/Domain Card',
  component: DomainCard
};

export default meta;

type Story = StoryObj<typeof DomainCard>;

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, fontFamily: 'Inter, Arial, sans-serif' }}>
      <SectionHeading
        eyebrow="Product domains"
        title="The two real domains currently carried by Opita Sync"
        description="These cards come from the regenerated domain packages and make the product breadth explicit without inventing a third vertical."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {domainContents.map((domain) => (
          <DomainCard
            key={domain.id}
            name={domain.name}
            summary={domain.summary}
            primaryAudience={domain.primaryAudience}
            storyFocus={domain.storyFocus}
          />
        ))}
      </div>
    </div>
  )
};
