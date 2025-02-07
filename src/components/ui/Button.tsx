"use client";

import { cn, tv } from "@/lib/tv.config";
import { fieldHeight } from "@/utils/styles";
import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { SpinnerGap } from "@phosphor-icons/react";
import * as React from "react";
import type { VariantProps } from "tailwind-variants";

const buttonGroupVariants = tv({
  base: [
    "flex [&_.hbui-button:not(:first-of-type)]:rounded-l-none [&_.hbui-button:not(:last-of-type)]:rounded-r-none -space-x-px",
  ],
});

export const buttonVariants = tv({
  base: [
    "select-none inline-flex text-sm no-underline items-center rounded cursor-default justify-center gap-2",
    "disabled:opacity-50 disabled:bg-muted disabled:pointer-events-none",
    "focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background",
    "motion-safe:transition-[opacity,background-color,color]",
    "[&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      filled: [
        "bg-primary text-primary-foreground",
        "font-medium",
        "hover:opacity-90",
        "disabled:bg-disab",
      ],
      plain: ["bg-background text-foreground", "hover:bg-muted"],
      outlined: [
        "bg-background text-foreground border border-border",
        "hover:bg-muted",
      ],
      destructive: [
        "bg-destructive text-destructive-foreground",
        "hover:opacity-90",
        "focus:ring-destructive/50",
      ],
    },
    size: {
      sm: [fieldHeight.sm, "px-3 py-1", "text-sm gap-1.5", "[&_svg]:size-4"],
      md: [fieldHeight.md, "px-4 py-2", "[&_svg]:size-5"],
      lg: [fieldHeight.lg, "px-5 py-3 text-base", "[&_svg]:size-6"],
      icon: ["size-6", "[&_svg]:size-3"],
      "icon-md": ["size-8", "[&_svg]:size-4"],
      "icon-lg": ["size-10", "[&_svg]:size-5"],
    },
    fullWidth: {
      true: "w-full",
    },
    loading: {
      true: "cursor-wait",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
});

interface ButtonProps
  extends HTMLArkProps<"button">,
    VariantProps<typeof buttonVariants> {
  /** Shows a loading spinner and disables the button */
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    className,
    size,
    variant,
    children,
    loading = false,
    type = "button",
    disabled,
    fullWidth,
    ...rest
  } = props;

  const staticClass = "hbui-button";
  return (
    <ark.button
      disabled={loading || disabled}
      className={cn(
        buttonVariants({
          className,
          size,
          variant,
          fullWidth,
        }),
        staticClass
      )}
      type={type}
      {...rest}
    >
      {loading ? <SpinnerGap className="animate-spin" /> : null}
      {children}
    </ark.button>
  );
};

Button.displayName = "Button";

const ButtonGroup = (props: HTMLArkProps<"div">) => {
  const { className, ...rest } = props;
  return (
    <ark.div
      className={buttonGroupVariants({
        className,
      })}
      {...rest}
    />
  );
};

ButtonGroup.displayName = "ButtonGroup";

export { Button, ButtonGroup };
