import { tv } from "@/lib/tv.config";
import {
  SegmentGroupItemProps,
  SegmentGroup as SegmentGroupPrimitive,
  SegmentGroupRootProps,
} from "@ark-ui/react/segment-group";

const segmentGroupVariants = tv({
    slots: {
        root: ['flex bg-muted rounded-md p-1 w-max'],
        item: ['inline-flex relative text-sm z-[1] py-1 px-3 font-medium whitespace-nowrap text-muted-foreground rounded-[inherit] items-center justify-center', 'data-[state=checked]:text-foreground motion-safe:transition-colors'],
        indicator: ['bg-background rounded-[inherit] h-[var(--height)] w-[var(--width)] left-[var(--left)] top-[var(--top)]'],
    }
})

const SegmentGroup = (props: SegmentGroupRootProps) => {
  const { children, className, ...rest } = props;
  return <SegmentGroupPrimitive.Root className={segmentGroupVariants().root({
    className
  })} {...rest}>
    {children}
    <SegmentGroupPrimitive.Indicator className={segmentGroupVariants().indicator()} />
  </SegmentGroupPrimitive.Root>;
};

const SegmentGroupItem = (props: SegmentGroupItemProps) => {
  const { children, className, ...rest } = props;
  return (
    <SegmentGroupPrimitive.Item className={segmentGroupVariants().item({
        className
      })} {...rest}>
      <SegmentGroupPrimitive.ItemText>
        {children}
      </SegmentGroupPrimitive.ItemText>
      <SegmentGroupPrimitive.ItemControl />
      <SegmentGroupPrimitive.ItemHiddenInput />
    </SegmentGroupPrimitive.Item>
  );
};

const SegmentGroupContext = SegmentGroupPrimitive.Context;

export { SegmentGroup, SegmentGroupItem, SegmentGroupContext };