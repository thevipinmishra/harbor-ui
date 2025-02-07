"use client";

import { tv } from "@/lib/tv.config";
import {
  type MenuCheckboxItemProps,
  type MenuContentProps,
  type MenuItemGroupProps,
  type MenuItemProps,
  Menu as MenuPrimitive,
  type MenuTriggerItemProps,
} from "@ark-ui/react/menu";
import { popoverVariants } from "./Popover";
import React from "react";
import { Portal } from "@ark-ui/react";

const Menu = MenuPrimitive.Root;
const MenuTrigger = MenuPrimitive.Trigger;
const MenuContextTrigger = MenuPrimitive.ContextTrigger;

const menuVariants = tv({
  slots: {
    content: [
      popoverVariants().content(),
      "flex flex-col gap-1 outline-none p-1",
    ],
    positioner: [""],
    separator: ["border-border -px-[inherit]"],
    item: [
      "flex w-full px-3 py-1.5 cursor-default text-sm text-foreground bg-background items-center justify-start gap-3 rounded-md",
      "data-[highlighted]:bg-secondary",
      "motion-safe:transition-colors",
      "data-[disabled]:opacity-50 data-[disabled]:pointer-events-none",
    ],
  },
});

const MenuContent = (props: MenuContentProps) => {
  const { className, ...rest } = props;
  return (
    <MenuPrimitive.Positioner className={menuVariants().positioner()}>
      <MenuPrimitive.Content
        className={menuVariants().content()}
        {...rest}
      />
    </MenuPrimitive.Positioner>
  );
};
MenuContent.displayName = "MenuContent";

const MenuItem = (props: MenuItemProps) => {
  const { className, ...rest } = props;
  return (
    <MenuPrimitive.Item className={menuVariants().item()} {...rest} />
  );
};
MenuItem.displayName = "MenuItem";

const MenuItemGroup = (props: MenuItemGroupProps) => {
  return <MenuPrimitive.ItemGroup {...props} />;
};

const MenuItemGroupLabel = (props: MenuItemGroupProps) => {
  return <MenuPrimitive.ItemGroupLabel {...props} />;
};

const MenuSeparator = (props: MenuItemGroupProps) => {
  const { className, ...rest } = props;
  return (
    <MenuPrimitive.Separator
      className={menuVariants().positioner({
        className,
      })}
      {...rest}
    />
  );
};

const MenuCheckboxItem = (props: MenuCheckboxItemProps) => {
  return <MenuPrimitive.CheckboxItem {...props} />;
};
const MenuSubTrigger = (props: MenuTriggerItemProps) => {
  const { className, ...rest } = props;
  return (
    <MenuPrimitive.TriggerItem className={menuVariants().item()} {...rest} />
  );
};

const MenuSubContent = (props: MenuContentProps) => {
  const { className, ...rest } = props;
  return (
    <Portal>
      <MenuContent {...rest} />
    </Portal>
  );
};

const MenuContext = MenuPrimitive.Context;

export {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuSeparator,
  MenuCheckboxItem,
  MenuContext,
  MenuContextTrigger,
  MenuSubTrigger,
  MenuSubContent,
};
