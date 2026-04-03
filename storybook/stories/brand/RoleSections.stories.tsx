import type { Meta, StoryObj } from '@storybook/react';
import { roleContents } from '@opita-code/opita-brand-core';
import { RoleSection } from '@opita-code/opita-brand-ui';

const meta: Meta<typeof RoleSection> = {
  title: 'Brand/Sections/Role Section',
  component: RoleSection
};

export default meta;

type Story = StoryObj<typeof RoleSection>;

const adminTenant = roleContents.find((role) => role.id === 'admin-tenant')!;
const operator = roleContents.find((role) => role.id === 'operator')!;
const approver = roleContents.find((role) => role.id === 'approver')!;

export const AdminTenant: Story = {
  args: {
    eyebrow: 'Role',
    title: 'Admin tenant authority narrative',
    description: 'Use this section when the story needs to make operability and governance ownership explicit at tenant level.',
    role: adminTenant
  }
};

export const Operator: Story = {
  args: {
    eyebrow: 'Role',
    title: 'Operator corridor narrative',
    description: 'Use this section when showing proposal, preview, execution, inspection and recovery as one governed path.',
    role: operator
  }
};

export const Approver: Story = {
  args: {
    eyebrow: 'Role',
    title: 'Approver decision narrative',
    description: 'Use this section when approval, escalation, reject and decision traceability are central to the story.',
    role: approver
  }
};
