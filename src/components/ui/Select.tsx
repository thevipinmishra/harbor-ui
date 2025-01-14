"use client";

import * as React from "react";
import { Portal } from "@ark-ui/react/portal";
import {
  type SelectLabelProps,
  Select as SelectPrimitive,
  type SelectTriggerProps as SelectPrimitiveTriggerProps,
  type SelectContentProps as SelectPrimitiveContentProps,
  type SelectValueTextProps,
  type SelectRootProps,
  type SelectItemProps,
  type SelectItemTextProps,
} from "@ark-ui/react/select";
import { labelVariants } from "./Label";
import { CaretUpDown, Check } from "@phosphor-icons/react";
import { tv } from "@/lib/tv.config";
import { fieldHeight } from "@/utils/styles";
import { ErrorText } from "./ErrorText";
import { HelperText } from "./HelperText";

const selectVariants = tv({
  slots: {
    root: "flex flex-col gap-2 w-full items-start",
    trigger: [
      "border w-full flex justify-between items-center text-sm outline-0 cursor-default text-foreground rounded border-border px-2 py-1",
      "hover:border-border-hover motion-safe:transition-all",
      "data-invalid:text-error",
      "disabled:opacity-50 disabled:pointer-events-none",
      "focus:ring-1 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background",
      "data-[invalid]:border-destructive data-[invalid]:focus:ring-destructive data-[invalid]:text-destructive",
    ],
    content: [
      "outline-none !z-20 border border-border bg-popover space-y-[2px] text-popover-foreground p-1 rounded-md shadow-md  relative w-[max(6rem,var(--reference-width))] max-h-[min(12rem,var(--available-height))] overflow-y-auto",
      //   In animation
      "motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in motion-safe:data-[state=open]:data-[placement^=bottom]:slide-in-from-top-2 motion-safe:data-[state=open]:data-[placement^=top]:slide-in-from-bottom-2",
      //   Out animation
      "motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out motion-safe:data-[state=closed]:data-[placement^=bottom]:slide-out-to-top-2 motion-safe:data-[state=closed]:data-[placement^=top]:slide-out-to-bottom-2",
    ],
    positioner: [""],
    control: ["w-full"],
    itemText: ["truncate"],
    valueText: ["truncate", "data-[placeholder=true]:text-muted-foreground"],
    indicator: ["text-muted-foreground data-[invalid]:text-destructive"],
    itemIndicator: [""],
    item: [
      "text-sm rounded-sm transition-colors cursor-default select-none flex justify-between items-center gap-2 px-3 py-2 scroll-m-1",
      "data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[highlighted]:bg-muted",
      "data-[disabled]:opacity-50 data-[disabled]:pointer-events-none",
    ],
  },
  variants: {
    size: {
      md: {
        trigger: [fieldHeight.md],
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface SelectProps extends SelectRootProps<any> {}
interface SelectTriggerProps extends SelectPrimitiveTriggerProps {
  placeholder?: SelectValueTextProps["placeholder"];
}

interface SelectPrimitiveProps extends Omit<SelectItemProps, "children"> {
  children: SelectItemTextProps["children"];
}

interface SelectContentProps extends SelectPrimitiveContentProps {}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  SelectProps
>((props, ref) => {
  const {
    className,
    children,

    ...rest
  } = props;
  return (
    <SelectPrimitive.Root
      ref={ref}
      className={selectVariants().root({
        className,
      })}
      {...rest}
    >
      {children}
      <SelectPrimitive.HiddenSelect />
    </SelectPrimitive.Root>
  );
});

Select.displayName = "Select";

const SelectLabel = (props: SelectLabelProps) => {
  const { className, ...rest } = props;
  return <SelectPrimitive.Label className={labelVariants()} {...rest} />;
};

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>((props, ref) => {
  const { className, placeholder = "Select", ...rest } = props;
  return (
    <SelectPrimitive.Control className={selectVariants().control()}>
      <SelectPrimitive.Context>
        {(context) => (
          <SelectPrimitive.Trigger
            ref={ref}
            className={selectVariants().trigger()}
            {...rest}
          >
            <SelectPrimitive.ValueText
              className={selectVariants().valueText()}
              placeholder={placeholder}
              data-placeholder={!context.hasSelectedItems}
            />
            <SelectPrimitive.Indicator className={selectVariants().indicator()}>
              <CaretUpDown weight="bold" />
            </SelectPrimitive.Indicator>
          </SelectPrimitive.Trigger>
        )}
      </SelectPrimitive.Context>
    </SelectPrimitive.Control>
  );
});

SelectTrigger.displayName = "SelectTrigger";

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <Portal>
      <SelectPrimitive.Positioner className={selectVariants().positioner()}>
        <SelectPrimitive.Content
          ref={ref}
          className={selectVariants().content()}
          {...rest}
        />
      </SelectPrimitive.Positioner>
    </Portal>
  );
});

SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectPrimitiveProps
>((props, ref) => {
  const { className, children, item, ...rest } = props;
  return (
    <SelectPrimitive.Item
      ref={ref}
      item={item}
      className={selectVariants().item({
        className,
      })}
      {...rest}
    >
      <SelectPrimitive.ItemText className={selectVariants().itemText()}>
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={selectVariants().itemText()}>
        <Check weight="bold" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});

SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectContent, SelectItem, SelectLabel };
