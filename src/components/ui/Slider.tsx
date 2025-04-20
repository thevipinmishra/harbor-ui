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
      "bg-input relative rounded-md data-[orientation=horizontal]:h-2 data-[orientation=vertical]:min-h-[280px] data-[orientation=vertical]:w-2 data-[orientation=horizontal]:w-full",
    range:
      "bg-primary absolute data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2 rounded-md",
    thumb:
      "bg-background border-2 top-1/2 cursor-pointer border-primary size-5 rounded-full block",
    valueText: ["text-sm font-medium"],
  },
});

type SliderState = React.ContextType<typeof SliderStateContext>;
const getPercent = (state: SliderState, idx: number) =>
  state ? state.getThumbPercent(idx) * 100 : 0;

const Slider = (props: SliderProps) => {
  const { className, ...rest } = props;
  return <SliderPrimitive className={sliderVariants().root()} {...rest} />;
};

const SliderOutput = (props: Omit<SliderOutputProps, 'children'>) => {
  const { className, ...rest } = props;
  const state = React.useContext(SliderStateContext);
  return (
    <SliderOutputPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        sliderVariants().valueText({ ...renderProps, className })
      )}
      {...rest}
    >
      {state?.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")}
    </SliderOutputPrimitive>
  );
};

const SliderControl = (props: SliderTrackProps) => {
  const { className, ...rest } = props;
  const state = React.useContext(SliderStateContext);

  const orientation = state?.orientation ?? "horizontal";
  const values = state?.values ?? [];
  let start = 0, end = 0;

  if (values.length === 1) {
    start = 0;
    end = getPercent(state, 0);
  } else if (values.length > 1) {
    const minIdx = 0, maxIdx = Math.max(0, values.length - 1);
    start = Math.min(getPercent(state, minIdx), getPercent(state, maxIdx));
    end = Math.max(getPercent(state, minIdx), getPercent(state, maxIdx));
  }

  const rangeStyle =
    orientation === "horizontal"
      ? { left: `${start}%`, width: `${end - start}%`, top: 0, bottom: 0 }
      : { bottom: `${start}%`, height: `${end - start}%`, left: 0, right: 0 };

  return (
    <SliderTrackPrimitive className={sliderVariants().track()} {...rest}>
      <div className={sliderVariants().range()} style={rangeStyle} />
      {values.map((_, i) => {
        const thumbStyle =
          orientation === "horizontal"
            ? { left: `${getPercent(state, i)}%` }
            : { bottom: `${getPercent(state, i)}%` };
        return (
          <SliderThumbPrimitive
            key={i}
            index={i}
            className={sliderVariants().thumb()}
            style={thumbStyle}
          />
        );
      })}
    </SliderTrackPrimitive>
  );
};

export { Slider, SliderControl, SliderOutput };
