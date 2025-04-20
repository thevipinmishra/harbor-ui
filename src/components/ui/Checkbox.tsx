"use client";

import * as React from "react";
import {
  Checkbox as CheckboxPrimitive,
  CheckboxGroup as CheckboxGroupPrimitive,
  CheckboxProps as CheckboxPrimitiveProps,
  CheckboxGroupProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "@/lib/tv.config";
import { RiCheckLine } from "@remixicon/react";
import { accentFocusRing } from "../utils/focusRing";

const checkboxVariants = tv({
  slots: {
    root: ["flex group text-sm font-medium gap-3"],
    group: ["space-y-4"],
    control: [
      "size-4.5 shrink-0 rounded cursor-pointer border flex justify-center items-center border-primary group-data-selected:bg-primary group-data-selected:text-primary-foreground",
      "group-disabled:opacity-50 group-disabled:pointer-events-none",
      "group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-1",
      "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary",
      accentFocusRing,
      "data-invalid:group-data-selected:border-destructive data-invalid:group-data-selected:bg-destructive data-invalid:data-focus-visible:ring-destructive/50",
      "data-disabled:opacity-50 data-disabled:pointer-events-none",
      "motion-safe:transition-[background-color]",
    ],
    indicator: ["size-4 hidden group-data-selected:block"],
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
    <CheckboxGroupPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        checkboxVariants().group({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

CheckboxGroup.displayName = "CheckboxGroup";

export { Checkbox, CheckboxGroup };
