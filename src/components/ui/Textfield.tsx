"use client";

import { cn, tv } from "@/lib/tv.config";
import { Field } from "@ark-ui/react/field";
import * as React from "react";
import { Input, InputProps } from "./Input";
import { Label } from "./Label";
import { ErrorText } from "./ErrorText";
import { HelperText } from "./HelperText";
import { FieldProps } from "@/types";

interface TextfieldProps extends InputProps, FieldProps {
  label?: React.ReactNode;
}

const textFieldStyles = tv({
  base: ["flex flex-col items-start gap-1"],
});

const Textfield = (props: TextfieldProps) => {
  const {
    className,
    label,
    errorMessage,
    required,
    helperText,
    disabled,
    invalid,
    readOnly,
    ...rest
  } = props;
  return (
    <Field.Root
      invalid={invalid}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      className={textFieldStyles()}
    >
      {label ? (
        typeof label === "string" ? (
          <Label>{label}</Label>
        ) : (
          label
        )
      ) : null}
      <Input className={cn(className)} {...rest} />
      {helperText ? <HelperText>{helperText}</HelperText> : null}
      {invalid && errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </Field.Root>
  );
};

export { Textfield };
