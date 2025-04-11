import { tv } from "@/lib/tv.config";

export const popoverAnimation = tv({
  base: [
    "motion-duration-200",
    //   In animation
    "motion-safe:entering:motion-opacity-in-0 motion-safe:entering:data-[placement^=bottom]:motion-translate-y-in-[.5rem] motion-safe:entering:data-[placement^=top]:motion-translate-y-in-[.5rem]",
    //   Out animation
    "motion-safe:exiting:motion-opacity-out-0",
  ],
});
