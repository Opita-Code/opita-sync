import type { Meta, StoryObj } from '@storybook/react';
import { DocsPage } from '@opita-code/opita-brand-ui';

const compileExample = `POST /v1/intents/compile
{
  "request_id": "req_123",
  "tenant_id": "tenant_123",
  "requested_capability_id": "capability.execution.default",
  "objetivo": "activate a governed tenant change"
}`;

const meta: Meta<typeof DocsPage> = {
  title: 'Brand/Pages/Docs Page',
  component: DocsPage
};

export default meta;

type Story = StoryObj<typeof DocsPage>;

export const Overview: Story = {
  args: {
    brand: 'Opita Sync',
    navItems: ['Overview', 'Governed corridor', 'Domains', 'Architecture'],
    eyebrow: 'Governed corridor',
    title: 'Proposal, preview and governed execution',
    description:
      'Use this template for explainers that show how Opita Sync moves from intent to a governed, inspectable outcome.',
    callout:
      'Key idea: the docs should make the corridor legible and explicit, not make the product look like a free agent.',
    exampleTitle: 'Example request',
    code: compileExample
  }
};
