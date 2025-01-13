"use client";

import { cn } from "@/lib/tv.config";
import { Field as Primitive, type FieldHelperTextProps } from "@ark-ui/react/field";

const Description = (props: FieldHelperTextProps) => {
  const { className, ...rest } = props;
  return (
    <Primitive.HelperText
      className={cn("text-sm text-muted-foreground", className)}
      {...rest}
    />
  );
};

export { Description };
