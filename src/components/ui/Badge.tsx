import { tv } from "@/lib/tv.config";
import type { VariantProps } from "tailwind-variants";
import { type HTMLArkProps, ark } from "@ark-ui/react";

export const badgeBaseVariant = tv({
  base: [
    "inline-flex leading-[1.1] select-none min-w-0",
    "text-ellipsis text-xs font-medium rounded-full items-center whitespace-nowrap"
  ],
});

export const badgeVariants = tv({
  base: [badgeBaseVariant()],
  variants: {
    variant: {
      filled: ["bg-primary text-primary-foreground"],
      outlined: ["border bg-background border-border text-foreground"],
      plain: ["bg-secondary text-foreground"],
      destructive: ["bg-destructive text-white"],
    },
    size: {
      sm: ["px-2.5 py-0.5"],
      md: ["px-3 py-1"],
      lg: ["px-4 py-1.5"],
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "md",
  },
});

interface BadgeProps
  extends HTMLArkProps<"span">,
    VariantProps<typeof badgeVariants> {}

const Badge = (props: BadgeProps) => {
  const { className, variant, size, ...rest } = props;
  return (
    <ark.span
      className={badgeVariants({
        className,
        variant,
        size,
      })}
      {...rest}
    />
  );
};

export { Badge };
