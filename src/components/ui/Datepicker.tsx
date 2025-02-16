"use client";

import { cn, tv } from "@/lib/tv.config";
import { Portal, useLocaleContext } from "@ark-ui/react";
import {
  type DatePickerRootProps as PrimitiveRootProps,
  DatePicker as Primitive,
  type UseDatePickerContext,
  parseDate,
} from "@ark-ui/react/date-picker";
import { CalendarBlank } from "@phosphor-icons/react";
import { inputVariants } from "./Input";
import { CalendarContent } from "./Calendar";
import { popoverVariants } from "./Popover";
import { useMemo } from "react";

interface DatePickerRootProps extends PrimitiveRootProps {
  placeholder?: string;
}

const datePickerVariants = tv({
  slots: {
    content: [
      popoverVariants().content(),
      "max-w-xs bg-card shadow-md p-4 rounded-md",
    ],
    value: [
      "flex-1 inline-block text-left font-medium whitespace-nowrap overflow-hidden text-ellipsis",
      "data-[placeholder=true]:text-muted-foreground",
    ],
  },
});

const DatePicker = ({
  className,
  timeZone = "UTC",
  format,
  selectionMode,
  placeholder,
  ...rest
}: DatePickerRootProps) => {
  const { locale } = useLocaleContext();

  const formatDateString = useMemo(
    () => (context: UseDatePickerContext) => {
      if (!context.value) return "";
      if (!format) {
        if (selectionMode === "multiple") {
          return context.valueAsString.map((date) => date).join(", ");
        }

        if (selectionMode === "range") {
          return context.valueAsString.map((date) => date).join(" - ");
        }

        return context.valueAsString[0];
      }

      return context.value.map((date) =>
        format?.(date, {
          locale,
          timeZone,
        })
      );
    },
    [format, selectionMode, locale, timeZone]
  );

  return (
    <Primitive.Root
      timeZone={timeZone}
      locale={locale}
      selectionMode={selectionMode}
      {...rest}
    >
      <Primitive.Control>
        <Primitive.Context>
          {(context) => (
            <Primitive.Trigger
              className={cn(inputVariants(), "flex cursor-pointer items-center gap-4")}
            >
              <span
                className={datePickerVariants().value()}
                data-placeholder={context.valueAsString.length === 0}
              >
                {formatDateString(context) || placeholder}
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

export { DatePicker, parseDate };
