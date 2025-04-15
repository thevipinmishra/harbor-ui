"use client";

import { tv } from "@/lib/tv.config";
import {
  DatePicker as DatePickerPrimitive,
  Group,
  DateInput,
  DateSegment,
  DatePickerProps,
  DateValue,
} from "react-aria-components";
import { Button } from "./Button";
import { RiCalendarLine } from "@remixicon/react";
import { Popover } from "./Popover";
import { Calendar } from "./Calendar";
import { Label } from "./Label";
import { baseInputStyles } from "@/utils/styles";
import { VariantProps } from "tailwind-variants";

const datePickerVariants = tv({
  slots: {
    root: "flex flex-col gap-1",
    label: "",
    group: ["flex items-center gap-4 ps-2 py-2 pe-1", baseInputStyles()],
    dateInput: "flex-1",
    dateSegment:
      "text-sm motion-safe:transition-colors rounded font-medium outline-none py-0.5 px-1 data-[type=literal]:text-muted-foreground focus:bg-accent focus:text-accent-foreground data-[type=literal]:p-0",
    calendarButton: "",
  },
});

interface DatePickerWithLabelProps
  extends DatePickerProps<DateValue>,
    VariantProps<typeof datePickerVariants>,
    VariantProps<typeof baseInputStyles> {
  label?: string;
}

const DatePicker = (props: DatePickerWithLabelProps) => {
  const { label, size, ...rest } = props;
  const slots = datePickerVariants();
  return (
    <DatePickerPrimitive {...rest} className={slots.root()}>
      {label && <Label className={slots.label()}>{label}</Label>}
      <Group
        className={slots.group({
          size,
        })}
      >
        <DateInput className={slots.dateInput()}>
          {(segment) => (
            <DateSegment segment={segment} className={slots.dateSegment()} />
          )}
        </DateInput>
        <Button
          size="icon-md"
          variant="plain"
          className={slots.calendarButton()}
        >
          <RiCalendarLine />
        </Button>
      </Group>
      <Popover className={"p-0"}>
        <Calendar />
      </Popover>
    </DatePickerPrimitive>
  );
};

export { DatePicker, datePickerVariants };
