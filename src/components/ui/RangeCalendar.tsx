"use client";

import { tv } from "@/lib/tv.config";
import {
  RangeCalendar as RangeCalendarPrimitive,
  CalendarCell,
  CalendarGrid,
  RangeCalendarProps,
  DateValue,
  composeRenderProps,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  Header,
  Heading,
} from "react-aria-components";
import { Button } from "./Button";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { calendarVariants } from "./Calendar";

const RangeCalendar = (props: RangeCalendarProps<DateValue>) => {
  const { className, ...rest } = props;
  return (
    <RangeCalendarPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        calendarVariants().root({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      <Header className="flex mb-2 items-center justify-between gap-4">
        <Button size="icon-md" slot="previous" variant="outlined">
          <RiArrowLeftSLine />
        </Button>
        <Heading className="flex-1 text-sm font-semibold text-center" />
        <Button size="icon-md" slot="next" variant="outlined">
          <RiArrowRightSLine />
        </Button>
      </Header>
      <CalendarGrid
        weekdayStyle="short"
        className="border-separate border-spacing-1"
      >
        <CalendarGridHeader>
          {(day) => (
            <CalendarHeaderCell className="text-xs size-8 font-medium text-muted-foreground">
              {day}
            </CalendarHeaderCell>
          )}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              className={calendarVariants().cellTrigger()}
              date={date}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </RangeCalendarPrimitive>
  );
};

export { RangeCalendar };
