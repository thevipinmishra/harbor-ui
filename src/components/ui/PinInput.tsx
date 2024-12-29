"use client";

import * as React from "react";
import {
  PinInputControlProps,
  PinInputInputProps,
  PinInputLabelProps,
  PinInput as PinInputPrimitive,
  PinInputRootProps,
} from "@ark-ui/react/pin-input";
import { tv } from "@/lib/tv.config";
import { inputVariants } from "./Input";
import { labelVariants } from "./Label";
import { FieldProps } from "@/types";
import { Field } from "@ark-ui/react/field";
import { ErrorText } from "./ErrorText";
import { HelperText } from "./HelperText";

interface PinInputProps extends Omit<PinInputRootProps, "ids">, FieldProps {}

const pinInputVariants = tv({
  slots: {
    field: ["flex flex-col gap-2"],
    root: ["flex flex-col gap-2"],
    control: ["flex gap-1"],
    input: [
      inputVariants(),
      "size-10 text-center tabular-nums font-medium",
      "placeholder:text-muted-foreground",
    ],
  },
});

const PinInput = (props: PinInputProps) => {
  const {
    className,
    placeholder,
    children,
    invalid,
    readOnly,
    errorMessage,
    helperText,
    ids,
    disabled,
    required,
    ...rest
  } = props;
  return (
    <Field.Root
      invalid={invalid}
      ids={ids}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      className={pinInputVariants().field()}
    >
      <PinInputPrimitive.Root
        ids={ids}
        className={pinInputVariants().root()}
        placeholder={placeholder}
        {...rest}
      >
        {children}
      </PinInputPrimitive.Root>
      {helperText ? <HelperText>{helperText}</HelperText> : null}
      {invalid && errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </Field.Root>
  );
};

const PinInputLabel = (props: PinInputLabelProps) => {
  const { className, ...rest } = props;
  return <PinInputPrimitive.Label className={labelVariants()} {...rest} />;
};

const PinInputControl = (props: PinInputControlProps) => {
  const { className, ...rest } = props;
  return (
    <PinInputPrimitive.Control
      className={pinInputVariants().control()}
      {...rest}
    />
  );
};

const PinInputField = (props: PinInputInputProps) => {
  const { className, ...rest } = props;
  return (
    <PinInputPrimitive.Input className={pinInputVariants().input()} {...rest} />
  );
};

const PinInputContext = PinInputPrimitive.Context;

export {
  PinInput,
  PinInputLabel,
  PinInputControl,
  PinInputField,
  PinInputContext,
};
