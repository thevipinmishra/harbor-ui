"use client";

import { tv } from "@/lib/tv.config";
import { RiCheckLine } from "@remixicon/react";
import {
  ListBox as LisBoxPrimitive,
  ListBoxItem as ListBoxItemPrimitive,
  ListBoxProps,
  ListBoxItemProps,
  composeRenderProps,
} from "react-aria-components";

const listboxVariants = tv({
  slots: {
    listbox: "w-full space-y-0.5",
    listboxItem: [
      "px-3 py-1.5 flex cursor-default gap-2 rounded-md items-center text-sm outline-0 selected:bg-muted focus:bg-muted  selected:text-foreground [&>svg]:size-4",
      "motion-safe:transition-colors",
    ],
  },
});

const ListBox = (props: ListBoxProps<object>) => {
  const { className, ...rest } = props;
  return (
    <LisBoxPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        listboxVariants().listbox({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

const ListBoxItem = (props: ListBoxItemProps) => {
  const { className, children, ...rest } = props;

  return (
    <ListBoxItemPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        listboxVariants().listboxItem({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      {({ isSelected }) => (
        <>
          {children}
          {isSelected && <RiCheckLine className="ml-auto" />}
        </>
      )}
    </ListBoxItemPrimitive>
  );
};

export { ListBox, ListBoxItem };
