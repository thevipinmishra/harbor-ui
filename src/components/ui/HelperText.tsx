"use client";

import { tv } from "@/lib/tv.config";
import { FieldHelperTextProps, Field } from "@ark-ui/react";
import * as React from "react";

const helperTextVariants = tv({
    base: ['text-xs text-muted-foreground'],
})

const HelperText = React.forwardRef<
  React.ElementRef<typeof Field.HelperText>,
  FieldHelperTextProps
>((props, ref) => {
  const { className, ...rest } = props;
  return <Field.HelperText ref={ref} className={helperTextVariants({
    className
  })} {...rest} />;
});

export { HelperText };