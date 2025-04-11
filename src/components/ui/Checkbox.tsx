"use client";

import * as React from "react";
import {
  Checkbox as CheckboxPrimitive,
  CheckboxGroup as CheckboxGroupPrimitive,
  CheckboxProps as CheckboxPrimitiveProps,
  CheckboxGroupProps,
} from "react-aria-components";
import { tv } from "@/lib/tv.config";
import { RiCheckLine } from "@remixicon/react";
import { accentFocusRing } from "../utils/focusRing";

const checkboxVariants = tv({
  slots: {
    root: ["flex group text-sm gap-2"],
    group: ["space-y-4"],
    control: [
      "size-4.5 shrink-0 rounded cursor-pointer border flex justify-center items-center border-accent-subtle group-data-selected:bg-accent group-data-selected:text-accent-foreground group-data-selected:border-accent",
      "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary",
      accentFocusRing,
      "data-invalid:group-data-selected:border-destructive data-invalid:group-data-selected:bg-destructive data-invalid:data-focus-visible:ring-destructive/50",
      "data-disabled:opacity-50 data-disabled:pointer-events-none",
      "motion-safe:transition-[background-color]",
    ],
    indicator: ["size-3.5 hidden group-data-selected:block"],
  },
});

const Checkbox = (props: CheckboxPrimitiveProps) => {
  const { children, ...rest } = props;

  return (
    <CheckboxPrimitive className={checkboxVariants().root()} {...rest}>
      {(renderProps) => (
        <>
          <div className={checkboxVariants().control()}>
            <RiCheckLine className={checkboxVariants().indicator()} />
          </div>
          {typeof children === "function" ? children(renderProps) : children}
        </>
      )}
    </CheckboxPrimitive>
  );
};

Checkbox.displayName = "Checkbox";

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { className, ...rest } = props;
  return (
    <CheckboxGroupPrimitive className={checkboxVariants().group()} {...rest} />
  );
};

CheckboxGroup.displayName = "CheckboxGroup";

export { Checkbox, CheckboxGroup };
