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
import { RiCalendar2Line } from "@remixicon/react";
import { Popover } from "./Popover";
import { Calendar } from "./Calendar";
import { Label } from "./Label";
import { fieldHeight } from "@/utils/styles";

const datePickerVariants = tv({
  slots: {
    root: "flex flex-col gap-1",
    label: "",
    group: [
      "flex items-center gap-4 ps-2 py-2 border border-accent-subtle rounded-md",
      fieldHeight.md,
    ],
    dateInput: "flex-1",
    dateSegment: "text-sm rounded font-medium outline-none p-0.5 data-[type=literal]:text-muted-foreground",
    calendarButton: "",
  },
});

interface DatePickerWithLabelProps extends DatePickerProps<DateValue> {
  label?: string;
}

const DatePicker = (props: DatePickerWithLabelProps) => {
  const { label, ...rest } = props;
  const slots = datePickerVariants();
  return (
    <DatePickerPrimitive {...rest} className={slots.root()}>
      {label && <Label className={slots.label()}>{label}</Label>}
      <Group className={slots.group()}>
        <DateInput className={slots.dateInput()}>
          {(segment) => (
            <DateSegment
              segment={segment}
              className={slots.dateSegment()}
            />
          )}
        </DateInput>
        <Button size="icon-md" variant="plain" className={slots.calendarButton()}>
          <RiCalendar2Line />
        </Button>
      </Group>
      <Popover className={"p-0"}>
        <Calendar />
      </Popover>
    </DatePickerPrimitive>
  );
};

export { DatePicker };
