"use client";

import { tv } from "@/lib/tv.config";
import { FieldError as Primitive, FieldErrorProps, composeRenderProps } from "react-aria-components";

const fieldErrorVariants = tv({
    base: ['text-sm text-destructive']
})

const FieldError = (props: FieldErrorProps) => {
  const { className,  ...rest } = props;
  return (
    <Primitive
      className={composeRenderProps(className, (className, renderProps) =>
        fieldErrorVariants({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

export { FieldError };
