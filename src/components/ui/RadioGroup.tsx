'use client';

import * as React from "react";
import { Field } from "@ark-ui/react/field";
import {
  RadioGroupItemProps as RadioGroupPrimitiveItemProps,
  RadioGroupLabelProps,
  RadioGroup as RadioGroupPrimitive,
  RadioGroupRootProps,
  RadioGroupItemTextProps,
} from "@ark-ui/react/radio-group";
import { FieldProps } from "@/types";
import { tv } from "@/lib/tv.config";
import { labelVariants } from "./Label";

const radioGroupVariants = tv({
  slots: {
    root: ["flex flex-col gap-2 items-start"],
    item: ["flex items-baseline gap-2"],
    itemText: ["text-sm text-foreground order-last"],
    itemControl: [
      "size-5 rounded-full bg-background shrink-0 border border-input motion-safe:transition-colors",
      "data-[state=checked]:border-primary data-[state=checked]:border-[6px]",
    ],
  },
});

interface RadioGroupProps extends Omit<RadioGroupRootProps, 'ids'>, FieldProps {}
interface RadioGroupItemProps
  extends Omit<RadioGroupPrimitiveItemProps, "children"> {
  children: RadioGroupItemTextProps["children"];
}

const RadioGroup = (props: RadioGroupProps) => {
  const {
    className,
    required,
    invalid,
    readOnly,
    disabled,
    helperText,
    errorMessage,
    ...rest
  } = props;
  return (
    <Field.Root
      invalid={invalid}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
    >
      <RadioGroupPrimitive.Root
        className={radioGroupVariants().root()}
        {...rest}
      />
    </Field.Root>
  );
};

const RadioGroupLabel = (props: RadioGroupLabelProps) => {
  const { className, ...rest } = props;
  return <RadioGroupPrimitive.Label className={labelVariants()} {...rest} />;
};

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.ItemHiddenInput>,
  RadioGroupItemProps
>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <RadioGroupPrimitive.Item className={radioGroupVariants().item()} {...rest}>
      <RadioGroupPrimitive.ItemText className={radioGroupVariants().itemText()}>
        {children}
      </RadioGroupPrimitive.ItemText>
      <div className="flex items-center">
        &#x200B;
        <RadioGroupPrimitive.ItemControl
          className={radioGroupVariants().itemControl()}
        />
      </div>
      <RadioGroupPrimitive.ItemHiddenInput ref={ref} />
    </RadioGroupPrimitive.Item>
  );
});

const RadioGroupContext = RadioGroupPrimitive.Context;

export { RadioGroup, RadioGroupLabel, RadioGroupItem, RadioGroupContext };
