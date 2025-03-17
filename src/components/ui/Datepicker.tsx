"use client";

import { cn, tv } from "@/lib/tv.config";
import { Portal } from "@ark-ui/react";
import {
  type DatePickerRootProps as PrimitiveRootProps,
  DatePicker as Primitive,
  parseDate,
} from "@ark-ui/react/date-picker";
import { CalendarBlank } from "@phosphor-icons/react";
import { inputVariants } from "./Input";
import { CalendarContent } from "./Calendar";
import { popoverVariants } from "./Popover";

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
  return (
    <Primitive.Root timeZone={timeZone} selectionMode={selectionMode} {...rest}>
      <Primitive.Control>
        <Primitive.Context>
          {(context) => (
            <Primitive.Trigger
              className={cn(
                inputVariants(),
                "flex cursor-pointer items-center gap-4"
              )}
            >
              <span
                className={datePickerVariants().value()}
                data-placeholder={context.valueAsString.length === 0}
              >
                {context.valueAsString.length === 0
                  ? placeholder
                  : selectionMode === "multiple"
                  ? context.valueAsString.join(" - ")
                  : context.valueAsString[0]}
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
