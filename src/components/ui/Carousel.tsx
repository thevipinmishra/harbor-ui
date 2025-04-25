"use client";

import { cn, tv } from "@/lib/tv.config";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import * as React from "react";

interface CarouselProps extends React.HTMLProps<HTMLDivElement> {
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
  onEmblaApi?: (api: EmblaCarouselType | undefined) => void;
  gap?: React.CSSProperties["gap"];
}

const carouselVariants = tv({
  slots: {
    carousel: "overflow-hidden",
    carouselContainer: "flex touch-pan-y touch-pinch-zoom",
    slide: "min-w-0 flex-[0_0_100%] transform-[translate3d(0,0,0)]",
  },
});

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

const Carousel = (props: CarouselProps) => {
  const { className, onEmblaApi, gap, options, plugins, ...rest } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  React.useEffect(() => {
    if (onEmblaApi) {
      onEmblaApi(emblaApi);
    }
  }, [emblaApi, onEmblaApi]);

  return (
    <div className={cn(carouselVariants().carousel())} ref={emblaRef}>
      <div
        className={cn(
          carouselVariants().carouselContainer({
            className,
          })
        )}
        style={
          {
            "--slide-gap": typeof gap === "number" ? `${gap}px` : gap,
            marginLeft: "calc(var(--slide-gap) * -1)",
          } as React.CSSProperties
        }
        {...rest}
      />
    </div>
  );
};

const Slide = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        carouselVariants().slide({
          className,
        })
      )}
      style={{
        paddingLeft: "var(--slide-gap)",
      }}
      {...rest}
    />
  );
};

Carousel.Slide = Slide;
Carousel.displayName = "Carousel";

export { Carousel, carouselVariants };
export type { CarouselProps };
