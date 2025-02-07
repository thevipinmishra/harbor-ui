import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput, NumberInputField, NumberInputLabel } from "@/components/ui/NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "Components/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A number input component that allows users to input and manipulate numeric values with increment/decrement controls.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Basic: Story = {
  render: () => (
    <NumberInput defaultValue={'10'}>
      <NumberInputField />
    </NumberInput>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <NumberInput defaultValue={'10'}>
      <NumberInputLabel>Age</NumberInputLabel>
      <NumberInputField />
    </NumberInput>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <NumberInput defaultValue={'10'}>
        <NumberInputLabel>Small</NumberInputLabel>
        <NumberInputField />
      </NumberInput>
      
      <NumberInput defaultValue={'10'}>
        <NumberInputLabel>Medium</NumberInputLabel>
        <NumberInputField />
      </NumberInput>
      
      <NumberInput defaultValue={'10'}>
        <NumberInputLabel>Large</NumberInputLabel>
        <NumberInputField />
      </NumberInput>
    </div>
  ),
};

export const WithMinMax: Story = {
  render: () => (
    <NumberInput min={0} max={100} defaultValue={'50'}>
      <NumberInputLabel>Percentage (0-100)</NumberInputLabel>
      <NumberInputField />
    </NumberInput>
  ),
};

export const WithStep: Story = {
  render: () => (
    <NumberInput step={5} defaultValue={'50'}>
      <NumberInputLabel>Step by 5</NumberInputLabel>
      <NumberInputField />
    </NumberInput>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NumberInput disabled defaultValue={'10'}>
      <NumberInputLabel>Disabled Input</NumberInputLabel>
      <NumberInputField />
    </NumberInput>
  ),
};

export const Invalid: Story = {
  render: () => (
    <NumberInput defaultValue={'10'} invalid>
      <NumberInputLabel>Invalid Input</NumberInputLabel>
      <NumberInputField />
    </NumberInput>
  ),
};
