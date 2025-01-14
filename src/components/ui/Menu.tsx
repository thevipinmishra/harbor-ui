import { tv } from "@/lib/tv.config";
import {
  type MenuCheckboxItemProps,
  type MenuContentProps,
  type MenuItemGroupProps,
  type MenuItemProps,
  Menu as MenuPrimitive,
} from "@ark-ui/react/menu";
import { popoverVariants } from "./Popover";
import React from "react";

const Menu = MenuPrimitive.Root;
const MenuTrigger = MenuPrimitive.Trigger;

const menuVariants = tv({
  slots: {
    content: [popoverVariants().content(), "flex flex-col gap-1 outline-none p-1"],
    positioner: [""],
    separator: ["border-border -px-[inherit]"],
    item: [
      "flex w-full px-3 py-1.5 cursor-default text-sm text-foreground bg-background items-center justify-start gap-3 rounded-md",
      "data-[highlighted]:bg-secondary",
      "motion-safe:transition-colors",
    ],
  },
});

const MenuContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Content>,
  MenuContentProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <MenuPrimitive.Positioner className={menuVariants().positioner()}>
      <MenuPrimitive.Content ref={ref} className={menuVariants().content()} {...rest} />
    </MenuPrimitive.Positioner>
  );
});
MenuContent.displayName = "MenuContent";

const MenuItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Item>,
  MenuItemProps
>((props, ref) => {
  const { className, ...rest } = props;
  return <MenuPrimitive.Item ref={ref} className={menuVariants().item()} {...rest} />;
});
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
};
