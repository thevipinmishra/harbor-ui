import { tv } from "@/lib/tv.config";

export const popoverAnimation = tv({
  base: [
    "motion-duration-200",
    "motion-safe:entering:motion-opacity-in-0",
    "motion-safe:entering:placement-bottom:motion-translate-y-in-[.25rem]",
    "motion-safe:entering:placement-top:motion-translate-y-in-[-.25rem]",
    "motion-safe:entering:placement-left:motion-translate-x-in-[-.25rem]",
    "motion-safe:entering:placement-right:motion-translate-x-in-[.25rem]",
    "motion-safe:exiting:motion-opacity-out-0",
  ],
});
