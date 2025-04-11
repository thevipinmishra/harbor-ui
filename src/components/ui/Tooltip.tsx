"use client";

import * as React from "react";
import {
  Tooltip as TooltipPrimitive,
  TooltipProps,
  TooltipTrigger as TooltipTriggerPrimitive,
} from "react-aria-components";
import { tv } from "@/lib/tv.config";

const tooltipContentVariants = tv({
  slots: {
    content: [
      "bg-accent text-accent-foreground shadow-sm rounded-md text-xs will-change-transform px-3 py-2.5",
      "motion-duration-200 motion-safe:exiting:motion-opacity-out-0",
      "motion-safe:entering:data-[placement^=bottom]:motion-preset-slide-up-md",
      "motion-safe:exiting:data-[placement^=bottom]:motion-translate-y-out-25",
      "motion-safe:entering:data-[placement^=top]:motion-preset-slide-down-md ",
      "motion-safe:entering:data-[placement^=right]:motion-preset-slide-left-md ",
      "motion-safe:entering:data-[placement^=left]:motion-preset-slide-right-md ",
    ],
  },
});

const TooltipTrigger = TooltipTriggerPrimitive;

const Tooltip = (props: TooltipProps) => {
  const { className, offset = 8, ...rest } = props;
  return (
    <TooltipPrimitive
      className={tooltipContentVariants().content()}
      offset={offset}
      {...rest}
    />
  );
};

export { Tooltip, TooltipTrigger };
