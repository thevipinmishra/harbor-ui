import {
  composeRenderProps,
  Group,
  SearchField as SearchFieldPrimitive,
  SearchFieldProps,
} from "react-aria-components";
import { Label } from "./Label";
import { Input, InputProps } from "./Input";
import { Button } from "./Button";
import { RiCloseLine } from "@remixicon/react";
import { tv } from "@/lib/tv.config";

interface SearchFieldWithLabelProps extends SearchFieldProps {
  label?: string;
  size?: InputProps["size"];
}

const searchFieldVariants = tv({
  slots: {
    root: ["grid group gap-1"],
  },
});

const SearchField = (props: SearchFieldWithLabelProps) => {
  const { label, className, size, ...rest } = props;
  return (
    <SearchFieldPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        searchFieldVariants().root({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      {label && <Label>{label}</Label>}
      <Group className="relative">
        <Input size={size} />
        <Button
          size="icon-md"
          variant="plain"
          className="absolute top-1/2 right-1 -translate-y-1/2 flex group-empty:hidden"
        >
          <RiCloseLine />
        </Button>
      </Group>
    </SearchFieldPrimitive>
  );
};

export { SearchField };
