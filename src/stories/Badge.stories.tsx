import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Badge>Default</Badge>
      <Badge variant="outlined">Outlined</Badge>
      <Badge variant="plain">Plain</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div className="flex gap-6">
      <Badge variant="destructive" size="sm">3 new</Badge>
      <Badge variant="outlined">Status</Badge>
      <Badge variant="plain">Beta</Badge>
      <Badge>Active</Badge>
      <Badge variant="outlined">PRO</Badge>
    </div>
  ),
};
