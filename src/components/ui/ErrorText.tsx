"use client";

import { tv } from "@/lib/tv.config";
import { type FieldErrorTextProps, Field } from "@ark-ui/react";
import * as React from "react";

const errorTextVariants = tv({
	base: ["text-xs font-medium text-destructive"],
});

const ErrorText = React.forwardRef<
	React.ElementRef<typeof Field.ErrorText>,
	FieldErrorTextProps
>((props, ref) => {
	const { className, ...rest } = props;
	return (
		<Field.ErrorText
			ref={ref}
			className={errorTextVariants({
				className,
			})}
			{...rest}
		/>
	);
});

ErrorText.displayName = "ErrorText";

export { ErrorText };
