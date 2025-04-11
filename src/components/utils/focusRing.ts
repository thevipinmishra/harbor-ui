import { tv } from "@/lib/tv.config";

const focusRingStyles = tv({
  slots: {
    focus: [
      "outline-0 focus:ring focus:ring-offset-1 focus:ring-offset-background ",
    ],
    focusVisible: [
      "outline-0 focus-visible:ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
    ],
  },
  variants: {
    variant: {
      primary: {
        focus: ["focus:ring-primary-ring"],
        focusVisible: ["focus-visible:ring-primary-ring"],
      },
      accent: {
        focus: ["focus:ring-accent-ring"],
        focusVisible: ["focus-visible:ring-accent-ring"],
      },
      destructive: {
        focus: ["focus:ring-destructive-ring"],
        focusVisible: ["focus-visible:ring-destructive-ring"],
      },
    },
  },
  defaultVariants: {
    variant: 'accent'
  }
});

export const primaryFocusRing = focusRingStyles({
    variant: 'primary',
}).focus();
export const primaryFocusRingVisible = focusRingStyles({
    variant: 'primary',
}).focusVisible();

export const accentFocusRing = focusRingStyles({ variant: 'accent' }).focus();
export const accentFocusRingVisible = focusRingStyles({ variant: 'accent' }).focusVisible();

export const destructiveFocusRing = focusRingStyles({ variant: 'destructive' }).focus();
export const destructiveFocusRingVisible = focusRingStyles({ variant: 'destructive' }).focusVisible();
