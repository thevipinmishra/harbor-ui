"use client";

import { cn, tv } from "@/lib/tv.config";
import { Field, FieldInputProps } from "@ark-ui/react/field";
import * as React from "react";
import { Input } from "./Input";
import { Label } from "./Label";
import { ErrorText } from "./ErrorText";
import { HelperText } from "./HelperText";
import { FieldProps } from "@/types";

interface TextfieldProps extends FieldInputProps, FieldProps {
  label?: string;
}

const textFieldStyles = tv({
  base: ["flex flex-col items-start gap-1"],
});

const Textfield = React.forwardRef<
  React.ElementRef<typeof Field.Input>,
  TextfieldProps
>((props, ref) => {
  const {
    className,
    label,
    errorMessage,
    required,
    helperText,
    disabled,
    invalid,
    id,
    readOnly,
    ...rest
  } = props;
  return (
    <Field.Root
      invalid={invalid}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      id={id}
      className={textFieldStyles()}
    >
      {label ? <Label>{label}</Label> : null}
      <Input className={cn(className)} {...rest} ref={ref} />
      {helperText ? <HelperText>{helperText}</HelperText> : null}
      {invalid && errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </Field.Root>
  );
});

export { Textfield };
