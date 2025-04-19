import {
  composeRenderProps,
  DateField as DateFieldPrimitive,
  DateFieldProps,
  DateInput,
  DateSegment,
  DateValue,
} from "react-aria-components";
import { Label } from "./Label";
import { cn, tv } from "@/lib/tv.config";
import { datePickerVariants } from "./Datepicker";
import { baseInputStyles } from "@/utils/styles";
import { VariantProps } from "tailwind-variants";

interface DateFieldWithLabelProps
  extends DateFieldProps<DateValue>,
    VariantProps<typeof baseInputStyles> {
  label?: string;
}

const dateFieldVariants = tv({
  slots: {
    root: "grid gap-1.5",
    dateInput: [baseInputStyles(), "flex px-2.5 items-center"],
  },
});

const DateField = (props: DateFieldWithLabelProps) => {
  const { label, className, size, ...rest } = props;
  return (
    <DateFieldPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        dateFieldVariants().root({ className, ...renderProps })
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
    </DateFieldPrimitive>
  );
};

export { DateField };
