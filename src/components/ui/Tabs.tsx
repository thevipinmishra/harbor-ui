"use client";

import * as React from "react";
import {
  Tabs as TabsPrimitive,
  TabList as TabListPrimitive,
  Tab as TabPrimitive,
  TabPanel as TabPanelPrimitive,
  TabsProps,
  TabListProps,
  TabProps,
  TabPanelProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "@/lib/tv.config";

const tabVariants = tv({
  slots: {
    root: "flex flex-col gap-2",
    list: "w-full border-b-2 border-border",
    trigger: [
      "inline-flex relative text-sm outline-hidden cursor-pointer items-center font-medium bg-background rounded-t-md gap-2 px-3 motion-safe:transition-colors py-2 text-muted-foreground aria-selected:text-foreground disabled:pointer-events-none disabled:opacity-50 after:absolute after:-bottom-0.5 after:inset-x-0 after:h-0.5 aria-selected:after:bg-primary",
    ],
  },
});

const Tabs = (props: TabsProps) => {
  const { className, ...rest } = props;
  return (
    <TabsPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        tabVariants().root({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

const TabList = (props: TabListProps<object>) => {
  const { className, ...rest } = props;
  return <TabListPrimitive className={tabVariants().list()} {...rest} />;
};

const Tab = (props: TabProps) => {
  const { className, ...rest } = props;
  return <TabPrimitive className={tabVariants().trigger()} {...rest} />;
};

const TabPanel = (props: TabPanelProps) => {
  return <TabPanelPrimitive {...props} />;
};

export { Tabs, TabList, Tab, TabPanel };
