import type * as React from "react";
import { ScrollArea as Primitive } from "@base-ui-components/react/scroll-area";
import { tv } from "@/lib/tv.config";

const scrollAreaVariants = tv({
	slots: {
		root: "h-full w-full relative",
		viewport: "h-full overscroll-contain",
		scrollbar: "flex w-1 m-1 justify-center rounded group",
		thumb: "w-full bg-border rounded",
	},
});

const ScrollArea = (
	props: React.ComponentPropsWithoutRef<typeof Primitive.Root>,
) => {
	const { children, className, ...rest } = props;
	return (
		<Primitive.Root
			className={scrollAreaVariants().root({
				className: className as string,
			})}
			{...rest}
		>
			<Primitive.Viewport className={scrollAreaVariants().viewport()}>
				{children}
			</Primitive.Viewport>
			<Primitive.Scrollbar className={scrollAreaVariants().scrollbar()}>
				<Primitive.Thumb className={scrollAreaVariants().thumb()} />
			</Primitive.Scrollbar>
		</Primitive.Root>
	);
};

export { ScrollArea };
