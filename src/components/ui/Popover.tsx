"use client";

import * as React from "react";
import {
  Popover as PopoverPrimitive,
  type PopoverContentProps,
} from "@ark-ui/react/popover";
import { tv } from "@/lib/tv.config";

export const popoverVariants = tv({
  slots: {
    content: [
      "bg-popover text-popover-foreground rounded-md shadow p-4 max-h-[var(--available-height))] max-w-[var(--available-width)]",
      //   In animation
      "motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in motion-safe:data-[state=open]:data-[placement^=bottom]:slide-in-from-top-1 motion-safe:data-[state=open]:data-[placement^=top]:slide-in-from-bottom-1",
      //   Out animation
      "motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out motion-safe:data-[state=closed]:data-[placement^=bottom]:slide-out-to-top-1 motion-safe:data-[state=closed]:data-[placement^=top]:slide-out-to-bottom-1",
    ],
  },
});

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <PopoverPrimitive.Positioner>
      <PopoverPrimitive.Content
        ref={ref}
        className={popoverVariants().content({
          className,
        })}
        {...rest}
      />
    </PopoverPrimitive.Positioner>
  );
});
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent };
