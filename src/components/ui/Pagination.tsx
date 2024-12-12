'use client';

import { cn, tv } from "@/lib/tv.config";
import {
  PaginationNextTriggerProps,
  PaginationPrevTriggerProps,
  Pagination as PaginationPrimitive,
  PaginationRootProps,
} from "@ark-ui/react/pagination";
import { CaretLeft, CaretRight, DotsThree } from "@phosphor-icons/react";
import { buttonVariants } from "./Button";

const paginationVariants = tv({
    slots: {
        root: 'flex gap-1 items-end',
        item: [buttonVariants({
            variant: 'outlined',
            size: 'sm'
        }), 'tabular-nums px-2.5 font-medium']
    }
})

const Pagination = (props: PaginationRootProps) => {
  return <PaginationPrimitive.Root className={paginationVariants().root()} {...props} />;
};

const PaginationPrevTrigger = (props: PaginationPrevTriggerProps) => {
  return <PaginationPrimitive.PrevTrigger className={cn(buttonVariants({
    variant: 'plain',
    size: 'sm'
  }), 'px-2.5')} {...props}>
    <CaretLeft />
  </PaginationPrimitive.PrevTrigger>;
};

const PaginationNextTrigger = (props: PaginationNextTriggerProps) => {
  return <PaginationPrimitive.NextTrigger className={cn(buttonVariants({
    variant: 'plain',
    size: 'sm'
  }), 'px-2.5')} {...props}>
    <CaretRight />
  </PaginationPrimitive.NextTrigger>;
};

const PaginationControls = () => {
  return (
    <PaginationPrimitive.Context>
      {(pagination) =>
        pagination.pages.map((page, index) =>
          page.type === "page" ? (
            <PaginationPrimitive.Item className={paginationVariants().item()}  key={index} {...page} >
              {page.value}
            </PaginationPrimitive.Item>
          ) : (
            <PaginationPrimitive.Ellipsis key={index} index={index}>
              <DotsThree />
            </PaginationPrimitive.Ellipsis>
          )
        )
      }
    </PaginationPrimitive.Context>
  );
};

export { Pagination, PaginationPrevTrigger, PaginationNextTrigger, PaginationControls };
