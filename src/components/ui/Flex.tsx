import * as React from "react";
import { ark, type HTMLArkProps } from "@ark-ui/react";
import { tv } from "@/lib/tv.config";

const flexVariants = tv({
	base: ["flex"],
	variants: {
		direction: {
			row: "flex-row",
			col: "flex-col",
			"row-reverse": "flex-row-reverse",
			"col-reverse": "flex-col-reverse",
		},
		wrap: {
			wrap: "flex-wrap",
			nowrap: "flex-nowrap",
		},
		justify: {
			start: "justify-start",
			end: "justify-end",
			center: "justify-center",
			between: "justify-between",
			around: "justify-around",
			evenly: "justify-evenly",
		},
		align: {
			start: "items-start",
			end: "items-end",
			center: "items-center",
			baseline: "items-baseline",
			stretch: "items-stretch",
		},
		inline: {
			true: "inline-flex",
		},
	},
	defaultVariants: {
		inline: false,
	},
});

const Flex = ({ className, ...props }: HTMLArkProps<"div">) => {
	return (
		<ark.div
			className={flexVariants({
				className,
			})}
			{...props}
		/>
	);
};

export { Flex };
