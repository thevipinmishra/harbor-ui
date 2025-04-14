import type { VariantProps } from "tailwind-variants";
import {
  composeRenderProps,
  ToggleButton as ToggleButtonPrimitive,
  ToggleButtonProps,
} from "react-aria-components";
import { buttonVariants } from "./Button";

type ToggleButtonPrimitiveProps = ToggleButtonProps &
  VariantProps<typeof buttonVariants>;

const ToggleButton = (props: ToggleButtonPrimitiveProps) => {
  const { className, size, variant, fullWidth, ...rest } = props;
  return (
    <ToggleButtonPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        buttonVariants({
          ...renderProps,
          size,
          variant,
          fullWidth,
          className,
        })
      )}
      {...rest}
    />
  );
};

export { ToggleButton };
