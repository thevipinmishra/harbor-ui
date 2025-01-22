"use client";

import { cn, tv } from "@/lib/tv.config";
import { Portal } from "@ark-ui/react";
import {
  type DatePickerRootProps as PrimitiveRootProps,
  DatePicker as Primitive,
  type UseDatePickerProps,
} from "@ark-ui/react/date-picker";
import { CalendarBlank } from "@phosphor-icons/react";
import { inputVariants } from "./Input";
import { CalendarContent } from "./Calendar";
import { popoverVariants } from "./Popover";
import { DateFormatter } from "@internationalized/date";

// Default configuration
const DEFAULT_CONFIG = {
  timeZone: 'UTC',
  locale: 'en-US',
  placeholder: 'Select'
} as const;

// Types
interface DatePickerRootProps extends PrimitiveRootProps {
  placeholder?: string;
}

// Styles
const datePickerVariants = tv({
  slots: {
    content: [
      popoverVariants().content(),
      "max-w-xs bg-card shadow-md p-4 rounded-md",
    ],
    value: ['flex-1 inline-block text-left font-medium whitespace-nowrap overflow-hidden text-ellipsis', 'data-[placeholder=true]:text-muted-foreground']
  },
});

// Utility function for date formatting
const createDateFormatter = (locale: string, timeZone: string) => {
  const opts: Intl.DateTimeFormatOptions = {
    timeZone,
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  };
  return new DateFormatter(locale, opts);
};

const DatePicker = ({
  className,
  timeZone = DEFAULT_CONFIG.timeZone,
  locale = DEFAULT_CONFIG.locale,
  format,
  selectionMode,
  placeholder = DEFAULT_CONFIG.placeholder,
  ...rest
}: DatePickerRootProps) => {
  const formatter = createDateFormatter(locale, timeZone);
  
const formatValue = (value: UseDatePickerProps['value']) => {
    if (!value) return '';
    const formattedDates = value.map((date) => 
        format?.(date) ?? formatter.format(date.toDate(timeZone))
    );
    
    if (selectionMode === 'multiple') {
        return formattedDates.join(', ');
    }
    if (selectionMode === 'range') {
        return formattedDates.join(' - ');
    }
    return formattedDates[0];
};

  return (
    <Primitive.Root timeZone={timeZone} locale={locale} selectionMode={selectionMode} {...rest}>
      <Primitive.Control>
        <Primitive.Context>
          {(context) => (
            <Primitive.Trigger
              className={cn(inputVariants(), "flex items-center gap-4")}
            >
              <span
                className={datePickerVariants().value()}
                data-placeholder={context.valueAsString.length === 0}
              >
                {formatValue(context.value) || placeholder}
              </span>
              <CalendarBlank className="size-5 shrink-0" />
            </Primitive.Trigger>
          )}
        </Primitive.Context>
      </Primitive.Control>
      <Portal>
        <Primitive.Positioner>
          <CalendarContent className={datePickerVariants().content()} />
        </Primitive.Positioner>
      </Portal>
    </Primitive.Root>
  );
};

export { DatePicker };
