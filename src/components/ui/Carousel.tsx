"use client";

import {
  type CarouselControlProps,
  type CarouselIndicatorGroupProps,
  type CarouselIndicatorProps,
  type CarouselItemGroupProps,
  type CarouselItemProps,
  type CarouselNextTriggerProps,
  type CarouselPrevTriggerProps,
  type CarouselRootProps,
  Carousel as Primitive,
} from "@ark-ui/react/carousel";

const Carousel = (props: CarouselRootProps) => {
  const { allowMouseDrag = true, ...rest } = props;
  return <Primitive.Root allowMouseDrag={allowMouseDrag} {...rest} />;
};

const CarouselControl = (props: CarouselControlProps) => {
  return <Primitive.Control {...props} />;
};

const CarouselPrevTrigger = (props: CarouselPrevTriggerProps) => {
  return <Primitive.PrevTrigger {...props} />;
};

const CarouselNextTrigger = (props: CarouselNextTriggerProps) => {
  return <Primitive.NextTrigger {...props} />;
};

const CarouselIndicatorGroup = (props: CarouselIndicatorGroupProps) => {
  return <Primitive.IndicatorGroup {...props} />;
};

const CarouselIndicator = (props: CarouselIndicatorProps) => {
  return <Primitive.Indicator {...props} />;
};

const CarouselItemGroup = (props: CarouselItemGroupProps) => {
  return <Primitive.ItemGroup {...props} />;
};

const CarouselItem = (props: CarouselItemProps) => {
  return <Primitive.Item {...props} />;
};

const CarouselContext = Primitive.Context;

export {
  Carousel,
  CarouselControl,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselIndicatorGroup,
  CarouselIndicator,
  CarouselItemGroup,
  CarouselItem,
  CarouselContext,
};
