import { tv } from "@/lib/tv.config";

export const popoverAnimation = tv({
  base: [
    "motion-duration-200",
    "motion-safe:entering:motion-opacity-in-0",
    "motion-safe:entering:motion-scale-in-95",
    "motion-safe:exiting:motion-opacity-out-0",
  ],
});
