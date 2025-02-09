"use client";

import { cn, tv } from "@/lib/tv.config";
import {
  type PaginationNextTriggerProps,
  type PaginationPrevTriggerProps,
  Pagination as PaginationPrimitive,
  type PaginationRootProps,
} from "@ark-ui/react/pagination";
import { CaretLeft, CaretRight, DotsThree } from "@phosphor-icons/react";
import { buttonVariants } from "./Button";
import { inputVariants } from "./Input";

const paginationVariants = tv({
  slots: {
    root: "flex gap-1 items-end",
  },
});

const Pagination = (props: PaginationRootProps) => {
  return (
    <PaginationPrimitive.Root
      className={paginationVariants().root()}
      {...props}
    />
  );
};
Pagination.displayName = "Pagination";

const PaginationPrevTrigger = (props: PaginationPrevTriggerProps) => {
  return (
    <PaginationPrimitive.PrevTrigger
      className={cn(
        buttonVariants({
          variant: "plain",
          size: "sm",
        }),
        "px-2.5"
      )}
      {...props}
    >
      <CaretLeft />
    </PaginationPrimitive.PrevTrigger>
  );
};

const PaginationNextTrigger = (props: PaginationNextTriggerProps) => {
  return (
    <PaginationPrimitive.NextTrigger
      className={cn(
        buttonVariants({
          variant: "plain",
          size: "sm",
        }),
        "px-2.5"
      )}
      {...props}
    >
      <CaretRight />
    </PaginationPrimitive.NextTrigger>
  );
};

const PaginationControls = () => {
  return (
    <PaginationPrimitive.Context>
      {(pagination) => (
        <>
          {pagination.pages.map((page, index) =>
            page.type === "page" ? (
              <PaginationPrimitive.Item
                className={buttonVariants({
                  size: "sm",
                  variant: pagination.page === page.value ? "filled" : "outlined",
                })}
                key={index}
                {...page}
              >
                {page.value}
              </PaginationPrimitive.Item>
            ) : (
              <PaginationPrimitive.Ellipsis
                key={index}
                index={index}
                aria-label="More pages"
              >
                <DotsThree />
              </PaginationPrimitive.Ellipsis>
            )
          )}
        </>
      )}
    </PaginationPrimitive.Context>
  );
};
PaginationControls.displayName = "PaginationControls";

export {
  Pagination,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationControls,
};
