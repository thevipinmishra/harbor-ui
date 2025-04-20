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
  ButtonProps,
  Button,
} from "react-aria-components";
import { RiExpandUpDownLine } from "@remixicon/react";
import { ListBox, ListBoxItem } from "./ListBox";
import { menuVariants } from "./Menu";
import { tv } from "@/lib/tv.config";
import { fieldHeight, FieldHeight } from "@/utils/styles";

interface SelectTriggerProps extends Omit<ButtonProps, "children" | "size"> {
  size?: FieldHeight;
}

const selectVariants = tv({
  slots: {
    select: "grid group gap-1",
    trigger: [
      "flex items-center cursor-pointer justify-between px-2.5 text-left [&_svg]:size-4 [&_svg]:text-muted-foreground",
      fieldHeight.sm,
      "border border-input rounded-md text-foreground bg-background",
      'disabled:opacity-50 disabled:pointer-events-none',
            "outline-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    ],
    selectValue: ["text-sm data-placeholder:text-muted-foreground"],
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

const SelectTrigger = (props: SelectTriggerProps) => {
  const { className, ...rest } = props;
  const state = React.useContext(SelectStateContext);
  return (
    <Button
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
