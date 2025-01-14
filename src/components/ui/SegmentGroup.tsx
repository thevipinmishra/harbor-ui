import { tv } from "@/lib/tv.config";
import {
	type SegmentGroupItemProps,
	SegmentGroup as SegmentGroupPrimitive,
	type SegmentGroupRootProps,
} from "@ark-ui/react/segment-group";

const segmentGroupVariants = tv({
	slots: {
		root: ["flex bg-muted rounded-md p-1 w-max"],
		item: [
			"inline-flex relative text-sm z-[1] py-1.5 px-3 font-medium whitespace-nowrap text-muted-foreground rounded-[inherit] items-center justify-center",
			"data-[state=checked]:text-foreground motion-safe:transition-colors",
		],
		itemText: ["inline-flex gap-2 justify-center items-center"],
		indicator: [
			"bg-background rounded-[inherit] h-[var(--height)] w-[var(--width)] left-[var(--left)] top-[var(--top)]",
		],
	},
});

const SegmentGroup = (props: SegmentGroupRootProps) => {
	const { children, className, ...rest } = props;
	return (
		<SegmentGroupPrimitive.Root
			className={segmentGroupVariants().root({
				className,
			})}
			{...rest}
		>
			{children}
			<SegmentGroupPrimitive.Indicator
				className={segmentGroupVariants().indicator()}
			/>
		</SegmentGroupPrimitive.Root>
	);
};

const SegmentGroupItem = (props: SegmentGroupItemProps) => {
	const { children, className, ...rest } = props;
	return (
		<SegmentGroupPrimitive.Item
			className={segmentGroupVariants().item({
				className,
			})}
			{...rest}
		>
			<SegmentGroupPrimitive.ItemText
				className={segmentGroupVariants().itemText()}
			>
				{children}
			</SegmentGroupPrimitive.ItemText>
			<SegmentGroupPrimitive.ItemControl />
			<SegmentGroupPrimitive.ItemHiddenInput />
		</SegmentGroupPrimitive.Item>
	);
};

const SegmentGroupContext = SegmentGroupPrimitive.Context;

export { SegmentGroup, SegmentGroupItem, SegmentGroupContext };
