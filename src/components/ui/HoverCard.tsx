"use client";

import * as React from "react";
import {
	HoverCard as HoverCardPrimitive,
	type HoverCardContentProps,
} from "@ark-ui/react/hover-card";
import { popoverVariants } from "./Popover";

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
	React.ElementRef<typeof HoverCardPrimitive.Content>,
	HoverCardContentProps
>((props, ref) => {
	const { className, ...rest } = props;
	return (
		<HoverCardPrimitive.Positioner>
			<HoverCardPrimitive.Content
				ref={ref}
				className={popoverVariants().content({
					className,
				})}
				{...rest}
			/>
		</HoverCardPrimitive.Positioner>
	);
});
HoverCardContent.displayName = "HoverCardContent";

export { HoverCard, HoverCardTrigger, HoverCardContent };
