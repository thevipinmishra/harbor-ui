import type { Meta, StoryObj } from "@storybook/react";
import { ChipGroup, ChipGroupItem } from "@/components/ui/ChipGroup";

const meta = {
  title: "Components/ChipGroup",
  component: ChipGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ChipGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ChipGroup>
      <ChipGroupItem value="one">One</ChipGroupItem>
      <ChipGroupItem value="two">Two</ChipGroupItem>
      <ChipGroupItem value="three">Three</ChipGroupItem>
    </ChipGroup>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <ChipGroup defaultValue={["two"]}>
      <ChipGroupItem value="one">One</ChipGroupItem>
      <ChipGroupItem value="two">Two</ChipGroupItem>
      <ChipGroupItem value="three">Three</ChipGroupItem>
    </ChipGroup>
  ),
};

