"use client";

import * as React from "react";
import {
  Select as SelectPrimitive,
  Popover,
  SelectValue,
  ListBoxProps,
  SelectProps,
  composeRenderProps,
  SelectStateContext,
} from "react-aria-components";
import { RiExpandUpDownLine } from "@remixicon/react";
import { ListBox, ListBoxItem } from "./ListBox";
import { Button, type ButtonProps } from "./Button";
import { menuVariants } from "./Menu";
import { tv } from "@/lib/tv.config";

const selectVariants = tv({
  slots: {
    select: "grid group gap-1",
    trigger: [
      "justify-between px-2 text-left [&_svg]:size-4 [&_svg]:text-muted-foreground",
    ],
    selectValue: ["font-medium data-placeholder:text-muted-foreground"],
  },
});

const Select = (props: SelectProps) => {
  const { className, ...rest } = props;
  return (
    <SelectPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        selectVariants().select({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

const SelectTrigger = (props: Omit<ButtonProps, "children">) => {
  const { variant = "outlined", className, ...rest } = props;
  const state = React.useContext(SelectStateContext);
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
      <SelectValue
        data-placeholder={state?.selectedItem ?? undefined}
        className={selectVariants().selectValue()}
      />
      <RiExpandUpDownLine className="size-4" />
    </Button>
  );
};

const SelectContent = (props: ListBoxProps<object>) => {
  return (
    <Popover
      className={menuVariants().content({
        className: "w-[var(--trigger-width)]",
      })}
    >
      <ListBox {...props} />
    </Popover>
  );
};

export { Select, SelectTrigger, ListBoxItem as SelectItem, SelectContent };
