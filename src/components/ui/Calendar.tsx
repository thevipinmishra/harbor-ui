import { tv } from "@/lib/tv.config";
import {
  DatePicker,
  type DatePickerRootProps,
  type DatePickerContentProps
} from "@ark-ui/react/date-picker";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { buttonVariants } from "./Button";
import { popoverVariants } from "./Popover";

interface CalendarProps extends Exclude<DatePickerRootProps, "open"> {}

export const calendarVariants = tv({
  slots: {
    root: ["max-w-xs bg-card shadow-md p-4 rounded-md"],
    view: ["flex flex-col gap-4"],
    viewControl: ["flex justify-between gap-4"],
    nextPrevTrigger: [buttonVariants({ size: "icon", variant: "outlined" })],
    viewTrigger: ["font-semibold"],
    tableHeader: ["text-sm text-muted-foreground font-medium text-left"],
    td: ["p-1"],
    cellTrigger: [
      buttonVariants({ size: "icon-md", variant: "plain" }),
      "data-[disabled]:opacity-50 data-[disabled]:pointer-events-none",
      "data-[selected]:bg-primary data-[selected]:text-primary-foreground",
    ],
    cellTriggerMonthYear: [
      buttonVariants({ size: "md", variant: "plain" }),
      "data-[disabled]:opacity-50 data-[disabled]:pointer-events-none",
      "data-[selected]:bg-primary data-[selected]:text-primary-foreground w-full",
    ],
  },
});

const Calendar = (props: CalendarProps) => {
  const { className, ...rest } = props;
  return (
    <DatePicker.Root className={calendarVariants().root()} open {...rest}>
      <CalendarContent />
    </DatePicker.Root>
  );
};

export const CalendarContent = (props: DatePickerContentProps) => {
    const { className, ...rest } = props;
  return (
    <DatePicker.Content className={className} {...rest}>
      <DatePicker.View className={calendarVariants().view()} view="day">
        <DatePicker.Context>
          {(datePicker) => (
            <>
              <DatePicker.ViewControl
                className={calendarVariants().viewControl()}
              >
                <DatePicker.PrevTrigger
                  className={calendarVariants().nextPrevTrigger()}
                >
                  <CaretLeft />
                </DatePicker.PrevTrigger>
                <DatePicker.ViewTrigger
                  className={calendarVariants().viewTrigger()}
                >
                  <DatePicker.RangeText />
                </DatePicker.ViewTrigger>
                <DatePicker.NextTrigger
                  className={calendarVariants().nextPrevTrigger()}
                >
                  <CaretRight />
                </DatePicker.NextTrigger>
              </DatePicker.ViewControl>
              <DatePicker.Table>
                <DatePicker.TableHead>
                  <DatePicker.TableRow>
                    {datePicker.weekDays.map((weekDay, id) => (
                      <DatePicker.TableHeader
                        className={calendarVariants().tableHeader()}
                        key={id}
                      >
                        {weekDay.short}
                      </DatePicker.TableHeader>
                    ))}
                  </DatePicker.TableRow>
                </DatePicker.TableHead>
                <DatePicker.TableBody>
                  {datePicker.weeks.map((week, id) => (
                    <DatePicker.TableRow key={id}>
                      {week.map((day, id) => (
                        <DatePicker.TableCell
                          key={id}
                          value={day}
                          className={calendarVariants().td()}
                        >
                          <DatePicker.TableCellTrigger
                            className={calendarVariants().cellTrigger()}
                          >
                            {day.day}
                          </DatePicker.TableCellTrigger>
                        </DatePicker.TableCell>
                      ))}
                    </DatePicker.TableRow>
                  ))}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </>
          )}
        </DatePicker.Context>
      </DatePicker.View>
      <DatePicker.View className={calendarVariants().view()} view="month">
        <DatePicker.Context>
          {(datePicker) => (
            <>
              <DatePicker.ViewControl
                className={calendarVariants().viewControl()}
              >
                <DatePicker.PrevTrigger
                  className={calendarVariants().nextPrevTrigger()}
                >
                  <CaretLeft />
                </DatePicker.PrevTrigger>
                <DatePicker.ViewTrigger
                  className={calendarVariants().viewTrigger()}
                >
                  <DatePicker.RangeText />
                </DatePicker.ViewTrigger>
                <DatePicker.NextTrigger
                  className={calendarVariants().nextPrevTrigger()}
                >
                  <CaretRight />
                </DatePicker.NextTrigger>
              </DatePicker.ViewControl>
              <DatePicker.Table>
                <DatePicker.TableBody>
                  {datePicker
                    .getMonthsGrid({ columns: 4, format: "short" })
                    .map((months, id) => (
                      <DatePicker.TableRow key={id}>
                        {months.map((month, id) => (
                          <DatePicker.TableCell
                            key={id}
                            value={month.value}
                            className={calendarVariants().td()}
                          >
                            <DatePicker.TableCellTrigger
                              className={calendarVariants().cellTriggerMonthYear()}
                            >
                              {month.label}
                            </DatePicker.TableCellTrigger>
                          </DatePicker.TableCell>
                        ))}
                      </DatePicker.TableRow>
                    ))}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </>
          )}
        </DatePicker.Context>
      </DatePicker.View>
      <DatePicker.View className={calendarVariants().view()} view="year">
        <DatePicker.Context>
          {(datePicker) => (
            <>
              <DatePicker.ViewControl
                className={calendarVariants().viewControl()}
              >
                <DatePicker.PrevTrigger
                  className={calendarVariants().nextPrevTrigger()}
                >
                  <CaretLeft />
                </DatePicker.PrevTrigger>
                <DatePicker.ViewTrigger
                  className={calendarVariants().viewTrigger()}
                >
                  <DatePicker.RangeText />
                </DatePicker.ViewTrigger>
                <DatePicker.NextTrigger
                  className={calendarVariants().nextPrevTrigger()}
                >
                  <CaretRight />
                </DatePicker.NextTrigger>
              </DatePicker.ViewControl>
              <DatePicker.Table>
                <DatePicker.TableBody>
                  {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                    <DatePicker.TableRow key={id}>
                      {years.map((year, id) => (
                        <DatePicker.TableCell
                          key={id}
                          value={year.value}
                          className={calendarVariants().td()}
                        >
                          <DatePicker.TableCellTrigger
                            className={calendarVariants().cellTriggerMonthYear()}
                          >
                            {year.label}
                          </DatePicker.TableCellTrigger>
                        </DatePicker.TableCell>
                      ))}
                    </DatePicker.TableRow>
                  ))}
                </DatePicker.TableBody>
              </DatePicker.Table>
            </>
          )}
        </DatePicker.Context>
      </DatePicker.View>
    </DatePicker.Content>
  );
};

export { Calendar };
