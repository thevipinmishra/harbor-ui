"use client";

import {
  Group,
  Meter as MeterPrimitive,
  MeterProps,
} from "react-aria-components";
import { Label } from "./Label";
import { tv } from "@/lib/tv.config";

interface MeterPropsWithLabel extends MeterProps {
  label?: string;
}

 const meterVariants = tv({
  slots: {
    bar: ["rounded-md w-full border border-accent h-3"],
    fill: ["rounded-l-[inherit] bg-accent h-full"],
    valueText: ["text-sm text-muted-foreground font-medium"],
    group: ["flex items-center justify-between gap-4 mb-1"],
  },
});

const Meter = (props: MeterPropsWithLabel) => {
  const { label, ...rest } = props;
  return (
    <MeterPrimitive {...rest}>
      {({ percentage, valueText }) => (
        <>
          <Group className={meterVariants().group()}>
            {label && <Label>{label}</Label>}
            <span className={meterVariants().valueText()}>{valueText}</span>
          </Group>
          <div className={meterVariants().bar()}>
            <div
              className={meterVariants().fill()}
              style={{ width: percentage + "%" }}
            />
          </div>
        </>
      )}
    </MeterPrimitive>
  );
};

export { Meter };
