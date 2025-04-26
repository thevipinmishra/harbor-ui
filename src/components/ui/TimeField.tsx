"use client";

import {
  composeRenderProps,
  DateInput,
  DateSegment,
  TimeField as Primitive,
  TimeFieldProps as PrimitiveProps,
  TimeValue,
} from "react-aria-components";
import { Label } from "./Label";
import { tv } from "@/lib/tv.config";
import { baseInputStyles } from "@/utils/styles";
import { VariantProps } from "tailwind-variants";
import { datePickerVariants } from "./Datepicker";

interface TimeFieldProps
  extends VariantProps<typeof baseInputStyles>,
    PrimitiveProps<TimeValue> {
  label?: string;
}

const dateFieldVariants = tv({
  slots: {
    root: ["grid gap-1.5"],
    dateInput: [baseInputStyles(), "flex px-2.5 items-center"],
  },
});

const TimeField = (props: TimeFieldProps) => {
  const { label, size, className, ...rest } = props;
  return (
    <Primitive
      className={composeRenderProps(className, (className, renderProps) =>
        dateFieldVariants().root({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      {label && <Label>{label}</Label>}
      <DateInput className={dateFieldVariants().dateInput({ size })}>
        {(segment) => (
          <DateSegment
            segment={segment}
            className={datePickerVariants().dateSegment()}
          />
        )}
      </DateInput>
    </Primitive>
  );
};

export { TimeField };
