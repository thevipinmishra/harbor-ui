"use client";

import * as React from "react";
import {
  type TabContentProps,
  type TabListProps,
  Tabs as TabsPrimitive,
  type TabsRootProps,
  type TabTriggerProps,
} from "@ark-ui/react/tabs";
import { tv } from "@/lib/tv.config";

const tabVariants = tv({
  slots: {
    root: "flex flex-col gap-2",
    list: "w-full border-b-2 border-border",
    trigger:
      "inline-flex outline-hidden cursor-pointer items-center font-medium bg-background hover:bg-secondary rounded-t-md text-base gap-2 px-3.5 motion-safe:transition-colors py-2 disabled:pointer-events-none disabled:opacity-50",
    indicator: "h-[2px] bg-primary w-[var(--width)]",
  },
});

const Tabs = (props: TabsRootProps) => {
  const { className, ...rest } = props;
  return (
    <TabsPrimitive.Root
      className={tabVariants().root({
        className,
      })}
      {...rest}
    />
  );
};

const TabsList = (props: TabListProps) => {
  const { children, className, ...rest } = props;
  return (
    <TabsPrimitive.List className={tabVariants().list()} {...rest}>
      {children}
      <TabsPrimitive.Indicator className={tabVariants().indicator()} />
    </TabsPrimitive.List>
  );
};

const TabsTrigger = (props: TabTriggerProps) => {
  const { className, ...rest } = props;
  return <TabsPrimitive.Trigger className={tabVariants().trigger()} {...rest} />;
};

const TabsContent = (props: TabContentProps) => {
  return <TabsPrimitive.Content {...props} />;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
