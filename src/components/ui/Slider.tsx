"use client";

import * as React from "react";
import {
  Slider as SliderPrimitive,
  SliderOutput as SliderOutputPrimitive,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
  SliderProps,
  SliderOutputProps,
  SliderTrackProps,
  composeRenderProps,
  SliderStateContext,
} from "react-aria-components";
import { tv } from "@/lib/tv.config";

const sliderVariants = tv({
  slots: {
    root: "flex flex-col gap-2",
    control:
      "flex data-[orientation=vertical]:flex-col items-center data-[orientation=vertical]:w-max",
    track:
      "bg-input rounded-md data-[orientation=horizontal]:h-2 data-[orientation=vertical]:min-h-[280px] data-[orientation=vertical]:w-2 data-[orientation=horizontal]:w-full",
    range:
      "bg-primary data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2 rounded-md",
    thumb:
      "bg-background border-2 top-1/2 cursor-pointer border-primary size-5 rounded-full block",
    valueText: ["text-sm font-medium"],
  },
});

const Slider = (props: SliderProps) => {
  const { className, ...rest } = props;
  return <SliderPrimitive className={sliderVariants().root()} {...rest} />;
};

const SliderOutput = (props: SliderOutputProps) => {
  const { className, ...rest } = props;
  return (
    <SliderOutputPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        sliderVariants().valueText({ ...renderProps, className })
      )}
      {...rest}
    />
  );
};

const SliderControl = (props: SliderTrackProps) => {
  const { className, ...rest } = props;
  const state = React.useContext(SliderStateContext);

  return (
    <SliderTrackPrimitive className={sliderVariants().track()} {...rest}>
      {state?.values.map((_, i) => (
        <React.Fragment key={i}>
            <div className="absolute rounded-[inherit] inset-y-0 bg-primary" style={{ width: state.getThumbPercent(0) * 100 + '%' }} />
          <SliderThumbPrimitive
            index={i}
            className={sliderVariants().thumb()}
          />
        </React.Fragment>
      ))}
    </SliderTrackPrimitive>
  );
};

export { Slider, SliderControl, SliderOutput };
