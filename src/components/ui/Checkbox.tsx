"use client";

import * as React from "react";
import {
  type CheckboxGroupProps,
  Checkbox as CheckboxPrimitive,
  type CheckboxRootProps,
} from "@ark-ui/react/checkbox";
import { Check, Minus } from "@phosphor-icons/react";
import { labelVariants } from "./Label";
import { tv } from "@/lib/tv.config";

const checkboxVariants = tv({
  slots: {
    root: ["flex items-baseline gap-2"],
    group: ["space-y-4"],
    control: [
      "size-5 shrink-0 rounded cursor-pointer border flex justify-center items-center border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",
      "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary",
      "data-focus-visible:ring-1 data-focus-visible:ring-ring data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background",
      "data-invalid:data-[state=checked]:border-destructive data-invalid:data-[state=checked]:bg-destructive data-invalid:data-focus-visible:ring-destructive/50",
      "data-disabled:opacity-50 data-disabled:pointer-events-none",
      "motion-safe:transition-[background-color]",
    ],
    indicator: ["size-3.5 [&_svg]:size-full"],
  },
});

interface CheckboxProps extends CheckboxRootProps {
  /** Text label to display next to the checkbox */
  label: string;
}

const Checkbox = (props: CheckboxProps) => {
  const { label, checked, ...rest } = props;

  return (
    <CheckboxPrimitive.Root
      className={checkboxVariants().root()}
      checked={checked}
      {...rest}
    >
      {label ? (
        <CheckboxPrimitive.Label
          className={labelVariants({
            className: "order-last leading-relaxed cursor-pointer data-disabled:pointer-events-none text-foreground",
          })}
        >
          {label}
        </CheckboxPrimitive.Label>
      ) : null}
      <CheckboxPrimitive.Control className={checkboxVariants().control()}>
        &#x200B;
        <CheckboxPrimitive.Indicator className={checkboxVariants().indicator()}>
          <Check weight="bold" />
        </CheckboxPrimitive.Indicator>
        <CheckboxPrimitive.Indicator
          className={checkboxVariants().indicator()}
          indeterminate
        >
          <Minus weight="bold" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
      <CheckboxPrimitive.HiddenInput />
    </CheckboxPrimitive.Root>
  );
};

Checkbox.displayName = "Checkbox";

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { className, ...rest } = props;
  return (
    <CheckboxPrimitive.Group className={checkboxVariants().group()} {...rest} />
  );
};

const CheckboxContext = CheckboxPrimitive.Context;

CheckboxGroup.displayName = "CheckboxGroup";

export { Checkbox, CheckboxGroup, CheckboxContext };
