"use client";

import { tv } from "@/lib/tv.config";
import {
  MenuProps,
  MenuTrigger as MenuTriggerPrimitive,
  Menu as MenuPrimitive,
  MenuItem as MenuItemPrimitive,
  MenuSection as MenuSectionPrimitive,
  MenuSectionProps,
  MenuItemProps,
  composeRenderProps,
  Popover,
} from "react-aria-components";
import React from "react";
import { popoverAnimation } from "../utils/popoverAnimation";

const MenuTrigger = MenuTriggerPrimitive;

const menuVariants = tv({
  slots: {
    content: [
      "bg-background border border-accent-subtle text-foreground shadow rounded-md min-w-16",
      popoverAnimation(),
      "flex flex-col gap-1 outline-hidden p-1",
    ],
    menu: ["space-y-0.5"],
    item: [
      "flex w-full cursor-pointer px-3 py-1.5 text-sm text-foreground bg-background items-center justify-start gap-3 rounded-md",
      "hover:bg-muted focus:bg-muted outline-0",
      "motion-safe:transition-colors",
      "data-disabled:opacity-50 data-disabled:pointer-events-none [&_svg]:size-5",
    ],
  },
});
const Menu = (props: MenuProps<object>) => {
  const { className, ...rest } = props;
  return (
    <Popover className={menuVariants().content()}>
      <MenuPrimitive
        className={composeRenderProps(className, (className, renderProps) =>
          menuVariants().menu({
            ...renderProps,
            className,
          })
        )}
        {...rest}
      />
    </Popover>
  );
};

const MenuItem = (props: MenuItemProps) => {
  const { className, ...rest } = props;
  return <MenuItemPrimitive className={menuVariants().item()} {...rest} />;
};

const MenuSection = (props: MenuSectionProps<object>) => {
  return <MenuSectionPrimitive {...props} />;
};

export { MenuTrigger, Menu, MenuSection, MenuItem, menuVariants };
