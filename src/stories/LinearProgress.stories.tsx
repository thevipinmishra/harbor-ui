import { LinearProgress, LinearProgressTrack } from "@/components/ui/LinearProgress";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinearProgress> = {
  title: "Components/LinearProgress",
  component: LinearProgress,
};

export default meta;
type Story = StoryObj<typeof LinearProgress>;

export const Default: Story = {
  render: () => (
    <LinearProgress value={50}>
      <LinearProgressTrack />
    </LinearProgress>
  ),
};

export const DifferentValues: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <LinearProgress value={25}>
        <LinearProgressTrack />
      </LinearProgress>
      <LinearProgress value={50}>
        <LinearProgressTrack />
      </LinearProgress>
      <LinearProgress value={75}>
        <LinearProgressTrack />
      </LinearProgress>
      <LinearProgress value={100}>
        <LinearProgressTrack />
      </LinearProgress>
    </div>
  ),
};

