import { tv } from "@/lib/tv.config";
import {
  type NumberInputInputProps,
  type NumberInputLabelProps,
  NumberInput as NumberInputPrimitive,
  type NumberInputRootProps,
} from "@ark-ui/react/number-input";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { labelVariants } from "./Label";
import { fieldHeight } from "@/utils/styles";
import React from "react";
import type { InputProps } from "./Input";

interface NumberInputFieldProps extends Omit<NumberInputInputProps, 'size'> {
    size?: InputProps["size"];
}

const numberInputVariants = tv({
  slots: {
    root: ["flex flex-col gap-2"],
    control: [
      "border border-input group grid grid-cols-[1fr_2rem] grid-rows-2 shadow-xs text-sm rounded data-focus:ring-1 data-focus:ring-ring data-focus:ring-offset-1 data-focus:ring-offset-background",
      "data-invalid:border-destructive data-invalid:data-focus:ring-destructive/50",
    ],
    input: [
      "row-span-2 rounded-l-[inherit] rounded-r-none outline-hidden px-2 py-1 border-r border-input tabular-nums data-invalid:border-destructive",
    ],
    trigger: [
      "flex flex-col outline-hidden justify-center items-center shrink-0 data-[part=decrement-trigger]:rounded-br-[inherit] data-[part=decrement-trigger]:border-t data-[part=decrement-trigger]:border-input group-data-invalid:border-destructive data-[part=increment-trigger]:rounded-tr-[inherit] disabled:opacity-50 disabled:cursor-not-allowed",
    ],
  },
  variants: {
    size: {
      sm: {
        input: [fieldHeight.sm],
      },
      md: {
        input: [fieldHeight.md],
      },
      lg: {
        input: [fieldHeight.lg],
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const NumberInput = (props: NumberInputRootProps) => {
  const { className, ...rest } = props;
  return (
    <NumberInputPrimitive.Root
      className={numberInputVariants().root({
        className,
      })}
      {...rest}
    />
  );
};
NumberInput.displayName = "NumberInput";

const NumberInputLabel = (props: NumberInputLabelProps) => {
  const { className, ...rest } = props;
  return (
    <NumberInputPrimitive.Label
      className={labelVariants({
        className,
      })}
      {...rest}
    />
  );
};

const NumberInputField = (
  props: NumberInputFieldProps
) => {
  const { className, size, ...rest } = props;
  return (
    <NumberInputPrimitive.Control className={numberInputVariants().control()}>
      <NumberInputPrimitive.Input
        className={numberInputVariants().input({
          className,
          size,
        })}
        {...rest}
      />
      <NumberInputPrimitive.IncrementTrigger
        className={numberInputVariants().trigger()}
      >
        <CaretUp />
      </NumberInputPrimitive.IncrementTrigger>
      <NumberInputPrimitive.DecrementTrigger
        className={numberInputVariants().trigger()}
      >
        <CaretDown />
      </NumberInputPrimitive.DecrementTrigger>
    </NumberInputPrimitive.Control>
  );
};
NumberInputField.displayName = "NumberInputField";

export { NumberInput, NumberInputLabel, NumberInputField };
