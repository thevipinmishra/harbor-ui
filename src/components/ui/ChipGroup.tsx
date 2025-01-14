import { cn, tv } from "@/lib/tv.config";
import {
  ToggleGroup,
  type ToggleGroupItemProps,
  type ToggleGroupRootProps,
} from "@ark-ui/react/toggle-group";
import { chipVariants } from "./Chip";
import { Check } from "@phosphor-icons/react";

const chipGroupVariants = tv({
  slots: {
    root: ["flex flex-wrap gap-1"],
    item: [chipVariants()],
  },
});

type ChipGroupItemProps = ToggleGroupItemProps;

const ChipGroup = (props: ToggleGroupRootProps) => {
  const { className, ...rest } = props;
  return (
    <ToggleGroup.Root
      className={chipGroupVariants().root({
        className,
      })}
      {...rest}
    />
  );
};

const ChipGroupItem = (props: ChipGroupItemProps) => {
  const { className, children, value, ...rest } = props;
  return (
    <ToggleGroup.Item
      value={value}
      className={chipGroupVariants().item({
        className,
      })}
      {...rest}
    >
      <ToggleGroup.Context>
        {(context) =>
          context.value.includes(value) ? (
            <Check weight="bold" className={cn("shrink-0")} />
          ) : null
        }
      </ToggleGroup.Context>
      {children}
    </ToggleGroup.Item>
  );
};

const ChipGroupContext = ToggleGroup.Context;

export { ChipGroup, ChipGroupItem, ChipGroupContext };
