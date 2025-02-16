import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@/components/ui/Chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Chip",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Chip",
  },
};

