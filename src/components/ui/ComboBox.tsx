import {
  ComboBox as ComboBoxPrimitive,
  ComboBoxProps,
  composeRenderProps,
  Group,
} from "react-aria-components";
import { Input, InputProps } from "./Input";
import { Button } from "./Button";
import { RiExpandUpDownLine } from "@remixicon/react";
import { SelectContent } from "./Select";
import { ListBoxItem } from "./ListBox";
import { cn, tv } from "@/lib/tv.config";
import { baseInputStyles } from "@/utils/styles";

const comboboxVariants = tv({
  slots: {
    root: "grid gap-1",
  },
});

const ComboBox = (props: ComboBoxProps<object>) => {
  const { className, ...rest } = props;
  return (
    <ComboBoxPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        comboboxVariants().root({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

const ComboBoxTrigger = (props: InputProps) => {
  const { size, ...rest } = props;
  return (
    <Group className={cn("flex items-center pe-1", baseInputStyles())}>
      <Input
        size={size}
        focusRing={false}
        className={"border-0 shadow-none rounded-r-none"}
        {...rest}
      />
      <Button size="icon-md" variant="plain">
        <RiExpandUpDownLine />
      </Button>
    </Group>
  );
};

const ComboBoxContent = SelectContent;
const ComboBoxItem = ListBoxItem;

export { ComboBox, ComboBoxTrigger, ComboBoxContent, ComboBoxItem };
