import { twMerge } from "tailwind-merge";
import { ClassValue, createTV } from "tailwind-variants";
import clsx from "clsx";

export const tv = createTV({
  twMerge: true,
});

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
