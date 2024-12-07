'use client';

import * as React from "react";
import {
  PopoverContentProps,
  Popover as PopoverPrimitive,
} from "@ark-ui/react/popover";
import { tv } from "@/lib/tv.config";

const popoverVariants = tv({
  slots: {
    content: ["bg-popover text-popover-foreground rounded-md shadow"],
  },
});

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = (props: PopoverContentProps) => {
  const { className, ...rest } = props;
  return (
    <PopoverPrimitive.Positioner>
      <PopoverContent className={popoverVariants().content()} {...rest} />
    </PopoverPrimitive.Positioner>
  );
};

export { Popover, PopoverTrigger, PopoverContent };