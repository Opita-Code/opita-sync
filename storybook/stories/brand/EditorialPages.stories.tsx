import type { Meta, StoryObj } from '@storybook/react';
import { companyBoilerplate, domainBridgeContent, domainContents, onePagerContent, salesEmailContent } from '@opita-code/opita-brand-core';
import { EditorialOnePagerPage, SalesEmailTemplate } from '@opita-code/opita-brand-ui';

const meta: Meta<typeof EditorialOnePagerPage> = {
  title: 'Brand/Editorial/One Pager',
  component: EditorialOnePagerPage
};

export default meta;

type Story = StoryObj<typeof EditorialOnePagerPage>;

export const Overview: Story = {
  args: {
    brand: 'Opita Sync',
    navLinks: ['Product', 'Domains', 'Docs', 'Contact'],
    hero: {
      eyebrow: 'Editorial one-pager',
      title: onePagerContent.headline,
      subtitle: onePagerContent.summary,
      primaryCtaLabel: 'Review product proof',
      secondaryCtaLabel: 'Explore the two domains'
    },
    summary: onePagerContent.summary,
    proofPoints: onePagerContent.proofPoints,
    boilerplate: companyBoilerplate,
    bridgeStatement: domainBridgeContent.bridgeStatement,
    domains: domainContents
  }
};

export const SalesEmailPreview: StoryObj<typeof SalesEmailTemplate> = {
  render: () => (
    <SalesEmailTemplate
      subject={salesEmailContent.subject}
      intro={salesEmailContent.intro}
      positioning={salesEmailContent.positioning}
      nextStep={salesEmailContent.nextStep}
    />
  )
};
