import { cn, tv } from "@/lib/tv.config";
import { VariantProps } from "tailwind-variants";
import { Toggle, ToggleRootProps } from "@ark-ui/react/toggle";
import { badgeBaseVariant } from "./Badge";
import { Check } from "@phosphor-icons/react";

type ChipProps = ToggleRootProps & VariantProps<typeof chipVariants>;

export const chipVariants = tv({
  base: [
    badgeBaseVariant(),
    "normal-case inline-flex gap-1 items-center min-w-16",
  ],
  variants: {
    size: {
      sm: ["px-2 py-0.5", "h-6"],
      md: ["px-3 py-1", "h-7"],
      lg: ["px-4 py-1.5", "h-8"],
    },
    variant: {
      filled: [
        "bg-secondary text-secondary-foreground aria-pressed:bg-primary aria-checked:bg-primary aria-pressed:text-primary-foreground aria-checked:text-primary-foreground",
        "motion-safe:transition-colors",
      ],
      outlined: [
        "border border-secondary bg-background text-secondary-foreground",
        "aria-pressed:border-primary aria-checked:border-primary",
      ],
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
});

const Chip = (props: ChipProps) => {
  const { className, children, size, variant, ...rest } = props;
  return (
    <Toggle.Root
      className={chipVariants({
        size,
        variant,
        className,
      })}
      {...rest}
    >
      <Toggle.Context>
        {(context) =>
          context.pressed ? <Check weight="bold" className={cn("shrink-0")} /> : null
        }
      </Toggle.Context>
      {children}
    </Toggle.Root>
  );
};

const ChipContext = Toggle.Context;

export { Chip, ChipContext };
