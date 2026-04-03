import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@opita-code/opita-brand-ui';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'See the governed corridor'
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
};
