"use client";


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
import { tv } from "@/lib/tv.config";

export const calendarVariants = tv({
  slots: {
    root: ["w-max bg-background shadow-md p-4 rounded-md"],
    view: ["flex flex-col gap-4"],
    viewControl: ["flex justify-between gap-4"],
    viewTrigger: ["font-semibold"],
    tableHeader: ["text-sm text-muted-foreground font-medium text-left"],
    td: ["p-1"],
    cellTrigger: [
      "select-none relative size-9 font-medium cursor-pointer inline-flex text-sm no-underline items-center outline-0 justify-center gap-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      "motion-safe:transition-[opacity,background-color,color]",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:z-20",
      "bg-background text-foreground", "hover:bg-accent",
      "font-medium",
      "disabled:opacity-50 disabled:pointer-events-none",
      "selected:bg-accent selected:text-accent-foreground",
      "selection-start:bg-primary selection-start:text-primary-foreground selection-end:bg-primary selection-end:text-primary-foreground selection-start:rounded-l-sm selection-end:rounded-r-sm",
    ],
  },
});

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
