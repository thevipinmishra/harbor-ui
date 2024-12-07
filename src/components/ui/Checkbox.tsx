'use client';

import * as React from "react";
import {
    CheckboxGroupProps,
  Checkbox as CheckboxPrimitive,
  CheckboxRootProps,
} from "@ark-ui/react/checkbox";
import { Field } from "@ark-ui/react/field";
import { Check } from "@phosphor-icons/react";
import { labelVariants } from "./Label";
import { FieldProps } from "@/types";
import { HelperText } from "./HelperText";
import { ErrorText } from "./ErrorText";
import { tv } from "@/lib/tv.config";

const checkboxVariants = tv({
  slots: {
    root: ["flex items-baseline gap-2"],
    group: ['space-y-4'],
    control: [
      "size-5 shrink-0 rounded border flex justify-center items-center border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary", 'motion-safe:transition-colors'
    ],
    indicator: ["size-3 [&_svg]:size-full"],
  },
});

interface CheckboxProps extends Omit<CheckboxRootProps, 'ids'>, FieldProps {
  label: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.HiddenInput>,
  CheckboxProps
>((props, ref) => {
  const {
    label,
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
      <CheckboxPrimitive.Root className={checkboxVariants().root()} {...rest}>
        {label ? (
          <CheckboxPrimitive.Label
            className={labelVariants({
              className: "order-last leading-relaxed text-foreground text-sm",
            })}
          >
            {label}
          </CheckboxPrimitive.Label>
        ) : null}
        <CheckboxPrimitive.Control className={checkboxVariants().control()}>
          &#x200B;
          <CheckboxPrimitive.Indicator
            className={checkboxVariants().indicator()}
          >
            <Check weight="bold" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Control>
        <CheckboxPrimitive.HiddenInput ref={ref} />
      </CheckboxPrimitive.Root>
      {helperText ? <HelperText>{helperText}</HelperText> : null}
      {invalid && errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </Field.Root>
  );
});

const CheckboxGroup = (props: CheckboxGroupProps) => {
    const {className, ...rest} = props;
    return <CheckboxPrimitive.Group className={checkboxVariants().group()}   {...rest} />;
}

export { Checkbox, CheckboxGroup };
