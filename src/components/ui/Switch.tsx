'use client';

import * as React from "react";
import {
  Switch as SwitchPrimitive,
  SwitchRootProps,
} from "@ark-ui/react/switch";
import { Field } from "@ark-ui/react/field";
import { FieldProps } from "@/types";
import { tv } from "@/lib/tv.config";
import { labelVariants } from "./Label";

interface SwitchProps extends Omit<SwitchRootProps, 'ids'>, FieldProps {
  label: string;
}

const switchVariants = tv({
  slots: {
    root: ["flex gap-2 items-baseline"],
    control: [
      "w-10 rounded-full inline-flex items-center h-6 shrink-0 border-2 border-transparent",
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

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.HiddenInput>,
  SwitchProps
>((props, ref) => {
  const { className, label, ...rest } = props;
  return (
    <Field.Root>
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
        <SwitchPrimitive.HiddenInput ref={ref} />
      </SwitchPrimitive.Root>
    </Field.Root>
  );
});

export { Switch };
