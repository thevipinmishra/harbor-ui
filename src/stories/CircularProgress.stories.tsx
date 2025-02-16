import { CircularProgress, CircularProgressCircle } from "@/components/ui/CircularProgress";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CircularProgress> = {
  title: "Components/CircularProgress",
  component: CircularProgress,
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = {
  render: () => (
    <CircularProgress value={50}>
      <CircularProgressCircle />
    </CircularProgress>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <CircularProgress value={75} className="h-8 w-8">
        <CircularProgressCircle />
      </CircularProgress>
      <CircularProgress value={75} className="h-12 w-12">
        <CircularProgressCircle />
      </CircularProgress>
      <CircularProgress value={75} className="h-16 w-16">
        <CircularProgressCircle />
      </CircularProgress>
    </div>
  ),
};



