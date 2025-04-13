import { tv } from "@/lib/tv.config";

export const fieldHeight = {
  sm: "h-9",
  md: "h-10.5",
  lg: "h-12.5",
};

export const baseInputStyles = tv({
    base: ['border border-accent-subtle rounded-md']
})

export type FieldHeight = keyof typeof fieldHeight;