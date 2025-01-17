"use client";

import { cn, tv } from "@/lib/tv.config";
import { Portal } from "@ark-ui/react";
import {
  type DatePickerRootProps as PrimitiveRootProps,
  DatePicker as Primitive,
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
  },
});

const DatePicker = (props: DatePickerRootProps) => {
  const {
    className,
    timeZone,
    locale,
    placeholder = "Select",
    ...rest
  } = props;

  return (
    <Primitive.Root timeZone={timeZone} locale={locale} {...rest}>
      <Primitive.Control>
        <Primitive.Context>
          {(context) => (
            <Primitive.Trigger
              className={cn(inputVariants(), "flex items-center gap-4")}
            >
              <span
                className="flex-1 text-left text-ellipsis"
                data-placeholder={context.valueAsString.length === 0}
              >
                {context.valueAsString[0] || placeholder}
              </span>
              <CalendarBlank />
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
