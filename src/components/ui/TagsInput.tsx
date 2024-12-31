"use client";

import { tv } from "@/lib/tv.config";
import {
  TagsInput as Primitive,
  TagsInputClearTriggerProps,
  TagsInputControlProps as PrimitiveControlProps,
  TagsInputLabelProps,
  TagsInputRootProps,
} from "@ark-ui/react/tags-input";

const tagsInputVariants = tv({
  slots: {
    root: ["flex flex-col gap-1"],
    control: ['border border-input p-1.5 rounded-md flex flex-wrap gap-1'],
    input: ['outline-none text-sm'],
  },
});

interface TagsInputControlProps extends PrimitiveControlProps {
    inputPlaceholder?: string;
}

const TagsInput = (props: TagsInputRootProps) => {
  const { className, ...rest } = props;
  return (
    <Primitive.Root
      className={tagsInputVariants().root({
        className,
      })}
      {...rest}
    />
  );
};

const TagsInputControl = (props: TagsInputControlProps) => {
    const { className, inputPlaceholder, ...rest } = props;
  return (
    <Primitive.Control  className={tagsInputVariants().control({
        className,
      })} {...rest}>
      <Primitive.Context>
        {(tagsInput) => (
          <>
            {tagsInput.value.map((value, index) => (
              <Primitive.Item key={index} index={index} value={value}>
                <Primitive.ItemPreview>
                  <Primitive.ItemText>{value}</Primitive.ItemText>
                  <Primitive.ItemDeleteTrigger>
                    Delete
                  </Primitive.ItemDeleteTrigger>
                </Primitive.ItemPreview>
                <Primitive.ItemInput />
              </Primitive.Item>
            ))}
          </>
        )}
      </Primitive.Context>
      <Primitive.Input placeholder={inputPlaceholder} className={tagsInputVariants().input()} />
    </Primitive.Control>
  );
};

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
