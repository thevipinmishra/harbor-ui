"use client";

import * as React from "react";
import {
  type SliderControlProps,
  type SliderLabelProps,
  Slider as SliderPrimitive,
  type SliderRootProps,
  type SliderValueTextProps,
} from "@ark-ui/react/slider";
import { tv } from "@/lib/tv.config";
import { labelVariants } from "./Label";

const sliderVariants = tv({
  slots: {
    root: "flex flex-col gap-2",
    control:
      "flex data-[orientation=vertical]:flex-col items-center data-[orientation=vertical]:w-max",
    track:
      "bg-secondary   rounded-md data-[orientation=horizontal]:h-2 data-[orientation=vertical]:min-h-[280px] data-[orientation=vertical]:w-2 data-[orientation=horizontal]:w-full",
    range:
      "bg-primary data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2 rounded-md",
    thumb:
      "bg-background border-2 cursor-pointer border-primary size-5 rounded-full block ring-offset-background transition-colors data-[focus]:outline-none data-[focus]:ring-2 data-[focus]:ring-ring data-[focus]:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    valueText: ["text-sm font-medium"],
  },
});

const Slider = (props: SliderRootProps) => {
  const { className, ...rest } = props;
  return <SliderPrimitive.Root className={sliderVariants().root()} {...rest} />;
};

const SliderLabel = (props: SliderLabelProps) => {
  const { className, ...rest } = props;
  return <SliderPrimitive.Label className={labelVariants()} {...rest} />;
};

const SliderValueText = (props: SliderValueTextProps) => {
  const { className, ...rest } = props;
  return (
    <SliderPrimitive.ValueText
      className={sliderVariants().valueText({ className })}
      {...rest}
    />
  );
};

const SliderControl = (props: SliderControlProps) => {
  const { className, ...rest } = props;
  return (
    <SliderPrimitive.Control className={sliderVariants().control()} {...rest}>
      <SliderPrimitive.Track className={sliderVariants().track()}>
        <SliderPrimitive.Range className={sliderVariants().range()} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Context>
        {(context) =>
          context.value.map((_, index) => (
            <SliderPrimitive.Thumb
              index={index}
              key={`slider-thumb-${index}`}
              className={sliderVariants().thumb()}
            >
              <SliderPrimitive.HiddenInput />
            </SliderPrimitive.Thumb>
          ))
        }
      </SliderPrimitive.Context>
    </SliderPrimitive.Control>
  );
};

const SliderContext = SliderPrimitive.Context;

export { Slider, SliderLabel, SliderValueText, SliderControl, SliderContext };
