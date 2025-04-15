import {
  Autocomplete as AutocompletePrimitive,
  composeRenderProps,
  Menu,
  MenuProps,
} from "react-aria-components";
import { menuVariants, MenuItem } from "./Menu";

const Autocomplete = AutocompletePrimitive;

const AutocompleteContent = (props: MenuProps<object>) => {
  const { className, ...rest } = props;
  return (
    <Menu
      className={composeRenderProps(className, (className, renderProps) =>
        menuVariants().menu({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

export {Autocomplete, AutocompleteContent, MenuItem as AutocompleteItem};
