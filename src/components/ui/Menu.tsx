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
  SubmenuTrigger,
  PopoverProps
} from "react-aria-components";
import React from "react";
import { popoverAnimation } from "../utils/popoverAnimation";

interface MenuWithPopoverProps extends MenuProps<object> {
    popoverProps?: PopoverProps;
}

const MenuTrigger = MenuTriggerPrimitive;

 const menuVariants = tv({
  slots: {
    content: [
      "bg-background border border-border text-foreground shadow-xs rounded-md min-w-20 overflow-y-auto",
      popoverAnimation(),
      "flex flex-col gap-1 outline-hidden p-1",
    ],
    menu: ["space-y-0.5"],
    item: [
      "flex w-full cursor-default px-3 py-1.25 text-sm text-foreground bg-background items-center justify-start gap-3 rounded-md",
      "hover:bg-muted focus:bg-muted outline-0",
      "motion-safe:transition-colors",
      "data-disabled:opacity-50 data-disabled:pointer-events-none [&_svg]:size-4",
    ],
  },
});



const Menu = (props: MenuWithPopoverProps) => {
  const { className, popoverProps, ...rest } = props;
  return (
    <Popover className={menuVariants().content()} {...popoverProps}>
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
  return (
    <MenuItemPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        menuVariants().item({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

const MenuSection = (props: MenuSectionProps<object>) => {
  return <MenuSectionPrimitive {...props} />;
};

export { MenuTrigger, Menu, MenuSection, MenuItem, SubmenuTrigger, menuVariants };
