"use client";

import { tv } from "@/lib/tv.config";
import { fieldHeight } from "@/utils/styles";
import { Field, FieldInputProps } from "@ark-ui/react/field";
import * as React from "react";

const inputVariants = tv({
  base: [
    "border w-full text-sm outline-0 text-foreground bg-background rounded border-input px-2 py-1",
    "hover:border-border-hover motion-safe:transition-all",
    "placeholder:text-muted-foreground placeholder:font-normal",
    'data-invalid:text-error',
    "focus:ring-1 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background",
    "data-invalid:border-error data-invalid:focus:ring-error/50",
  ],
  variants: {
    size: {
      sm: [fieldHeight.sm],
      md: [fieldHeight.md],
      lg: [fieldHeight.lg],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Input = React.forwardRef<
  React.ElementRef<typeof Field.Input>,
  FieldInputProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <Field.Input
      ref={ref}
      className={inputVariants({
        className,
      })}
      {...rest}
    />
  );
});

export { Input };
