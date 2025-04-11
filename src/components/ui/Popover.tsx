"use client";

import * as React from "react";
import {
  Popover as PopoverPrimitive,
  DialogTrigger,
  PopoverProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "@/lib/tv.config";
import { Dialog } from "./Dialog";
import { popoverAnimation } from "../utils/popoverAnimation";

export const popoverVariants = tv({
  slots: {
    content: [
      "bg-background text-foreground rounded-md shadow-sm p-4",
     popoverAnimation()
    ],
  },
});

const PopoverTrigger = DialogTrigger;
const Popover = (props: PopoverProps) => {
  const { className, children, ...rest } = props;
  return (
    <PopoverPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        popoverVariants().content({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      {(values) => (
        <Dialog>
          {typeof children === "function" ? children(values) : children}
        </Dialog>
      )}
    </PopoverPrimitive>
  );
};

export { Popover, PopoverTrigger };
