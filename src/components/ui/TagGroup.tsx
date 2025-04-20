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
    root: ["grid gap-1.5"],
    list: ["flex flex-wrap gap-2"],
    tag: [
      "inline-flex px-3.5 py-2 h-9 cursor-default items-center text-ellipsis rounded-md border border-input hover:bg-muted motion-safe:transition-colors text-xs font-medium aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:border-primary",
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
