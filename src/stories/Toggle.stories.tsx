import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/components/ui/Toggle";
import { Heart, Bell } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Basic: Story = {
  args: {
    children: "Toggle me",
  },
};

export const WithIcon: Story = {
  render: () => (
    <Toggle>
      <Heart className="w-4 h-4" />
    </Toggle>
  ),
};

export const NotificationExample: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle>
        <Bell className="w-5 h-5" />
      </Toggle>
      <span className="text-sm">Toggle notifications</span>
    </div>
  ),
};

export const LikeButtonExample: Story = {
  render: () => (
    <Toggle className="flex items-center gap-2 data-[state=on]:text-red-500">
      <Heart className="w-5 h-5" />
      <span>Like</span>
    </Toggle>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Toggle asChild>
      <Button>
        <Heart className="w-4 h-4 mr-2" />
        Like
      </Button>
    </Toggle>
  ),
};
