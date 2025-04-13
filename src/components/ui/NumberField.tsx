"use client";

import { tv } from "@/lib/tv.config";
import {
    Button,
  composeRenderProps,
  Group,
  NumberField as NumberFieldPrimitive,
  NumberFieldProps,
} from "react-aria-components";
import { Label } from "./Label";
import { baseInputStyles, FieldHeight } from "@/utils/styles";
import React from "react";
import { Input } from "./Input";
import {  RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";

interface NumberFieldPrimitiveProps extends Omit<NumberFieldProps, "size"> {
  label?: string;
  size?: FieldHeight;
}

const numberFieldVariants = tv({
  slots: {
    root: ["grid gap-1"],
    group: [baseInputStyles(),"grid grid-cols-[1fr_auto] grid-rows-2"],
    input: [
      "row-span-2", "border-y-0 border-l-0 rounded-r-none shadow-none"
    ],
    trigger: ['outline-none col-start-2 col-end-3 w-7 flex justify-center items-center'],
  },
});

const NumberField = (props: NumberFieldPrimitiveProps) => {
  const { className, label, size = 'md', ...rest } = props;
  return (
    <NumberFieldPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        numberFieldVariants().root({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      {label && <Label>{label}</Label>}
      <Group className={numberFieldVariants().group()}>
        <Input size={size} className={numberFieldVariants().input()} />
        <Button
          slot="increment"
          className={numberFieldVariants().trigger({
            className: 'row-start-1 row-end-2 '
          })}
        >
          <RiArrowUpSLine className="size-4" />
        </Button>
        <Button
          slot="decrement"
          className={numberFieldVariants().trigger({
            className: ' row-start-2 row-end-3  border-t border-accent-subtle'
          })}
        >
          <RiArrowDownSLine className="size-4" />
        </Button>

       
      </Group>
    </NumberFieldPrimitive>
  );
};

export { NumberField };
