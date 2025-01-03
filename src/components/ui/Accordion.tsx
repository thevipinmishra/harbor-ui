"use client";

import * as React from "react";
import {
  AccordionItemContentProps,
  AccordionItemProps,
  AccordionItemTriggerProps,
  Accordion as AccordionPrimitive,
  AccordionRootProps,
} from "@ark-ui/react/accordion";
import { tv } from "@/lib/tv.config";
import { CaretDown, Plus } from "@phosphor-icons/react";

const accordionVariants = tv({
  slots: {
    root: "border border-border rounded-md divide-y divide-border",
    item: [
      "first:rounded-t-[inherit] relative last:rounded-b-[inherit]",
      "data-[focus]:ring-1 data-[focus]:ring-ring data-[focus]:z-[1] overflow-hidden",
    ],
    itemTrigger: [
      "font-medium text-left w-full flex items-center justify-between gap-4 cursor-default p-3 text-foreground",
      "outline-none",
    ],
    itemContent: [
      "px-3  data-[state=open]:pb-3 overflow-hidden text-sm",
      "overflow-hidden data-[state=open]:motion-safe:animate-slide-down data-[state=closed]:motion-safe:animate-slide-up",
    ],
    itemIndicator: [
      "[&_svg]:size-5 flex items-center text-muted-foreground data-[state=open]:rotate-45",
      "motion-safe:transition-transform",
    ],
  },
});

const Accordion = (props: AccordionRootProps) => {
  const { className, ...rest } = props;
  return (
    <AccordionPrimitive.Root className={accordionVariants().root()} {...rest} />
  );
};

const AccordionItem = (props: AccordionItemProps) => {
  const { className, ...rest } = props;
  return (
    <AccordionPrimitive.Item className={accordionVariants().item()} {...rest} />
  );
};

const AccordionItemTrigger = (props: AccordionItemTriggerProps) => {
  const { className, children, ...rest } = props;
  return (
    <AccordionPrimitive.ItemTrigger
      className={accordionVariants().itemTrigger()}
      {...rest}
    >
      {children}{" "}
      <AccordionPrimitive.ItemIndicator
        className={accordionVariants().itemIndicator()}
      >
        <Plus /> &#x200B;
      </AccordionPrimitive.ItemIndicator>
    </AccordionPrimitive.ItemTrigger>
  );
};

const AccordionItemContent = (props: AccordionItemContentProps) => {
  const { className, ...rest } = props;
  return (
    <AccordionPrimitive.ItemContent
      className={accordionVariants().itemContent()}
      {...rest}
    />
  );
};

const AccordionContext = AccordionPrimitive.Context;

export {
  Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionContext,
};
