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
  CalendarStateContext,
  useLocale,
} from "react-aria-components";
import { Button } from "./Button";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { useContext } from "react";
import { DateFormatter } from "@internationalized/date";

import { Select, SelectContent, SelectItem, SelectTrigger } from "./Select";

const getLocalizedMonths = (locale?: string) => {
  const localeFromContext = useLocale();
  const localeToUse = locale || localeFromContext.locale;
  const formatter = new DateFormatter(localeToUse, {
    month: "long",
  });
  return Array.from({ length: 12 }, (_, i) =>
    formatter.format(new Date(2000, i, 1))
  );
};

export const calendarVariants = tv({
  slots: {
    root: ["w-max bg-background shadow-md p-4 rounded-md"],
    view: ["flex flex-col gap-4"],
    viewControl: ["flex justify-between gap-4"],
    viewTrigger: ["font-semibold"],
    tableHeader: ["text-sm text-muted-foreground font-medium text-left"],
    td: ["p-1"],
    cellTrigger: [
      "select-none relative size-9 font-medium cursor-pointer inline-flex text-sm no-underline rounded-sm items-center outline-0 justify-center gap-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      "motion-safe:transition-[opacity,background-color,color]",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:z-20",
      "bg-background text-foreground",
      "hover:bg-muted",
      "font-medium",
      "disabled:opacity-50 disabled:pointer-events-none",
      "selected:bg-primary selected:text-primary-foreground",
    ],
  },
});

// Helper to get year range for YearSelect
const getYearRange = (currentYear: number, minValue?: number, maxValue?: number, range: number = 70) => {
  const minYear = typeof minValue === 'number' ? minValue : currentYear - range;
  const maxYear = typeof maxValue === 'number' ? maxValue : currentYear + 10;
  const startYear = Math.max(currentYear - range, minYear);
  const endYear = Math.min(currentYear + 10, maxYear);
  return { startYear, endYear };
};

const YearSelect = () => {
  const state = useContext(CalendarStateContext);
  if (!state || !state.focusedDate) return null;
  const focusedDate = state.focusedDate;
  const currentYear = focusedDate.year;
  const { startYear, endYear } = getYearRange(
    currentYear,
    state.minValue ? state.minValue.year : undefined,
    state.maxValue ? state.maxValue.year : undefined,
    70
  );
  const years = [];
  for (let y = startYear; y <= endYear; y++) {
    const testDate = focusedDate.set({ year: y });
    const disabled = state.isInvalid ? state.isInvalid(testDate) : false;
    years.push({ id: String(y), name: String(y), disabled });
  }

  const handleSelectionChange = (key: React.Key) => {
    if (typeof key !== "string") return;
    const year = parseInt(key, 10);
    if (isNaN(year)) return;
    state.setFocusedDate(focusedDate.set({ year }));
  };

  return (
    <div>
      <Select
        aria-label="Select year"
        selectedKey={String(currentYear)}
        onSelectionChange={handleSelectionChange}
      >
        <SelectTrigger />
        <SelectContent items={years}>
          {(item) => (
            <SelectItem id={item.id} textValue={item.name} isDisabled={item.disabled}>
              {item.name}
            </SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

const MonthYearSelect = () => {
  const state = useContext(CalendarStateContext);
  if (!state || !state.focusedDate) return null;
  const focusedDate = state.focusedDate;
  const selectedMonth = focusedDate.month - 1;
  const monthNames = getLocalizedMonths();
  const months = monthNames.map((name, index) => {
    const testDate = focusedDate.set({ month: index + 1 });
    const disabled = state.isInvalid ? state.isInvalid(testDate) : false;
    return { id: String(index), name, disabled };
  });

  const handleMonthChange = (key: React.Key) => {
    if (typeof key !== "string") return;
    const monthIndex = parseInt(key, 10);
    if (isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) return;
    state.setFocusedDate(focusedDate.set({ month: monthIndex + 1 }));
  };

  return (
    <div className="flex gap-2 *:flex-1 mb-2">
      <Select
        aria-label="Select month"
        selectedKey={String(selectedMonth)}
        onSelectionChange={handleMonthChange}
      >
        <SelectTrigger />
        <SelectContent items={months}>
          {(item) => (
            <SelectItem id={item.id} textValue={item.name} isDisabled={item.disabled}>
              {item.name}
            </SelectItem>
          )}
        </SelectContent>
      </Select>
      <YearSelect />
    </div>
  );
};

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
      <MonthYearSelect />
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
        className="w-full border-collapse space-y-1"
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
