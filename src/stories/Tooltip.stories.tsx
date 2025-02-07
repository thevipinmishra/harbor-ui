import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A popup that displays information related to an element when it receives keyboard focus or the mouse hovers over it.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      {(["top", "bottom", "left", "right"]).map((placement) => (
        // @ts-ignore
        <Tooltip key={placement} positioning={{ placement }}>
          <TooltipTrigger asChild>
            <Button variant="outlined">{placement}</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip on {placement}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Tooltip openDelay={500} closeDelay={200}>
      <TooltipTrigger asChild>
        <Button>Hover with delay</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip has open/close delays</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const CustomWidth: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover for wide tooltip</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-[300px]">
        <p>This is a tooltip with custom width and wrapping long content. It demonstrates how tooltips can accommodate larger blocks of text.</p>
      </TooltipContent>
    </Tooltip>
  ),
};
