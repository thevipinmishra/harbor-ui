"use client";

import { tv } from "@/lib/tv.config";
import { fieldHeight } from "@/utils/styles";
import { Field, type FieldInputProps } from "@ark-ui/react/field";
import * as React from "react";
import type { VariantProps } from "tailwind-variants";

export interface InputProps
  extends Omit<FieldInputProps, "size">,
    VariantProps<typeof inputVariants> {}

export const inputVariants = tv({
  base: [
    "border shadow-sm w-full outline-0 text-foreground bg-background rounded-lg border-input ",
    "hover:border-border-hover motion-safe:transition-[background-color,border-color]",
    "placeholder:text-muted-foreground placeholder:font-normal",
    "data-[invalid]:text-destructive",
    "disabled:opacity-50 disabled:pointer-events-none",
    "focus:ring-1 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background",
    "data-[invalid]:border-destructive data-[invalid]:focus:ring-destructive/50",
  ],
  variants: {
    size: {
      sm: [fieldHeight.sm, "text-sm px-2 py-1"],
      md: [fieldHeight.md, "text-sm px-3 py-1.5"],
      lg: [fieldHeight.lg, "text-base px-3.5 py-1.5"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Input = (props: InputProps) => {
  const { className, size, ...rest } = props;
  return (
    <Field.Input
      className={inputVariants({
        className,
        size,
      })}
      {...rest}
    />
  );
};

export { Input };
