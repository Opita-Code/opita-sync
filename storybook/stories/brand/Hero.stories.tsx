import type { Meta, StoryObj } from '@storybook/react';
import { homepageHeroContent, homepageValueCards } from '@opita-code/opita-brand-core';
import { Hero, ValueGrid } from '@opita-code/opita-brand-ui';

const meta: Meta<typeof Hero> = {
  title: 'Brand/Components/Hero',
  component: Hero
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Overview: Story = {
  args: {
    eyebrow: homepageHeroContent.eyebrow,
    title: homepageHeroContent.title,
    subtitle: homepageHeroContent.subtitle,
    primaryCtaLabel: homepageHeroContent.primaryCta,
    secondaryCtaLabel: homepageHeroContent.secondaryCta
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 32, fontFamily: 'Inter, Arial, sans-serif' }}>
      <Hero {...args} />
      <ValueGrid title="Homepage value cards" items={homepageValueCards} />
    </div>
  )
};
