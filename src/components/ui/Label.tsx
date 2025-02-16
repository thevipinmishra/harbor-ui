"use client";

import { tv } from "@/lib/tv.config";
import { Field, type FieldLabelProps } from "@ark-ui/react";
import * as React from "react";

const labelVariants = tv({
  base: [
    "font-medium text-sm text-foreground",
    "data-invalid:text-destructive",
    "data-disabled:opacity-50",
  ],
});

const Label = React.forwardRef<React.ElementRef<typeof Field.Label>, FieldLabelProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <Field.Label
        ref={ref}
        className={labelVariants({
          className,
        })}
        {...rest}
      />
    );
  },
);

export { Label, labelVariants };
