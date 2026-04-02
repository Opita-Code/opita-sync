import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Brand/Tokens'
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', maxWidth: 720 }}>
      <h1>Brand tokens</h1>
      <p>This story is the initial placeholder for the Opita Sync token system.</p>
      <ul>
        <li>Colors</li>
        <li>Spacing</li>
        <li>Radius</li>
        <li>Motion</li>
        <li>Typography</li>
      </ul>
      <p>The canonical token source lives in <code>assets-system/source/tokens/design-tokens.json</code>.</p>
    </div>
  )
};
