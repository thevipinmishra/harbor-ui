"use client";

import * as React from "react";
import {
  composeRenderProps,
  Switch as SwitchPrimitive,
  SwitchProps,
} from "react-aria-components";
import { tv } from "@/lib/tv.config";

const switchVariants = tv({
  slots: {
    root: ["flex group gap-2"],
    control: [
      "relative w-10 rounded-full cursor-pointer inline-flex items-center h-6 shrink-0 border-2 border-transparent", // Added relative
      "transition-colors",
      "bg-input group-selected:bg-primary",
      "before:content-[''] before:absolute before:size-5 before:rounded-full before:bg-primary-foreground",
      "before:transition-all before:will-change-transform",
      "group-selected:before:translate-x-4", 
      "before:pointer-events-none",
    ],
  },
});

const Switch = (props: SwitchProps) => {
  const { className, children, ...rest } = props;
  return (
    <SwitchPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        switchVariants().root({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      {(renderProps) => (
        <>
          <div className={switchVariants().control()} />
          {typeof children === "function" ? children(renderProps) : children}
        </>
      )}
    </SwitchPrimitive>
  );
};

Switch.displayName = "Switch";

export { Switch };
