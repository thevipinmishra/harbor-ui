import { tv } from "@/lib/tv.config";

export const fieldHeight = {
  sm: "h-9",
  md: "h-10.5",
  lg: "h-12.5",
};

export const baseInputStyles = tv({
  base: ["border border-input rounded-md"],
  variants: {
    size: {
      sm: ["h-9", "text-sm px-2.5 py-1"],
      md: ["h-10.5", "text-sm px-3 py-1.5"],
      lg: ["h-12.5", "text-base px-3.5 py-1.5"],
    },
  },
  defaultVariants: {
    size: "sm",
  }
});

export type FieldHeight = keyof typeof fieldHeight;
