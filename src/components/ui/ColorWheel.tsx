import { tv } from "@/lib/tv.config";
import {
  ColorWheel as Primitive,
  ColorWheelTrack,
  ColorThumb,
  ColorWheelProps as PrimitiveColorWheelProps,
} from "react-aria-components";


interface ColorWheelProps extends Omit<PrimitiveColorWheelProps, 'outerRadius' | 'innerRadius'> {
  outerRadius?: number;
  innerRadius?: number;
}

const colorWheelVariants = tv({
  slots: {
    thumb: ['size-5 rounded-full shadow-md shadow-primary/50 border-2 border-white']
  },
});


const ColorWheel = (props: ColorWheelProps) => {
  const { outerRadius = 100, innerRadius = 74, ...rest } = props;
  return (
    <Primitive outerRadius={outerRadius} innerRadius={innerRadius} {...rest}>
      <ColorWheelTrack />
      <ColorThumb className={colorWheelVariants().thumb()} />
    </Primitive>
  );
};

export { ColorWheel };
export type { ColorWheelProps };
