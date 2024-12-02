import * as React from "react";
import { Portal } from "@ark-ui/react/portal";
import { Field } from "@ark-ui/react/field";
import {
  SelectLabelProps,
  Select as SelectPrimitive,
  SelectTriggerProps as SelectPrimitiveTriggerProps,
  SelectContentProps as SelectPrimitiveContentProps,
  SelectValueTextProps,
  SelectRootProps,
  SelectItemProps,
  SelectItemTextProps,
} from "@ark-ui/react/select";
import { labelVariants } from "./Label";
import { CaretUpDown, Check } from "@phosphor-icons/react";
import { FieldProps } from "@/types";
import { tv } from "@/lib/tv.config";
import { fieldHeight } from "@/utils/styles";
import { error } from "console";
import { ErrorText } from "./ErrorText";
import { HelperText } from "./HelperText";

const selectVariants = tv({
  slots: {
    root: "flex flex-col gap-2 items-start",
    trigger: [
      "border w-full flex justify-between items-center text-sm outline-0 text-foreground rounded border-border px-2 py-1",
      "hover:border-border-hover motion-safe:transition-all",
      "data-invalid:text-error",
      "focus:ring-1 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background",
      "data-invalid:border-error data-invalid:focus:ring-error/50",
    ],
    content: [
      "outline-none bg-popover space-y-[2px] text-popover-foreground p-1 rounded-md shadow-md  relative min-w-[var(--reference-width)]",
      "motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=open]:fade-in motion-safe:data-[state=open]:data-[placement^=bottom]:slide-in-from-bottom-2 motion-safe:data-[state=open]:data-[placement^=top]:slide-in-from-top-2",
      "motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=closed]:data-[placement^=bottom]:slide-out-to-bottom-2 motion-safe:data-[state=closed]:data-[placement^=top]:slide-out-to-top-2",
    ],
    positioner: ["!z-20"],
    control: ["w-full"],
    itemText: ["text-ellipsis"],
    indicator: ["text-muted-foreground"],
    itemIndicator: [""],
    item: [
      "text-sm rounded-sm transition-colors flex justify-between items-center gap-2 px-3 py-2",
      "data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[highlighted]:bg-muted",
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

interface SelectProps extends SelectRootProps<any>, FieldProps {}
interface SelectTriggerProps extends SelectPrimitiveTriggerProps {
  placeholder?: SelectValueTextProps["placeholder"];
}

interface SelectPrimitiveProps extends Omit<SelectItemProps, "children"> {
  children: SelectItemTextProps["children"];
}

interface SelectContentProps extends SelectPrimitiveContentProps {}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.HiddenSelect>,
  SelectProps
>((props, ref) => {
  const {
    className,
    children,
    readOnly,
    required,
    disabled,
    invalid,
    helperText,
    errorMessage,
    ...rest
  } = props;
  return (
    <Field.Root
      readOnly={readOnly}
      invalid={invalid}
      required={required}
      disabled={disabled}
    >
      <SelectPrimitive.Root className={selectVariants().root()} {...rest}>
        {children}
        <SelectPrimitive.HiddenSelect ref={ref} />
      </SelectPrimitive.Root>
      {helperText ? <HelperText>{helperText}</HelperText> : null}
      {invalid && errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </Field.Root>
  );
});

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
      <SelectPrimitive.Trigger
        className={selectVariants().trigger()}
        {...rest}
        ref={ref}
      >
        <SelectPrimitive.ValueText placeholder={placeholder} />
        <SelectPrimitive.Indicator className={selectVariants().indicator()}>
          <CaretUpDown />
        </SelectPrimitive.Indicator>
      </SelectPrimitive.Trigger>
    </SelectPrimitive.Control>
  );
});

const SelectContent = (props: SelectContentProps) => {
  const { className, ...rest } = props;
  return (
    <Portal>
      <SelectPrimitive.Positioner className={selectVariants().positioner()}>
        <SelectPrimitive.Content
          className={selectVariants().content()}
          {...rest}
        />
      </SelectPrimitive.Positioner>
    </Portal>
  );
};

const SelectItem = (props: SelectPrimitiveProps) => {
  const { className, children, item, ...rest } = props;
  return (
    <SelectPrimitive.Item
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
        <Check />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

export { Select, SelectTrigger, SelectContent, SelectItem, SelectLabel };
