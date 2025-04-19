"use client";

import {
  composeRenderProps,
  Group,
  ProgressBar as ProgressBarPrimitive,
  ProgressBarProps,
} from "react-aria-components";
import { Label } from "./Label";
import { tv } from "@/lib/tv.config";

export const progressBarVariants = tv({
  slots: {
    root: ["group grid gap-1"],
    bar: ["rounded-md w-full bg-input h-2.5"],
    fill: [
      "rounded-l-[inherit] bg-primary h-full relative",
    ],
    valueText: ["text-sm text-muted-foreground font-medium"],
    group: ["flex items-center justify-between gap-4"],
  },
});

interface ProgressBarWithLabelProps extends ProgressBarProps {
  label?: string;
}

const ProgressBar = (props: ProgressBarWithLabelProps) => {
  const { className, label, ...rest } = props;
  return (
    <ProgressBarPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        progressBarVariants().root({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      {({ percentage, valueText }) => (
        <>
          <Group className={progressBarVariants().group()}>
            {label && <Label>{label}</Label>}
            <span className={progressBarVariants().valueText()}>
              {valueText}
            </span>
          </Group>
          <div className={progressBarVariants().bar()}>
            <div
              className={progressBarVariants().fill()}
              style={{ width: percentage + "%" }}
            />
          </div>
        </>
      )}
    </ProgressBarPrimitive>
  );
};

export { ProgressBar };
