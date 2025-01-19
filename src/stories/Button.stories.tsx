import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../components/ui/Button';
import { Bell } from '@phosphor-icons/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'plain', 'outlined', 'destructive'],
      description: 'The visual style of the button'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon', 'icon-md', 'icon-lg'],
      description: 'The size of the button'
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading spinner and disables the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the button take full width of its container'
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="filled">Filled</Button>
      <Button variant="plain">Plain</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>
        <Bell /> With Icon
      </Button>
      <Button size="icon">
        <Bell />
      </Button>
      <Button size="icon-md">
        <Bell />
      </Button>
      <Button size="icon-lg">
        <Bell />
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button fullWidth>Full Width</Button>
    </div>
  ),
};
