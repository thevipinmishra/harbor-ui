import type { VariantProps } from "tailwind-variants";
import {
  composeRenderProps,
  ToggleButton as ToggleButtonPrimitive,
  ToggleButtonProps,
} from "react-aria-components";
import { buttonVariants, staticClass } from "./Button";
import { cn } from "@/lib/tv.config";

type ToggleButtonPrimitiveProps = ToggleButtonProps &
  VariantProps<typeof buttonVariants>;

const ToggleButton = (props: ToggleButtonPrimitiveProps) => {
  const { className, size, variant, fullWidth, ...rest } = props;
  return (
    <ToggleButtonPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          buttonVariants({
            ...renderProps,
            size,
            variant,
            fullWidth,
            className,
          }),
          staticClass
        )
      )}
      {...rest}
    />
  );
};

export { ToggleButton };
