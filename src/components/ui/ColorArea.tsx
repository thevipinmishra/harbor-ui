"use client";

import { tv } from "@/lib/tv.config";
import {
  ColorArea as Primitive,
  ColorThumb,
  ColorAreaProps,
  composeRenderProps,
} from "react-aria-components";

const colorareaVariants = tv({
  slots: {
    area: ["size-52 shrink-0 rounded-md"],
    thumb: ['size-5 rounded-full shadow-md shadow-primary/50 border-2 border-white']
  },
});

const ColorArea = (props: ColorAreaProps) => {
  const { className, ...rest } = props;
  return (
    <Primitive
      className={composeRenderProps(className, (className, renderProps) =>
        colorareaVariants().area({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      <ColorThumb className={colorareaVariants().thumb()} />
    </Primitive>
  );
};

export { ColorArea };
