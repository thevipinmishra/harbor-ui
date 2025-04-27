import { tv } from "@/lib/tv.config";
import { RiCheckLine } from "@remixicon/react";
import {
  ColorSwatch as ColorSwatchPrimitive,
  ColorSwatchPicker as ColorSwatchPickerPrimitive,
  ColorSwatchPickerItem as ColorSwatchPickerItemPrimitive,
  ColorSwatchProps,
  composeRenderProps,
  ColorSwatchPickerProps,
  ColorSwatchPickerItemProps,
} from "react-aria-components";

const colorSwatchVariants = tv({
  slots: {
    swatch: ["size-10 rounded-md"],
    picker: ["flex flex-wrap gap-3"],
    pickerItem: [
        "relative",
      "focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md focus-visible:ring-ring",
    ],
  },
});

const ColorSwatch = (props: ColorSwatchProps) => {
  const { className, ...rest } = props;
  return (
    <ColorSwatchPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        colorSwatchVariants().swatch({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

const ColorSwatchPicker = (props: ColorSwatchPickerProps) => {
  const { className, ...rest } = props;
  return (
    <ColorSwatchPickerPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        colorSwatchVariants().picker({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

const ColorSwatchPickerItem = (props: ColorSwatchPickerItemProps) => {
  const { className, children, ...rest } = props;
  return (
    <ColorSwatchPickerItemPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        colorSwatchVariants().pickerItem({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}
          {values.isSelected && <RiCheckLine className="absolute top-1/2 size-5 text-white left-1/2 -translate-y-1/2 -translate-x-1/2" />}
        </>
      )}
    </ColorSwatchPickerItemPrimitive>
  );
};

export { ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem };
