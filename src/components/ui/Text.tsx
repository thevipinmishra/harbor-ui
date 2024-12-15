import * as React from "react";
import { HTMLArkProps, ark } from "@ark-ui/react";
import { tv } from "@/lib/tv.config";

const textVariants = tv({
  base: ["text-pretty leading-normal text-foreground"],
  variants: {
    muted: {
      true: ["text-muted-foreground"],
    },
    size: {
      sm: ["text-sm"],
      base: ["text-base"],
      lg: ["text-lg"],
      xl: ["text-xl"],
      "2xl": ["text-2xl"],
      "3xl": ["text-3xl"],
      "4xl": ["text-4xl"],
      "5xl": ["text-5xl"],
      "6xl": ["text-6xl"],
    },
    weight: {
      light: ["font-light"],
      normal: ["font-normal"],
      medium: ["font-medium"],
      semibold: ["font-semibold"],
      bold: ["font-bold"],
      "extra-bold": ["font-extrabold"],
    },
  },
  defaultVariants: {
    size: "base",
    muted: false,
    weight: "normal",
  },
});

const Text = (props: HTMLArkProps<"p">) => {
  const { className, ...rest } = props;
  return (
    <ark.p
      className={textVariants({
        className,
      })}
      {...rest}
    />
  );
};

export {Text};