import type { Meta, StoryObj } from "@storybook/react";
import { Slider, SliderControl, SliderValueText } from "@/components/ui/Slider";
import { useState } from "react";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A slider component that allows users to make selections from a range of values."
      }
    }
  }
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]}>
        <SliderValueText />
        <SliderControl />
      </Slider>
    </div>
  )
};

export const Range: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[20, 80]}>
        <SliderValueText />
        <SliderControl />
      </Slider>
    </div>
  )
};

export const Vertical: Story = {
  render: () => (
    <div className="h-[300px]">
      <Slider orientation="vertical" defaultValue={[50]}>
        <SliderValueText />
        <SliderControl />
      </Slider>
    </div>
  )
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState([25]);
    return (
      <div className="w-[300px]">
        <Slider 
          value={value} 
          onValueChange={(details) => setValue(details.value)}
          min={0}
          max={100}
          step={1}
        >
          <SliderValueText />
          <SliderControl />
        </Slider>
      </div>
    );
  }
};
