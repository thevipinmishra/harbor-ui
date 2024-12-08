"use client";

import { tv } from "@/lib/tv.config";
import { fieldHeight } from "@/utils/styles";
import { ark, HTMLArkProps } from "@ark-ui/react/factory";
import * as React from "react";
import { VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: ["select-none inline-flex text-sm items-center rounded justify-center gap-2",  "transition-all"],
  variants: {
    variant: {
      filled: [
        "bg-primary text-primary-foreground",
        "font-medium",
        "hover:opacity-90",
      ],
      plain: ['bg-background text-foreground', 'hover:bg-muted'],
      outlined: ['bg-background text-foreground border border-border', 'hover:bg-muted'],
    },
    size: {
      sm: [fieldHeight.sm, "px-3 py-1", "text-sm gap-1.5", '[&_svg]:size-4'],
      md: [fieldHeight.md, "px-4 py-2", '[&_svg]:size-5'],
      lg: [fieldHeight.lg, "px-5 py-3", '[&_svg]:size-6'],
      icon: ['size-6', '[&_svg]:size-3'],
      "icon-md": ['size-8', '[&_svg]:size-4'],
      "icon-lg": ['size-10', '[&_svg]:size-5']
    },
    fullWidth: {
        true: 'w-full'
    }
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
    const { className, size, variant, fullWidth,...rest } = props;
    return (
      <ark.button
        ref={ref}
        className={buttonVariants({
          className,
          size,
          variant,
          fullWidth,
        })}
        {...rest}
      />
    );
  }
);

export { Button };
