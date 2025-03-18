"use client";

import * as React from "react";
import {
  type TooltipContentProps as TooltipPrimitiveContentProps,
  Tooltip as TooltipPrimitive,
} from "@ark-ui/react/tooltip";
import { tv } from "@/lib/tv.config";

const tooltipContentVariants = tv({
  slots: {
    content: [
      "bg-primary text-primary-foreground shadow-sm rounded-md text-xs will-change-transform p-3",
      "motion-duration-200 motion-safe:data-[state=closed]:motion-opacity-out-0",
      "motion-safe:data-[state=open]:data-[placement^=bottom]:motion-preset-slide-up-md",
      "motion-safe:data-[state=closed]:data-[placement^=bottom]:motion-translate-y-out-25",
      "motion-safe:data-[state=open]:data-[placement^=top]:motion-preset-slide-down-md ",
      "motion-safe:data-[state=open]:data-[placement^=right]:motion-preset-slide-left-md ",
      "motion-safe:data-[state=open]:data-[placement^=left]:motion-preset-slide-right-md ",
    ],
  },
});

const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipPrimitiveContentProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <TooltipPrimitive.Positioner ref={ref}>
      <TooltipPrimitive.Content
        className={tooltipContentVariants().content()}
        {...rest}
      />
    </TooltipPrimitive.Positioner>
  );
});

export { Tooltip, TooltipTrigger, TooltipContent };
