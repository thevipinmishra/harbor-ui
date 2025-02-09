import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem, RadioGroupLabel } from "@/components/ui/RadioGroup";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: 'A radio group component that allows users to select a single option from a list of choices.',
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="1">
      <RadioGroupLabel>Choose an option</RadioGroupLabel>
      <RadioGroupItem value="1">Option 1</RadioGroupItem>
      <RadioGroupItem value="2">Option 2</RadioGroupItem>
      <RadioGroupItem value="3">Option 3</RadioGroupItem>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup disabled defaultValue="1">
      <RadioGroupLabel>Disabled Radio Group</RadioGroupLabel>
      <RadioGroupItem value="1">Option 1</RadioGroupItem>
      <RadioGroupItem value="2">Option 2</RadioGroupItem>
      <RadioGroupItem value="3">Option 3</RadioGroupItem>
    </RadioGroup>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <RadioGroup readOnly defaultValue="1">
      <RadioGroupLabel>Read-only Radio Group</RadioGroupLabel>
      <RadioGroupItem value="1">Option 1</RadioGroupItem>
      <RadioGroupItem value="2">Option 2</RadioGroupItem>
      <RadioGroupItem value="3">Option 3</RadioGroupItem>
    </RadioGroup>
  ),
};