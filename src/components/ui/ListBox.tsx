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
import { accentFocusRingVisible } from "../utils/focusRing";

const listboxVariants = tv({
  slots: {
    listbox: "w-full space-y-0.5",
    listboxItem: [
      "px-3 py-1.5 flex cursor-pointer gap-2 rounded-md items-center text-sm hover:bg-muted selected:bg-muted selected:text-muted-foreground-contrast [&>svg]:size-4",
      "motion-safe:transition-colors",
      accentFocusRingVisible,
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
