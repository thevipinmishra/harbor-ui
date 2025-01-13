import { tv } from "@/lib/tv.config";
import { VariantProps } from "tailwind-variants";
import { HTMLArkProps, ark } from "@ark-ui/react";


export const badgeBaseVariant = tv({
    base: [ "inline-flex leading-[1.1] justify-center uppercase select-none text-ellipsis text-xs font-medium rounded-full items-center whitespace-nowrap line-clamp-1 min-w-0",]
})


export const badgeVariants = tv({
  base: [
   badgeBaseVariant(),
  ],
  variants: {
    variant: {
      filled: ["bg-primary text-primary-foreground"],
      outlined: ["border bg-background border-primary text-foreground"],
      plain: ["bg-muted text-muted-foreground"],
      destructive: ["bg-destructive text-destructive-foreground"],
    },
    size: {
      sm: ["px-2 py-0.5"],
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
