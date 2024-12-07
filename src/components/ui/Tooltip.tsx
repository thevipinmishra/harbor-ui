'use client';

import * as React from "react";
import {
  TooltipContentProps as TooltipPrimitiveContentProps,
  Tooltip as TooltipPrimitive,
} from "@ark-ui/react/tooltip";
import { tv } from "@/lib/tv.config";

const tooltipContentVariants = tv({
  slots: {
    content: ["bg-background shadow rounded-md text-sm p-2", "motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in ", "motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out "],
    arrow: ["[--arrow-size:12px]"],
    arrowTip: ["[--arrow-background:var(--color-background)]"],
  },
});

interface TooltipContentProps extends TooltipPrimitiveContentProps {
  withArrow?: boolean;
}

const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>((props, ref) => {
  const { className, children, withArrow, ...rest } = props;
  return (
    <TooltipPrimitive.Positioner ref={ref}>
      <TooltipPrimitive.Content
        className={tooltipContentVariants().content()}
        {...rest}
      >
        {withArrow ? (
          <TooltipPrimitive.Arrow className={tooltipContentVariants().arrow()}>
            <TooltipPrimitive.ArrowTip
              className={tooltipContentVariants().arrowTip()}
            />
          </TooltipPrimitive.Arrow>
        ) : null}
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Positioner>
  );
});

export { Tooltip, TooltipTrigger, TooltipContent };
