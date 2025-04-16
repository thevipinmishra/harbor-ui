import {
  ComboBox as ComboBoxPrimitive,
  ComboBoxProps,
  composeRenderProps,
  Group,
  Input,
  InputProps,
} from "react-aria-components";
import { Button } from "./Button";
import { RiExpandUpDownLine } from "@remixicon/react";
import { SelectContent } from "./Select";
import { ListBoxItem } from "./ListBox";
import { cn, tv } from "@/lib/tv.config";
import { baseInputStyles } from "@/utils/styles";
import { VariantProps } from "tailwind-variants";

interface ComboBoxInputProps extends VariantProps<typeof baseInputStyles>, Omit<InputProps, 'size'> {}

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

const ComboBoxTrigger = (props: ComboBoxInputProps) => {
  const { size, ...rest } = props;
  return (
    <Group
      className={cn(
        baseInputStyles({
          size,
        }),
        "flex items-center p-0"
      )}
    >
      <Input className='h-full w-full px-2.5 py-1 outline-0' {...rest} />
      <Button size="icon-md" variant="plain">
        <RiExpandUpDownLine />
      </Button>
    </Group>
  );
};

const ComboBoxContent = SelectContent;
const ComboBoxItem = ListBoxItem;

export { ComboBox, ComboBoxTrigger, ComboBoxContent, ComboBoxItem };
