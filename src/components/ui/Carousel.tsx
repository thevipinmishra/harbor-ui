"use client";

import { cn, tv } from "@/lib/tv.config";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import React from "react";

interface CarouselProps extends React.HTMLProps<HTMLDivElement> {
  onEmblaApi?: (api: EmblaCarouselType | undefined) => void;
}

const carouselVariants = tv({
  slots: {
    carousel: "relative overflow-hidden",
    carouselContainer: "flex",
    slide: "min-w-0 flex-[0_0_100%]",
  },
});

const Carousel = (props: CarouselProps) => {
  const { className, onEmblaApi, ...rest } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel();

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
      {...rest}
    />
  );
};

Carousel.Slide = Slide;
Carousel.displayName = "Carousel";

export { Carousel, carouselVariants };
export type { CarouselProps };
