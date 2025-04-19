"use client";

import { tv } from "@/lib/tv.config";
import { fieldHeight } from "@/utils/styles";
import {
  composeRenderProps,
  Input as InputPrimitive,
  TextField as TextFieldPrimitive,
  InputProps as InputPrimitiveProps,
  TextFieldProps,
} from "react-aria-components";
import * as React from "react";
import type { VariantProps } from "tailwind-variants";

export interface InputProps
  extends Omit<InputPrimitiveProps, "size">,
    VariantProps<typeof inputVariants> {}

export const textfieldStyles = tv({
  base: ["grid group gap-1.5"],
});

export const TextField = (props: TextFieldProps) => {
  const { className, ...rest } = props;
  return (
    <TextFieldPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        textfieldStyles({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

export const inputVariants = tv({
  base: [
    "border w-full shadow-xs shadow-input/40 outline-0 text-foreground bg-background rounded-md border-input ",
    "hover:border-border-hover motion-safe:transition-[background-color,border-color]",
    "placeholder:text-muted-foreground placeholder:font-normal",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground [&::-webkit-search-cancel-button]:hidden",
    "data-invalid:text-destructive",
    "disabled:opacity-50 disabled:pointer-events-none",
    "data-invalid:border-destructive data-invalid:focus:ring-destructive/50",
  ],
  variants: {
    size: {
      sm: [fieldHeight.sm, "text-sm px-2.5 py-1"],
      md: [fieldHeight.md, "text-sm px-3 py-1.5"],
      lg: [fieldHeight.lg, "text-base px-3.5 py-1.5"],
    },
    focusRing: {
      true: ['focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'],
      false: [],
    },
  },
  defaultVariants: {
    size: "sm",
    focusRing: true,
  },
});

const Input = (props: InputProps) => {
  const { className, size, focusRing, ...rest } = props;
  return (
    <InputPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        inputVariants({
          ...renderProps,
          size,
          focusRing,
          className,
        })
      )}
      {...rest}
    />
  );
};

export { Input };
