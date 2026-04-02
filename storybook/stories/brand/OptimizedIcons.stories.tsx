import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Brand/Optimized Icons'
};

export default meta;

type Story = StoryObj;

const icons = [
  { name: 'Approval', path: '../../../assets-system/build/svg/icons/opita-approval.svg' },
  { name: 'Contract', path: '../../../assets-system/build/svg/icons/opita-contract.svg' },
  { name: 'Inspect', path: '../../../assets-system/build/svg/icons/opita-inspect.svg' },
  { name: 'Policy', path: '../../../assets-system/build/svg/icons/opita-policy.svg' },
  { name: 'Tenant', path: '../../../assets-system/build/svg/icons/opita-tenant.svg' },
  { name: 'Trace', path: '../../../assets-system/build/svg/icons/opita-trace.svg' }
];

export const Overview: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      <h1>Optimized icons</h1>
      <p>These examples come from the first controlled SVG optimization run in <code>assets-system/build/svg/icons</code>.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))', gap: 24, maxWidth: 960 }}>
        {icons.map((icon) => (
          <div key={icon.name} style={{ background: '#F5F7FA', border: '1px solid #C9D2DC', borderRadius: 16, padding: 24, textAlign: 'center' }}>
            <img src={icon.path} alt={icon.name} style={{ width: 64, height: 64 }} />
            <p style={{ marginBottom: 0, marginTop: 12, fontWeight: 600 }}>{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
};
