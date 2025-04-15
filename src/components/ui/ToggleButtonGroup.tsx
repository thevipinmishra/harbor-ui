"use client";

import { tv } from "@/lib/tv.config";
import {
  composeRenderProps,
  ToggleButtonGroup as ToggleButtonGroupPrimitive,
  ToggleButtonGroupProps,
} from "react-aria-components";

const toggleButtonGroupVariants = tv({
  base: ["group [&_.hbui-button]:not-last:rounded-r-none [&_.hbui-button]:not-last:border-r-0 [&_.hbui-button]:not-first:rounded-l-none"],
});

const ToggleButtonGroup = (props: ToggleButtonGroupProps) => {
  const { className, ...rest } = props;
  return (
    <ToggleButtonGroupPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        toggleButtonGroupVariants({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

export { ToggleButtonGroup };
