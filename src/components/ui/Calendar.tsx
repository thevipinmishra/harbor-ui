import { tv } from "@/lib/tv.config";
import { DatePicker, DatePickerRootProps } from "@ark-ui/react/date-picker";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { buttonVariants } from "./Button";

interface CalendarProps extends Exclude<DatePickerRootProps, "open"> {}

const calendarVariants = tv({
  slots: {
    root: ["max-w-xs bg-card shadow-md p-4 rounded-md"],
    view: ["flex flex-col gap-4"],
    viewControl: ["flex justify-between gap-4"],
    nextPrevTrigger: [buttonVariants({ size: "icon", variant: 'outlined' })],
    tableHeader: ['text-sm text-muted-foreground font-medium text-left'],
    cellTrigger: [buttonVariants({ size: "icon-md", variant: 'plain' }), 'data-[disabled]:opacity-50 data-[disabled]:pointer-events-none', 'data-[selected]:bg-primary data-[selected]:text-primary-foreground'],
  },
});

const Calendar = (props: CalendarProps) => {
  const { className, ...rest } = props;
  return (
    <DatePicker.Root className={calendarVariants().root()} open {...rest}>
      <DatePicker.Content>
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
                  <DatePicker.ViewTrigger>
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
                        <DatePicker.TableHeader className={calendarVariants().tableHeader()} key={id}>
                          {weekDay.short}
                        </DatePicker.TableHeader>
                      ))}
                    </DatePicker.TableRow>
                  </DatePicker.TableHead>
                  <DatePicker.TableBody>
                    {datePicker.weeks.map((week, id) => (
                      <DatePicker.TableRow key={id}>
                        {week.map((day, id) => (
                          <DatePicker.TableCell key={id} value={day}>
                            <DatePicker.TableCellTrigger className={calendarVariants().cellTrigger()}>
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
                  <DatePicker.PrevTrigger  className={calendarVariants().nextPrevTrigger()}>
                    <CaretLeft />
                  </DatePicker.PrevTrigger>
                  <DatePicker.ViewTrigger>
                    <DatePicker.RangeText />
                  </DatePicker.ViewTrigger>
                  <DatePicker.NextTrigger  className={calendarVariants().nextPrevTrigger()}>
                    <CaretRight />
                  </DatePicker.NextTrigger >
                </DatePicker.ViewControl>
                <DatePicker.Table>
                  <DatePicker.TableBody>
                    {datePicker
                      .getMonthsGrid({ columns: 4, format: "short" })
                      .map((months, id) => (
                        <DatePicker.TableRow key={id}>
                          {months.map((month, id) => (
                            <DatePicker.TableCell key={id} value={month.value}>
                              <DatePicker.TableCellTrigger>
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
                  <DatePicker.PrevTrigger  className={calendarVariants().nextPrevTrigger()}>
                    <CaretLeft />
                  </DatePicker.PrevTrigger>
                  <DatePicker.ViewTrigger>
                    <DatePicker.RangeText />
                  </DatePicker.ViewTrigger>
                  <DatePicker.NextTrigger  className={calendarVariants().nextPrevTrigger()}>
                    <CaretRight />
                  </DatePicker.NextTrigger>
                </DatePicker.ViewControl>
                <DatePicker.Table>
                  <DatePicker.TableBody>
                    {datePicker
                      .getYearsGrid({ columns: 4 })
                      .map((years, id) => (
                        <DatePicker.TableRow key={id}>
                          {years.map((year, id) => (
                            <DatePicker.TableCell key={id} value={year.value}>
                              <DatePicker.TableCellTrigger>
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
    </DatePicker.Root>
  );
};

export { Calendar };
