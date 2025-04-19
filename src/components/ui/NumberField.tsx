"use client";

import { tv } from "@/lib/tv.config";
import {
  Button,
  composeRenderProps,
  Group,
  Input,
  NumberField as NumberFieldPrimitive,
  NumberFieldProps,
} from "react-aria-components";
import { Label } from "./Label";
import { baseInputStyles } from "@/utils/styles";
import React from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import { VariantProps } from "tailwind-variants";

interface NumberFieldPrimitiveProps
  extends Omit<NumberFieldProps, "size">,
    VariantProps<typeof baseInputStyles> {
  label?: string;
}

const numberFieldVariants = tv({
  slots: {
    root: ["grid gap-1"],
    group: [baseInputStyles(), "p-0 grid grid-cols-[1fr_auto] grid-rows-2"],
    input: ["row-span-2", "outline-0 h-full w-full py-1 px-2.5 border-r border-input"],
    trigger: [
      "outline-none col-start-2 col-end-3 w-7 flex justify-center items-center",
    ],
  },
});

const NumberField = (props: NumberFieldPrimitiveProps) => {
  const { className, label, size, ...rest } = props;
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
      <Group
        className={numberFieldVariants().group({
          size,
        })}
      >
        <Input className={numberFieldVariants().input()} />
        <Button
          slot="increment"
          className={numberFieldVariants().trigger({
            className: "row-start-1 row-end-2 ",
          })}
        >
          <RiArrowUpSLine className="size-4" />
        </Button>
        <Button
          slot="decrement"
          className={numberFieldVariants().trigger({
            className: " row-start-2 row-end-3  border-t border-input",
          })}
        >
          <RiArrowDownSLine className="size-4" />
        </Button>
      </Group>
    </NumberFieldPrimitive>
  );
};

export { NumberField };
