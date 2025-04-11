"use client";

import * as React from "react";
import {
  Select as SelectPrimitive,
  Popover,
  SelectValue,
  ListBoxProps,
  SelectProps,
  composeRenderProps,
} from "react-aria-components";
import { RiExpandUpDownLine } from "@remixicon/react";
import { ListBox, ListBoxItem } from "./ListBox";
import { Button, type ButtonProps } from "./Button";
import { menuVariants } from "./Menu";
import { cn, tv } from "@/lib/tv.config";

const selectVariants = tv({
  slots: {
    trigger: ["justify-between px-2 text-left"],
  },
});

const Select = (props: SelectProps) => {
  const { className, ...rest } = props;
  return (
    <SelectPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        cn(renderProps.defaultClassName, className)
      )}
      {...rest}
    />
  );
};

const SelectTrigger = (props: Omit<ButtonProps, "children">) => {
  const { variant = "outlined", className, ...rest } = props;
  return (
    <Button
    fullWidth
      variant={variant}
      className={composeRenderProps(className, (className, renderProps) =>
        selectVariants().trigger({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      <SelectValue />
      <RiExpandUpDownLine className="size-4" />
    </Button>
  );
};

const SelectContent = (props: ListBoxProps<object>) => {
  return (
    <Popover className={menuVariants().content({
        className: 'w-[var(--trigger-width)]'
    })}>
      <ListBox {...props} />
    </Popover>
  );
};

export { Select, SelectTrigger, ListBoxItem as SelectItem, SelectContent };
