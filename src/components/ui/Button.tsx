"use client";

import { cn, tv } from "@/lib/tv.config";
import { fieldHeight } from "@/utils/styles";
import { ark, HTMLArkProps } from "@ark-ui/react/factory";
import { SpinnerGap } from "@phosphor-icons/react";
import * as React from "react";
import { VariantProps } from "tailwind-variants";

const buttonGroupVariants = tv({
  base: [
    "flex [&_.hbui-button:not(:first-of-type)]:rounded-l-none [&_.hbui-button:not(:last-of-type)]:rounded-r-none",
  ],
});

export const buttonVariants = tv({
  base: [
    "select-none inline-flex text-sm items-center rounded justify-center gap-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    "focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background",
    "motion-safe:transition-[opacity,background-color,color]",
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
      ],
    },
    size: {
      sm: [fieldHeight.sm, "px-3 py-1", "text-sm gap-1.5", "[&_svg]:size-4"],
      md: [fieldHeight.md, "px-4 py-2", "[&_svg]:size-5"],
      lg: [fieldHeight.lg, "px-5 py-3", "[&_svg]:size-6"],
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
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      size,
      variant,
      children,
      loading = false,
      disabled,
      fullWidth,
      ...rest
    } = props;

    const staticClass = "hbui-button";
    return (
      <ark.button
        ref={ref}
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
        {...rest}
      >
        {loading ? <SpinnerGap className="animate-spin" /> : null}
        {children}
      </ark.button>
    );
  }
);

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

export { Button, ButtonGroup };
