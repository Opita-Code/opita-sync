import type { Meta, StoryObj } from '@storybook/react';
import { roleContents } from '@opita-code/opita-brand-core';
import { RoleCard, SectionHeading } from '@opita-code/opita-brand-ui';

const meta: Meta<typeof RoleCard> = {
  title: 'Brand/Components/Role Card',
  component: RoleCard
};

export default meta;

type Story = StoryObj<typeof RoleCard>;

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, fontFamily: 'Inter, Arial, sans-serif' }}>
      <SectionHeading
        eyebrow="Product roles"
        title="Role narratives grounded in the governed corridor"
        description="These cards prevent the kit from telling vague stories about generic users; admin tenant, operator and approver each carry explicit authority."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {roleContents.map((role) => (
          <RoleCard key={role.id} name={role.name} summary={role.summary} storyFocus={role.storyFocus} avoid={role.avoid} />
        ))}
      </div>
    </div>
  )
};
