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
import { accentFocusRingVisible } from "../utils/focusRing";

export interface InputProps
  extends Omit<InputPrimitiveProps, "size">,
    VariantProps<typeof inputVariants> {}

export const textfieldStyles = tv({
  base: ["grid group gap-1"],
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
    "border w-full shadow-xs shadow-input/40 outline-0 text-foreground bg-background rounded-md border-accent-subtle ",
    "hover:border-border-hover motion-safe:transition-[background-color,border-color]",
    "placeholder:text-muted-foreground placeholder:font-normal",
    "data-invalid:text-destructive",
    "disabled:opacity-50 disabled:pointer-events-none",
    accentFocusRingVisible,
    "data-invalid:border-destructive data-invalid:focus:ring-destructive/50",
  ],
  variants: {
    size: {
      sm: [fieldHeight.sm, "text-sm px-2.5 py-1"],
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
    <InputPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        inputVariants({
          ...renderProps,
          className,
          size,
        })
      )}
      {...rest}
    />
  );
};

export { Input };
