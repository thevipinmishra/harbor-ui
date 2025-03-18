"use client";

import * as React from "react";
import {
  Popover as PopoverPrimitive,
  type PopoverRootProps,
  type PopoverContentProps,
} from "@ark-ui/react/popover";
import { tv } from "@/lib/tv.config";

export const popoverVariants = tv({
  slots: {
    content: [
      "bg-popover text-popover-foreground rounded-md shadow-sm p-4 max-h-[var(--available-height))] max-w-[var(--available-width)]",
      "motion-duration-200",
      //   In animation
      "motion-safe:data-[state=open]:motion-opacity-in-0 motion-safe:data-[state=open]:data-[placement^=bottom]:motion-translate-y-in-[.5rem] motion-safe:data-[state=open]:data-[placement^=top]:motion-translate-y-in-[.5rem]",
      //   Out animation
      "motion-safe:data-[state=closed]:motion-opacity-out-0",
    ],
  },
});

const Popover = (props: PopoverRootProps) => {
  const {
    lazyMount = true,
    unmountOnExit = true,
    portalled = true,
    ...rest
  } = props;
  return (
    <PopoverPrimitive.Root
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      portalled={portalled}
      {...rest}
    />
  );
};

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = (props: PopoverContentProps) => {
  const { className, ...rest } = props;
  return (
    <PopoverPrimitive.Positioner>
      <PopoverPrimitive.Content
        className={popoverVariants().content({
          className,
        })}
        {...rest}
      />
    </PopoverPrimitive.Positioner>
  );
};
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent };
