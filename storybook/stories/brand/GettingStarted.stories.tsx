import type { Meta, StoryObj } from '@storybook/react';
import { DocsPage } from '@opita-code/opita-brand-ui';

const packageUsageExample = `import { homepageHeroContent, domainContents } from '@opita-code/opita-brand-core';
import { Hero, DomainNarrativePage, SalesEmailTemplate } from '@opita-code/opita-brand-ui';

export function ProductSurface() {
  return (
    <Hero
      eyebrow={homepageHeroContent.eyebrow}
      title={homepageHeroContent.title}
      subtitle={homepageHeroContent.subtitle}
      primaryCtaLabel={homepageHeroContent.primaryCta}
      secondaryCtaLabel={homepageHeroContent.secondaryCta}
    />
  );
}`;

const meta: Meta<typeof DocsPage> = {
  title: 'Brand/Pages/Getting Started',
  component: DocsPage
};

export default meta;

type Story = StoryObj<typeof DocsPage>;

export const WorkspaceUsage: Story = {
  args: {
    brand: 'Opita Sync',
    navItems: ['Overview', 'Packages', 'Storybook', 'Boundaries'],
    eyebrow: 'Asset system',
    title: 'Cómo consumir el brand system desde el workspace',
    description:
      'Esta es la surface real actual del asset system: packages reutilizables consumidos desde el workspace, con Storybook como capa de exploración y review.',
    callout:
      'Regla: la strategy queda en docs, el contenido reusable vive en brand-core, la UI reusable vive en brand-ui y Storybook muestra el sistema sin reemplazar el source of truth.',
    exampleTitle: 'Ejemplo de consumo',
    code: packageUsageExample
  }
};
