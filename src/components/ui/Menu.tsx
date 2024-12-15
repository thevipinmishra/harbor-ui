import { tv } from "@/lib/tv.config";
import {
  MenuCheckboxItemProps,
  MenuContentProps,
  MenuItemGroupProps,
  MenuItemProps,
  Menu as MenuPrimitive,
} from "@ark-ui/react/menu";
import { popoverVariants } from "./Popover";

const Menu = MenuPrimitive.Root;
const MenuTrigger = MenuPrimitive.Trigger;

const menuVariants = tv({
  slots: {
    content: [
      popoverVariants().content(),
      "flex flex-col gap-1 outline-none p-1",
    ],
    positioner: [""],
    separator: ["border-border -px-[inherit]"],
    item: [
      "flex w-full px-3 py-2 cursor-default text-sm font-medium text-foreground bg-background items-center justify-start gap-3 rounded-md",
      "data-[highlighted]:bg-secondary",
      "motion-safe:transition-colors",
    ],
  },
});

const MenuContent = (props: MenuContentProps) => {
  const { className, ...rest } = props;
  return (
    <MenuPrimitive.Positioner className={menuVariants().positioner()}>
      <MenuPrimitive.Content className={menuVariants().content()} {...rest} />
    </MenuPrimitive.Positioner>
  );
};

const MenuItem = (props: MenuItemProps) => {
  const { className, ...rest } = props;
  return <MenuPrimitive.Item className={menuVariants().item()} {...rest} />;
};

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
