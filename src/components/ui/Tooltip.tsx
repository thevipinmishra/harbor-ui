"use client";

import * as React from "react";
import {
  TooltipContentProps as TooltipPrimitiveContentProps,
  Tooltip as TooltipPrimitive,
} from "@ark-ui/react/tooltip";
import { tv } from "@/lib/tv.config";

const tooltipContentVariants = tv({
  slots: {
    content: [
      "bg-primary text-primary-foreground shadow rounded-md text-xs md:text-sm py-2 px-2.5",
      "motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in",
      "motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out ",
      "motion-safe:data-[state=open]:data-[placement^=bottom]:slide-in-from-bottom-1 ",
      "motion-safe:data-[state=closed]:data-[placement^=bottom]:slide-out-to-bottom-1 ",
      "motion-safe:data-[state=open]:data-[placement^=top]:slide-in-from-top-1 ",
      "motion-safe:data-[state=closed]:data-[placement^=top]:slide-out-to-top-1 ",
      "motion-safe:data-[state=open]:data-[placement^=right]:slide-in-from-right-1 ",
      "motion-safe:data-[state=closed]:data-[placement^=right]:slide-out-to-right-1 ",
      "motion-safe:data-[state=open]:data-[placement^=left]:slide-in-from-left-1 ",
      "motion-safe:data-[state=closed]:data-[placement^=left]:slide-out-to-left-1 ",
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
