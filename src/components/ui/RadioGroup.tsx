"use client";

import * as React from "react";
import {
  composeRenderProps,
  RadioGroup as RadioGroupPrimitive,
  RadioGroupProps,
  Radio as RadioPrimitive,
  RadioProps,
} from "react-aria-components";
import { tv } from "@/lib/tv.config";

const radioGroupVariants = tv({
  slots: {
    root: ["flex flex-col gap-2 items-start"],
    item: ["flex items-center cursor-pointer gap-2 text-sm font-medium before:size-5 before:rounded-full before:border before:border-accent selected:before:border-6 motion-safe:before:transition-all"],
  },
});

const RadioGroup = (props: RadioGroupProps) => {
  const { className, ...rest } = props;
  return (
    <RadioGroupPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        radioGroupVariants().root({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

const Radio = (props: RadioProps) => {
  const { className, ...rest } = props;
  return (
    <RadioPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        radioGroupVariants().item({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

export { RadioGroup, Radio };
