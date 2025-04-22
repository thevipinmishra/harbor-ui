"use client";

import { tv } from "@/lib/tv.config";
import {
  DateRangePicker as DateRangePickerPrimitive,
  Group,
  DateInput,
  DateSegment,
  DateValue,
  DateRangePickerProps,
} from "react-aria-components";
import { Button } from "./Button";
import { RiCalendarLine } from "@remixicon/react";
import { Popover } from "./Popover";
import { Label } from "./Label";
import { baseInputStyles } from "@/utils/styles";
import { VariantProps } from "tailwind-variants";
import { RangeCalendar } from "./RangeCalendar";

const dateRangePickerVariants = tv({
  slots: {
    root: "flex flex-col gap-1.5",
    label: "",
    group: [baseInputStyles(), "flex items-center gap-2 ps-2"],
    dateInput: "flex-1",
    dateSegment:
      "text-sm motion-safe:transition-colors rounded font-medium outline-none p-0.5 data-[type=literal]:text-muted-foreground focus:bg-primary focus:text-primary-foreground",
    calendarButton: "self-stretch h-full rounded-r-[inherit] rounded-l-none",
  },
});

interface DatePickerWithLabelProps
  extends DateRangePickerProps<DateValue>,
    VariantProps<typeof dateRangePickerVariants>,
    VariantProps<typeof baseInputStyles> {
  label?: string;
}

const DateRangePicker = (props: DatePickerWithLabelProps) => {
  const { label, size, ...rest } = props;
  const slots = dateRangePickerVariants();
  return (
    <DateRangePickerPrimitive {...rest} className={slots.root()}>
      {label && <Label className={slots.label()}>{label}</Label>}
      <Group
        className={slots.group({
          size,
        })}
      >
        <DateInput slot="start" className={slots.dateInput()}>
          {(segment) => (
            <DateSegment segment={segment} className={slots.dateSegment()} />
          )}
        </DateInput>
        <span aria-hidden="true">-</span>
        <DateInput slot="end" className={slots.dateInput()}>
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
        <RangeCalendar />
      </Popover>
    </DateRangePickerPrimitive>
  );
};

export { DateRangePicker, dateRangePickerVariants };
