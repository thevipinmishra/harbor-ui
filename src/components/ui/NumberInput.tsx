import { tv } from "@/lib/tv.config";
import {
  NumberInputInputProps,
  NumberInputLabelProps,
  NumberInput as NumberInputPrimitive,
  NumberInputRootProps,
} from "@ark-ui/react/number-input";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { labelVariants } from "./Label";
import { fieldHeight } from "@/utils/styles";

const numberInputVariants = tv({
  slots: {
    root: ["flex flex-col gap-2"],
    control: [
      "border border-input grid grid-cols-[1fr_2rem] grid-rows-2 shadow-sm text-sm rounded data-[focus]:ring-1 data-[focus]:ring-ring data-[focus]:ring-offset-1 data-[focus]:ring-offset-background",
    ],
    input: [
      "row-span-2 rounded-l-[inherit] rounded-r-none outline-none px-2 py-1 border-r border-input tabular-nums",
    ],
    trigger: [
      "flex flex-col outline-none justify-center items-center shrink-0 data-[part=decrement-trigger]:rounded-br-[inherit] data-[part=decrement-trigger]:border-t data-[part=decrement-trigger]:border-input data-[part=increment-trigger]:rounded-tr-[inherit] disabled:opacity-50 disabled:cursor-not-allowed",
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
  }
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

const NumberInputField = (props: NumberInputInputProps) => {
  const { className, ...rest } = props;
  return (
    <NumberInputPrimitive.Control className={numberInputVariants().control()}>
      <NumberInputPrimitive.Input
        className={numberInputVariants().input({
          className,
          size: 'md'
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

export { NumberInput, NumberInputLabel, NumberInputField };
