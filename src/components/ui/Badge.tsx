import { tv } from "@/lib/tv.config";
import type { VariantProps } from "tailwind-variants";
import { type HTMLArkProps, ark } from "@ark-ui/react";

export const badgeBaseVariant = tv({
  base: [
    "inline-flex leading-[1.1] uppercase select-none min-w-0",
    "text-ellipsis text-xs font-medium rounded-full items-center whitespace-nowrap"
  ],
});

export const badgeVariants = tv({
  base: [badgeBaseVariant()],
  variants: {
    variant: {
      filled: ["bg-primary text-primary-foreground"],
      outlined: ["border bg-background border-primary text-foreground"],
      plain: ["bg-secondary text-foreground"],
      destructive: ["bg-destructive text-destructive-foreground"],
    },
    size: {
      sm: ["px-2.5 py-1"],
      md: ["px-3 py-1.5"],
      lg: ["px-4 py-2"],
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
