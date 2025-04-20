"use client";

import * as React from "react";
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading,
  DisclosureGroupProps,
  DisclosureProps,
  HeadingProps,
  DisclosurePanelProps,
} from "react-aria-components";
import { tv } from "@/lib/tv.config";
import { RiAddLine } from "@remixicon/react";

const accordionVariants = tv({
  slots: {
    root: " rounded-md group divide-y divide-border",
    item: [
      "relative bg-background text-foreground group-disabled:opacity-50 group-disabled:pointer-events-none",
    ],
    itemTrigger: [
      "font-medium disabled:opacity-50 disabled:pointer-events-none group cursor-pointer rounded-md text-left w-full text-sm flex items-center justify-between gap-4 p-3 text-foreground",
    ],
    itemContent: [
      "px-3 aria-hidden:hidden transition-[padding-bottom] pb-3 text-sm",
    ],
    itemIndicator: [
      "size-5 text-muted-foreground group-aria-expanded:rotate-45 transition-transform",
    ],
  },
});

const Accordion = (props: DisclosureGroupProps) => {
  const { className, ...rest } = props;
  return <DisclosureGroup className={accordionVariants().root()} {...rest} />;
};

const AccordionItem = (props: DisclosureProps) => {
  const { className, ...rest } = props;
  return <Disclosure className={accordionVariants().item()} {...rest} />;
};

const AccordionItemTrigger = (props: HeadingProps) => {
  const { className, children, ...rest } = props;
  return (
    <Heading  {...rest}>
      <Button className={accordionVariants().itemTrigger({
        className
      })} slot="trigger">
        {children} <RiAddLine className={accordionVariants().itemIndicator()} aria-hidden />
      </Button>
    </Heading>
  );
};

const AccordionItemContent = (props: DisclosurePanelProps) => {
  const { className, ...rest } = props;
  return (
    <DisclosurePanel className={accordionVariants().itemContent()} {...rest} />
  );
};

export { Accordion, AccordionItem, AccordionItemTrigger, AccordionItemContent };
