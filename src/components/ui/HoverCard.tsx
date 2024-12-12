"use client";

import * as React from "react";
import {
  HoverCard as HoverCardPrimitive,
  HoverCardContentProps,
} from "@ark-ui/react/hover-card";
import { popoverVariants } from "./Popover";

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = (props: HoverCardContentProps) => {
  const { className, ...rest } = props;
  return (
    <HoverCardPrimitive.Positioner>
      <HoverCardPrimitive.Content
        className={popoverVariants().content({
          className,
        })}
        {...rest}
      />
    </HoverCardPrimitive.Positioner>
  );
};

export { HoverCard, HoverCardTrigger, HoverCardContent };
