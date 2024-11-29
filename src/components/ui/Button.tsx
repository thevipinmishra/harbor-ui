"use client";

import { tv } from "@/lib/tv.config";
import { fieldHeight } from "@/utils/styles";
import { ark, HTMLArkProps } from "@ark-ui/react/factory";
import * as React from "react";
import { VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: ["select-none inline-flex items-center rounded justify-center gap-2",  "transition-all"],
  variants: {
    variant: {
      filled: [
        "bg-primary text-primary-foreground",
        " font-medium",
        "hover:opacity-90",
      ],
      plain: ['bg-background text-foreground', 'hover:bg-muted-background'],
      outlined: ['bg-background text-foreground border border-border', 'hover:bg-muted-background'],
    },
    size: {
      sm: [fieldHeight.sm, "px-3 py-1", "text-sm gap-1.5", '[&_svg]:size-4'],
      md: [fieldHeight.md, "px-4 py-2", '[&_svg]:size-5'],
      lg: [fieldHeight.lg, "px-5 py-3", '[&_svg]:size-6'],
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
});

interface ButtonProps
  extends HTMLArkProps<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, size, variant, ...rest } = props;
    return (
      <ark.button
        ref={ref}
        className={buttonVariants({
          className,
          size,
          variant,
        })}
        {...rest}
      />
    );
  }
);

export { Button };
