import type { Meta, StoryObj } from '@storybook/react';
import { homepageHeroContent, homepageValueCards } from '@opita-code/opita-brand-core';
import { LandingPage } from '@opita-code/opita-brand-ui';

const meta: Meta<typeof LandingPage> = {
  title: 'Brand/Pages/Landing Page',
  component: LandingPage
};

export default meta;

type Story = StoryObj<typeof LandingPage>;

export const Overview: Story = {
  args: {
    brand: 'Opita Sync',
    navLinks: ['Product', 'Domains', 'Docs', 'Contact'],
    hero: {
      eyebrow: homepageHeroContent.eyebrow,
      title: homepageHeroContent.title,
      subtitle: homepageHeroContent.subtitle,
      primaryCtaLabel: homepageHeroContent.primaryCta,
      secondaryCtaLabel: homepageHeroContent.secondaryCta
    },
    sectionEyebrow: 'Why it feels product-real',
    sectionTitle: 'Govern the change, not just the interface.',
    sectionDescription:
      'This composition turns the regenerated landing starter into reusable UI pieces instead of leaving it as isolated static HTML.',
    valueCards: homepageValueCards
  }
};
