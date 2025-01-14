"use client";

import { cn } from "@/lib/tv.config";
import { type FieldErrorTextProps, Field as Primitive } from "@ark-ui/react/field";

const ErrorMessage = (props: FieldErrorTextProps) => {
  const { className, ...rest } = props;
  return (
    <Primitive.ErrorText
      className={cn("text-sm text-destructive", className)}
      {...rest}
    />
  );
};

export { ErrorMessage };
