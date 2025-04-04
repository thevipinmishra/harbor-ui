"use client";

import * as React from "react";
import {
  type RadioGroupItemProps as RadioGroupPrimitiveItemProps,
  type RadioGroupLabelProps,
  RadioGroup as RadioGroupPrimitive,
  type RadioGroupRootProps,
  type RadioGroupItemTextProps,
} from "@ark-ui/react/radio-group";
import { tv } from "@/lib/tv.config";
import { labelVariants } from "./Label";

const radioGroupVariants = tv({
  slots: {
    root: ["flex flex-col gap-2 items-start"],
    item: ["flex items-baseline cursor-pointer gap-2", "data-disabled:opacity-50 data-disabled:pointer-events-none"],
    itemText: ["text-sm text-foreground order-last"],
    itemControl: [
      "size-5 rounded-full bg-background shrink-0 border border-input motion-safe:transition-colors",
      "data-[state=checked]:border-primary data-[state=checked]:border-[6px]",
      "data-disabled:opacity-50 data-disabled:pointer-events-none",
    ],
  },
});

interface RadioGroupProps extends RadioGroupRootProps {}
interface RadioGroupItemProps extends Omit<RadioGroupPrimitiveItemProps, "children"> {
  children: RadioGroupItemTextProps["children"];
}

const RadioGroup = (props: RadioGroupProps) => {
  const { className, readOnly, disabled, ...rest } = props;
  return (
    <RadioGroupPrimitive.Root
      disabled={disabled}
      readOnly={readOnly}
      className={radioGroupVariants().root()}
      {...rest}
    />
  );
};
RadioGroup.displayName = "RadioGroup";

const RadioGroupLabel = (props: RadioGroupLabelProps) => {
  const { className, ...rest } = props;
  return <RadioGroupPrimitive.Label className={labelVariants()} {...rest} />;
};
RadioGroupLabel.displayName = "RadioGroupLabel";

const RadioGroupItem = (props: RadioGroupItemProps) => {
  const { className, children, ...rest } = props;
  return (
    <RadioGroupPrimitive.Item className={radioGroupVariants().item()} {...rest}>
      <RadioGroupPrimitive.ItemText className={radioGroupVariants().itemText()}>
        {children}
      </RadioGroupPrimitive.ItemText>
      <div className="flex items-center">
        &#x200B;
        <RadioGroupPrimitive.ItemControl className={radioGroupVariants().itemControl()} />
      </div>
      <RadioGroupPrimitive.ItemHiddenInput />
    </RadioGroupPrimitive.Item>
  );
};

const RadioGroupContext = RadioGroupPrimitive.Context;

export { RadioGroup, RadioGroupLabel, RadioGroupItem, RadioGroupContext };
