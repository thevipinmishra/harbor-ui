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
import { CaretUpDown } from "@phosphor-icons/react";
import { FieldProps } from "@/types";
import { tv } from "@/lib/tv.config";

const selectVariants = tv({
  slots: {
    root: 'flex flex-col gap-2 items-start',
    trigger: [
      "border w-full flex justify-between items-center text-sm outline-0 text-foreground rounded border-border px-2 py-1",
      "hover:border-border-hover motion-safe:transition-all",
      "data-invalid:text-error",
      "focus:ring focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
      "data-invalid:border-error data-invalid:focus:ring-error/50",
    ],
    control: ['w-full'],
  },
});

interface SelectProps extends SelectRootProps<any>, FieldProps {}
interface SelectTriggerProps extends SelectPrimitiveTriggerProps {
  placeholder?: SelectValueTextProps["placeholder"];
}

interface SelectContentProps extends SelectPrimitiveContentProps {}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.HiddenSelect>,
  SelectProps
>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <Field.Root>
      <SelectPrimitive.Root className={selectVariants().root()} {...rest}>
        {children}
        <SelectPrimitive.HiddenSelect ref={ref} />
      </SelectPrimitive.Root>
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
      <SelectPrimitive.Trigger className={selectVariants().trigger()} {...rest} ref={ref}>
        <SelectPrimitive.ValueText placeholder={placeholder} />
        <SelectPrimitive.Indicator>
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
      <SelectPrimitive.Positioner>
        <SelectPrimitive.Content {...rest} />
      </SelectPrimitive.Positioner>
    </Portal>
  );
};

const SelectItem = (props: SelectItemProps) => {
  const { className, ...rest } = props;
  return <SelectPrimitive.Item {...rest} />;
};

const SelectItemText = (props: SelectItemTextProps) => {
  const { className, ...rest } = props;
  return <SelectPrimitive.ItemText {...rest} />;
};

export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectLabel,
};
