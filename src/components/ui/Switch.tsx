"use client";

import * as React from "react";
import { Switch as SwitchPrimitive, type SwitchRootProps } from "@ark-ui/react/switch";
import { tv } from "@/lib/tv.config";
import { labelVariants } from "./Label";

interface SwitchProps extends SwitchRootProps {
  label?: string;
}

const switchVariants = tv({
  slots: {
    root: ["flex gap-2 items-baseline"],
    control: [
      "w-10 rounded-full cursor-pointer inline-flex items-center h-6 shrink-0 border-2 border-transparent",
      "transition-colors",
      "data-[state=unchecked]:bg-input data-[state=checked]:bg-primary",
    ],
    thumb: [
      "size-5 rounded-full bg-primary-foreground data-[state=checked]:translate-x-4 ddata-[state=checked]:bg-accent-foreground",
      "transition-all will-change-transform",
      "pointer-events-none",
    ],
  },
});

const Switch = (props: SwitchProps) => {
  const { className, label, ...rest } = props;
  return (
    <SwitchPrimitive.Root className={switchVariants().root()} {...rest}>
      <SwitchPrimitive.Control className={switchVariants().control()}>
        &#x200B;
        <SwitchPrimitive.Thumb className={switchVariants().thumb()} />
      </SwitchPrimitive.Control>
      {label ? (
        <SwitchPrimitive.Label
          className={labelVariants({
            className: "text-base text-foreground",
          })}
        >
          {label}
        </SwitchPrimitive.Label>
      ) : null}
      <SwitchPrimitive.HiddenInput />
    </SwitchPrimitive.Root>
  );
};

Switch.displayName = "Switch";

export { Switch };
