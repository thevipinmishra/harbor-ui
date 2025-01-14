import { twMerge } from "tailwind-merge";
import { type ClassValue, createTV } from "tailwind-variants";
import clsx from "clsx";

export const tv = createTV({
	twMerge: true,
});

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
