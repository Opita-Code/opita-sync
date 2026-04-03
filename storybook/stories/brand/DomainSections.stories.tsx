import type { Meta, StoryObj } from '@storybook/react';
import { domainContents, roleContents } from '@opita-code/opita-brand-core';
import { DomainSection } from '@opita-code/opita-brand-ui';

const configDomain = domainContents.find((domain) => domain.id === 'tenant-configuration-governance')!;
const accessDomain = domainContents.find((domain) => domain.id === 'tenant-access-and-delegation-governance')!;

const adminTenant = roleContents.find((role) => role.id === 'admin-tenant')!;
const operator = roleContents.find((role) => role.id === 'operator')!;
const approver = roleContents.find((role) => role.id === 'approver')!;

const meta: Meta<typeof DomainSection> = {
  title: 'Brand/Sections/Domain Section',
  component: DomainSection
};

export default meta;

type Story = StoryObj<typeof DomainSection>;

export const TenantConfigurationGovernance: Story = {
  args: {
    eyebrow: 'Domain 1',
    title: 'Tenant configuration governance',
    description:
      'This section turns the first domain package into a reusable product narrative block for landing pages, walkthroughs and one-pagers.',
    domain: configDomain,
    roles: [adminTenant, operator]
  }
};

export const TenantAccessAndDelegationGovernance: Story = {
  args: {
    eyebrow: 'Domain 2',
    title: 'Tenant access and delegation governance',
    description:
      'This section frames the second domain as explicit authority governance inside the tenant instead of generic IAM breadth.',
    domain: accessDomain,
    roles: [adminTenant, approver]
  }
};
