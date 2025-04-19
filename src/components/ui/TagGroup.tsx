import { tv } from "@/lib/tv.config";
import {
  composeRenderProps,
  TagGroup as TagGroupPrimitive,
  TagGroupProps,
  TagList as TagListPrimitive,
  TagListProps,
  Tag as TagPrimitive,
  TagProps,
} from "react-aria-components";

const tagGroupVariants = tv({
  slots: {
    root: ["grid gap-1"],
    list: ["flex flex-wrap gap-1"],
    tag: [
      "inline-flex px-3 py-1 rounded-md border border-input hover:bg-muted motion-safe:transition-colors text-xs font-medium cursor-pointer aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:border-primary",
    ],
  },
});

const TagGroup = (props: TagGroupProps) => {
  const { className, ...rest } = props;
  return (
    <TagGroupPrimitive
      className={tagGroupVariants().root({
        className,
      })}
      {...rest}
    />
  );
};

const TagList = (props: TagListProps<object>) => {
  const { className, ...rest } = props;
  return (
    <TagListPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        tagGroupVariants().list({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

const Tag = (props: TagProps) => {
  const { className, ...rest } = props;
  return (
    <TagPrimitive
      className={composeRenderProps(className, (className, renderProps) =>
        tagGroupVariants().tag({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    />
  );
};

export { TagGroup, TagList, Tag };
