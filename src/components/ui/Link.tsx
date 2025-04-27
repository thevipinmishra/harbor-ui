import { tv } from "@/lib/tv.config";
import {
  composeRenderProps,
  LinkProps,
  Link as Primitive,
} from "react-aria-components";

const linkVariants = tv({
  base: [""],
});

const Link = (props: LinkProps) => {
  const { className, ...rest } = props;
  return (
    <Primitive
      className={composeRenderProps(className, (className, renderProps) =>
        linkVariants({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

export { Link };