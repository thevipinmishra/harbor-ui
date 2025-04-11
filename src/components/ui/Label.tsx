"use client";

import { tv } from "@/lib/tv.config";
import { Label as LabelPrimitive, LabelProps } from "react-aria-components";
import * as React from "react";

const labelVariants = tv({
  base: [
    "font-medium cursor-default block text-xs text-muted-foreground",
    "data-invalid:text-destructive",
    "data-disabled:opacity-50",
  ],
});

const Label = (props: LabelProps) => {
  const { className, ...rest } = props;
  return (
    <LabelPrimitive
      className={labelVariants({
        className,
      })}
      {...rest}
    />
  );
};

export { Label, labelVariants };
