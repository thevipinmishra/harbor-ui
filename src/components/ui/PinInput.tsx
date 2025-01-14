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

interface PinInputProps extends PinInputRootProps {}

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
    ...rest
  } = props;
  return (
    <PinInputPrimitive.Root
      className={pinInputVariants().root({
        className
      })}
      placeholder={placeholder}
      {...rest}
   / >
      
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
