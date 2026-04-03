import type { Meta, StoryObj } from '@storybook/react';
import { architectureStoryContent, companyBoilerplate, domainBridgeContent, domainContents } from '@opita-code/opita-brand-core';
import { ArchitectureMapPage, DomainBridgePage } from '@opita-code/opita-brand-ui';

const meta: Meta = {
  title: 'Brand/Editorial/Storytelling'
};

export default meta;

export const ArchitectureMap: StoryObj<typeof ArchitectureMapPage> = {
  render: () => (
    <ArchitectureMapPage
      brand="Opita Sync"
      navLinks={['Product', 'Domains', 'Docs', 'Contact']}
      hero={{
        eyebrow: 'Architecture story',
        title: architectureStoryContent.title,
        subtitle: architectureStoryContent.summary,
        primaryCtaLabel: 'Review product structure',
        secondaryCtaLabel: 'Explore OSF authority'
      }}
      summary={architectureStoryContent.summary}
      productSurfaces={architectureStoryContent.productSurfaces}
      governedCorridor={architectureStoryContent.governedCorridor}
      osfAuthority={architectureStoryContent.osfAuthority}
      focusCenter={architectureStoryContent.focusCenter}
    />
  )
};

export const DomainBridge: StoryObj<typeof DomainBridgePage> = {
  render: () => (
    <DomainBridgePage
      brand="Opita Sync"
      navLinks={['Product', 'Domains', 'Docs', 'Contact']}
      hero={{
        eyebrow: 'Domain storytelling',
        title: domainBridgeContent.title,
        subtitle: `${domainBridgeContent.summary} ${companyBoilerplate}`,
        primaryCtaLabel: 'Explore both domains',
        secondaryCtaLabel: 'Review bridge statement'
      }}
      summary={domainBridgeContent.summary}
      bridgeStatement={domainBridgeContent.bridgeStatement}
      avoid={domainBridgeContent.avoid}
      domains={domainContents}
    />
  )
};
