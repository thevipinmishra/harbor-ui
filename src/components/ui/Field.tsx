"use client";

import { cn } from "@/lib/tv.config";
import { Field as Primitive, type FieldRootProps } from "@ark-ui/react/field";

const Field = (props: FieldRootProps) => {
	const { className, ...rest } = props;
	return (
		<Primitive.Root
			className={cn("flex flex-col w-full gap-1", className)}
			{...rest}
		/>
	);
};

export { Field };
