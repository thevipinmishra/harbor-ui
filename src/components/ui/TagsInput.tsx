"use client";

import { tv } from "@/lib/tv.config";
import * as React from "react";
import {
  TagsInput as Primitive,
  type TagsInputClearTriggerProps,
  type TagsInputControlProps as PrimitiveControlProps,
  type TagsInputLabelProps,
  type TagsInputRootProps,
} from "@ark-ui/react/tags-input";

const tagsInputVariants = tv({
  slots: {
    root: ["flex flex-col gap-1"],
    control: ["border border-input p-1.5 rounded-md flex flex-wrap gap-1"],
    input: ["outline-hidden text-sm"],
  },
});

interface TagsInputControlProps extends PrimitiveControlProps {
  inputPlaceholder?: string;
}

const TagsInput = React.forwardRef<
  React.ElementRef<typeof Primitive.Root>,
  TagsInputRootProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <Primitive.Root
      ref={ref}
      className={tagsInputVariants().root({
        className,
      })}
      {...rest}
    />
  );
});

TagsInput.displayName = "TagsInput";

const TagsInputControl = React.forwardRef<
  React.ElementRef<typeof Primitive.Control>,
  TagsInputControlProps
>((props, ref) => {
  const { className, inputPlaceholder, ...rest } = props;
  return (
    <Primitive.Control
      ref={ref}
      className={tagsInputVariants().control({
        className,
      })}
      {...rest}
    >
      <Primitive.Context>
        {(tagsInput) => (
          <>
            {tagsInput.value.map((value, index) => (
              <Primitive.Item key={index} index={index} value={value}>
                <Primitive.ItemPreview>
                  <Primitive.ItemText>{value}</Primitive.ItemText>
                  <Primitive.ItemDeleteTrigger>Delete</Primitive.ItemDeleteTrigger>
                </Primitive.ItemPreview>
                <Primitive.ItemInput />
              </Primitive.Item>
            ))}
          </>
        )}
      </Primitive.Context>
      <Primitive.Input
        placeholder={inputPlaceholder}
        className={tagsInputVariants().input()}
      />
    </Primitive.Control>
  );
});

TagsInputControl.displayName = "TagsInputControl";

const TagsInputLabel = (props: TagsInputLabelProps) => {
  return <Primitive.Label {...props} />;
};

const TagsInputClearTrigger = (props: TagsInputClearTriggerProps) => {
  return <Primitive.ClearTrigger {...props} />;
};

const TagsInputContext = Primitive.Context;

export {
  TagsInput,
  TagsInputControl,
  TagsInputLabel,
  TagsInputClearTrigger,
  TagsInputContext,
};
