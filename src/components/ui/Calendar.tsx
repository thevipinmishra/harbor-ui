"use client";

import { tv } from "@/lib/tv.config";
import {
  Calendar as CalendarPrimitive,
  CalendarCell,
  CalendarGrid,
  CalendarProps,
  DateValue,
  composeRenderProps,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  Header,
  Heading,
} from "react-aria-components";
import { Button, buttonVariants } from "./Button";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

export const calendarVariants = tv({
  slots: {
    root: ["w-max bg-background shadow-md p-4 rounded-md"],
    view: ["flex flex-col gap-4"],
    viewControl: ["flex justify-between gap-4"],
    viewTrigger: ["font-semibold"],
    tableHeader: ["text-sm text-muted-foreground font-medium text-left"],
    td: ["p-1"],
    cellTrigger: [
      buttonVariants({ size: "icon-md", variant: "plain" }),
      "font-medium",
      "data-disabled:opacity-50 data-disabled:pointer-events-none",
      "data-selected:bg-accent data-selected:text-accent-foreground data-in-range:bg-muted",
      "data-range-start:bg-primary data-range-start:text-primary-foreground",
      "data-range-end:bg-primary data-range-end:text-primary-foreground",
    ],
    cellTriggerMonthYear: [
      buttonVariants({ size: "md", variant: "plain" }),
      "data-disabled:opacity-50 data-disabled:pointer-events-none",
      "data-selected:bg-primary data-selected:text-primary-foreground w-full",
    ],
  },
});

const Calendar = (props: CalendarProps<DateValue>) => {
  const { className, ...rest } = props;
  return (
    <CalendarPrimitive
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
    </CalendarPrimitive>
  );
};

export { Calendar };
