import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Brand/Foundations/Logos'
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', maxWidth: 720 }}>
      <h1>Logos</h1>
      <p>This story is the initial placeholder for reviewing Opita Sync logo variants.</p>
      <ul>
        <li>Primary logo</li>
        <li>Stacked logo</li>
        <li>Mark</li>
        <li>Inverse variants</li>
      </ul>
      <p>The raw logo sources still live in the extracted brand kit and should later be connected to the optimized asset pipeline.</p>
    </div>
  )
};
