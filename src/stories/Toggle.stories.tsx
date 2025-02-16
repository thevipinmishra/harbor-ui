import type { Meta, StoryObj } from "@storybook/react";
import { Toggle, ToggleIndicator } from "@/components/ui/Toggle";
import { Heart, SpeakerHigh, SpeakerX } from "@phosphor-icons/react";
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
    children: <Button>Toggle me</Button>,
    asChild: true,
  },
};

export const WithButton: Story = {
  render: () => (
    <Toggle asChild>
      <Button>
        <Heart />
        Like
      </Button>
    </Toggle>
  ),
};

export const WithIndicator: Story = {
  render: () => (
    <Toggle asChild>
      <Button>
        <ToggleIndicator fallback={<SpeakerX />}>
          <SpeakerHigh />
        </ToggleIndicator>
      </Button>
    </Toggle>
  ),
};
