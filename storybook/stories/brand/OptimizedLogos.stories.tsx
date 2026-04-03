import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Brand/Foundations/Optimized Logos'
};

export default meta;

type Story = StoryObj;

const logos = [
  {
    name: 'Primary color',
    path: '../../../assets-system/build/svg/logos/opita-sync-primary-color.svg'
  },
  {
    name: 'Mark color',
    path: '../../../assets-system/build/svg/logos/opita-sync-mark-color.svg'
  },
  {
    name: 'Stacked color',
    path: '../../../assets-system/build/svg/logos/opita-sync-stacked-color.svg'
  }
];

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, fontFamily: 'Inter, Arial, sans-serif', maxWidth: 1000 }}>
      <h1>Optimized logos</h1>
      <p>These examples come from the first controlled SVG optimization run in <code>assets-system/build/svg/logos</code>.</p>
      {logos.map((logo) => (
        <div key={logo.name} style={{ background: '#F5F7FA', border: '1px solid #C9D2DC', borderRadius: 16, padding: 24 }}>
          <p style={{ marginTop: 0, fontWeight: 600 }}>{logo.name}</p>
          <img src={logo.path} alt={logo.name} style={{ maxWidth: '100%', height: 120 }} />
        </div>
      ))}
    </div>
  )
};
