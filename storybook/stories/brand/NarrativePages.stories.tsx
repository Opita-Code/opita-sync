import type { Meta, StoryObj } from '@storybook/react';
import { domainContents, domainPageContents, overviewPageContent, roleContents, rolePageContents, storyNarrativeContents } from '@opita-code/opita-brand-core';
import { DomainNarrativePage, OverviewNarrativePage, RoleNarrativePage, StoryNarrativePage } from '@opita-code/opita-brand-ui';

const configDomain = domainContents.find((domain) => domain.id === 'tenant-configuration-governance')!;
const accessDomain = domainContents.find((domain) => domain.id === 'tenant-access-and-delegation-governance')!;

const configPage = domainPageContents.find((page) => page.domainId === 'tenant-configuration-governance')!;
const accessPage = domainPageContents.find((page) => page.domainId === 'tenant-access-and-delegation-governance')!;
const adminPage = rolePageContents.find((page) => page.roleId === 'admin-tenant')!;
const operatorPage = rolePageContents.find((page) => page.roleId === 'operator')!;
const approverPage = rolePageContents.find((page) => page.roleId === 'approver')!;
const corridorStory = storyNarrativeContents.find((story) => story.id === 'governed-corridor')!;
const evidenceStory = storyNarrativeContents.find((story) => story.id === 'evidence-recovery')!;
const adoptionStory = storyNarrativeContents.find((story) => story.id === 'controlled-adoption')!;

const adminTenant = roleContents.find((role) => role.id === 'admin-tenant')!;
const operator = roleContents.find((role) => role.id === 'operator')!;
const approver = roleContents.find((role) => role.id === 'approver')!;

const domainMeta: Meta<typeof DomainNarrativePage> = {
  title: 'Brand/Pages/Narrative Pages',
  component: DomainNarrativePage
};

export default domainMeta;

type DomainStory = StoryObj<typeof DomainNarrativePage>;

export const TenantConfigurationPage: DomainStory = {
  args: {
    brand: 'Opita Sync',
    navLinks: ['Product', 'Domains', 'Docs', 'Contact'],
    hero: configPage.hero,
    summaryCards: configPage.summaryCards,
    domain: configDomain,
    roles: [adminTenant, operator]
  }
};

export const TenantAccessDelegationPage: DomainStory = {
  args: {
    brand: 'Opita Sync',
    navLinks: ['Product', 'Domains', 'Docs', 'Contact'],
    hero: accessPage.hero,
    summaryCards: accessPage.summaryCards,
    domain: accessDomain,
    roles: [adminTenant, approver]
  }
};

export const AdminTenantPage: StoryObj<typeof RoleNarrativePage> = {
  render: () => (
    <RoleNarrativePage
      brand="Opita Sync"
      navLinks={['Product', 'Domains', 'Docs', 'Contact']}
      hero={adminPage.hero}
      summaryCards={adminPage.summaryCards}
      role={adminTenant}
      relatedDomains={[configDomain, accessDomain]}
    />
  )
};

export const OperatorPage: StoryObj<typeof RoleNarrativePage> = {
  render: () => (
    <RoleNarrativePage
      brand="Opita Sync"
      navLinks={['Product', 'Domains', 'Docs', 'Contact']}
      hero={operatorPage.hero}
      summaryCards={operatorPage.summaryCards}
      role={operator}
      relatedDomains={[configDomain]}
    />
  )
};

export const ApproverPage: StoryObj<typeof RoleNarrativePage> = {
  render: () => (
    <RoleNarrativePage
      brand="Opita Sync"
      navLinks={['Product', 'Domains', 'Docs', 'Contact']}
      hero={approverPage.hero}
      summaryCards={approverPage.summaryCards}
      role={approver}
      relatedDomains={[accessDomain]}
    />
  )
};

export const ProductOverviewPage: StoryObj<typeof OverviewNarrativePage> = {
  render: () => (
    <OverviewNarrativePage
      brand="Opita Sync"
      navLinks={['Product', 'Domains', 'Docs', 'Contact']}
      hero={overviewPageContent.hero}
      summaryCards={overviewPageContent.summaryCards}
      domains={[configDomain, accessDomain]}
      roles={[adminTenant, operator, approver]}
    />
  )
};

export const GovernedCorridorPage: StoryObj<typeof StoryNarrativePage> = {
  render: () => (
    <StoryNarrativePage
      brand="Opita Sync"
      navLinks={['Product', 'Domains', 'Docs', 'Contact']}
      hero={corridorStory.hero}
      summaryCards={corridorStory.summaryCards}
      sequenceTitle={corridorStory.sequenceTitle}
      sequenceItems={corridorStory.sequenceItems}
      principlesTitle={corridorStory.principlesTitle}
      principlesItems={corridorStory.principlesItems}
    />
  )
};

export const EvidenceRecoveryPage: StoryObj<typeof StoryNarrativePage> = {
  render: () => (
    <StoryNarrativePage
      brand="Opita Sync"
      navLinks={['Product', 'Domains', 'Docs', 'Contact']}
      hero={evidenceStory.hero}
      summaryCards={evidenceStory.summaryCards}
      sequenceTitle={evidenceStory.sequenceTitle}
      sequenceItems={evidenceStory.sequenceItems}
      principlesTitle={evidenceStory.principlesTitle}
      principlesItems={evidenceStory.principlesItems}
    />
  )
};

export const ControlledAdoptionPage: StoryObj<typeof StoryNarrativePage> = {
  render: () => (
    <StoryNarrativePage
      brand="Opita Sync"
      navLinks={['Product', 'Domains', 'Docs', 'Contact']}
      hero={adoptionStory.hero}
      summaryCards={adoptionStory.summaryCards}
      sequenceTitle={adoptionStory.sequenceTitle}
      sequenceItems={adoptionStory.sequenceItems}
      principlesTitle={adoptionStory.principlesTitle}
      principlesItems={adoptionStory.principlesItems}
    />
  )
};
