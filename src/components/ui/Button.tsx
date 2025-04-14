"use client";

import { cn, tv } from "@/lib/tv.config";
import { fieldHeight } from "@/utils/styles";
import {
  Button,
  ButtonProps as RACButtonProps,
  composeRenderProps,
} from "react-aria-components";
import {  RiLoader3Line } from "@remixicon/react";
import * as React from "react";
import type { VariantProps } from "tailwind-variants";
import { accentFocusRingVisible, destructiveFocusRingVisible, primaryFocusRingVisible } from "../utils/focusRing";

const buttonGroupVariants = tv({
  base: [
    "flex  [&_.hbui-button:not(:first-of-type)]:rounded-l-none [&_.hbui-button:not(:last-of-type)]:rounded-r-none -space-x-px",
  ],
});

export const buttonVariants = tv({
  base: [
    "select-none cursor-pointer inline-flex text-sm no-underline items-center rounded-sm justify-center gap-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    "motion-safe:transition-[opacity,background-color,color]",
    "[&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      primary: [
        "bg-primary text-primary-foreground",
        "font-medium",
        "hover:opacity-90",
        primaryFocusRingVisible
      ],
      secondary: [
        "bg-accent text-accent-foreground",
        "font-medium",
        "hover:opacity-90",
        accentFocusRingVisible
      ],
      plain: ["bg-background text-foreground", "hover:bg-muted", accentFocusRingVisible],
      outlined: [
        "bg-background text-foreground border border-accent-subtle",
        "hover:bg-muted",
        accentFocusRingVisible
      ],
      destructive: [
        "bg-destructive text-white",
        "hover:opacity-90",
        destructiveFocusRingVisible
      ],
    },
    size: {
      sm: [fieldHeight.sm, "px-3 py-1", "text-sm gap-1.5", "[&_svg]:size-4"],
      md: [fieldHeight.md, "px-4 py-2", "[&_svg]:size-5"],
      lg: [fieldHeight.lg, "px-5 py-3 text-base", "[&_svg]:size-6"],
      icon: ["size-6", "[&_svg]:size-3 shrink-0"],
      "icon-md": ["size-8", "[&_svg]:size-4 shrink-0"],
      "icon-lg": ["size-10", "[&_svg]:size-5 shrink-0"],
    },
    fullWidth: {
      true: "w-full",
    },
    isLoading: {
      true: "cursor-wait",
    },
  },
  defaultVariants: {
    size: "sm",
    variant: "primary",
  },
});

interface ButtonProps
  extends Omit<RACButtonProps, "size">,
    VariantProps<typeof buttonVariants> {
  /** Shows a loading spinner and disables the button */
  isLoading?: boolean;
}

const _Button = (props: ButtonProps) => {
  const {
    className,
    size,
    variant,
    children,
    isLoading = false,
    isDisabled,
    fullWidth,
    ...rest
  } = props;

  const staticClass = "hbui-button";
  return (
    <Button
      isDisabled={isLoading || isDisabled}
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          buttonVariants({
            ...renderProps,
            size,
            className,
            variant,
            fullWidth,
            isLoading,
          }),
          staticClass
        )
      )}
      {...rest}
    >
      {(values) => (
        <>
          {isLoading ? <RiLoader3Line className="animate-spin" /> : null}
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </Button>
  );
};

_Button.displayName = "Button";

const ButtonGroup = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return (
    <div
      className={buttonGroupVariants({
        className,
      })}
      {...rest}
    />
  );
};

ButtonGroup.displayName = "ButtonGroup";

export { _Button as Button, ButtonGroup };
export type { ButtonProps };
