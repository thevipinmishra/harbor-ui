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
  inputProps?: InputProps;
  size?: InputProps["size"];
}

const searchFieldVariants = tv({
  slots: {
    root: ["grid group gap-1.5"],
  },
});

const SearchField = (props: SearchFieldWithLabelProps) => {
  const { label, className, size, inputProps, ...rest } = props;
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
        <Input size={size} className='pr-8' {...inputProps} />
        <Button
          size="icon-md"
          variant="plain"
          className="absolute inset-y-px right-px h-auto rounded-l-none rounded-r-md flex group-empty:hidden"
        >
          <RiCloseLine />
        </Button>
      </Group>
    </SearchFieldPrimitive>
  );
};

export { SearchField };
