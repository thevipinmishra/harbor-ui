"use client";

import * as React from "react";
import {
	Dialog as DialogPrimitive,
	type DialogContentProps as DialogPrimitiveContentProps,
	type DialogTitleProps,
} from "@ark-ui/react/dialog";
import { tv } from "@/lib/tv.config";
import { Portal } from "@ark-ui/react";
import type { VariantProps } from "tailwind-variants";

interface DialogContentProps
	extends DialogPrimitiveContentProps,
		VariantProps<typeof dialogVariants> {}

const dialogVariants = tv({
	slots: {
		backdrop: [
			"fixed inset-0 bg-black/80 z-40",
			"motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in",
			"motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out",
		],
		positioner: [
			"fixed inset-0 flex justify-center items-center p-4 lg:p-10 z-50",
		],
		content: [
			"bg-background shadow-md grid gap-2 p-4 lg:p-5 rounded-lg w-full",
			"motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:zoom-in-90 motion-safe:data-[state=open]:fade-in motion-safe:data-[state=open]:slide-in-from-bottom-6 ",
			"motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out motion-safe:data-[state=closed]:slide-out-to-bottom-1",
		],
		title: "font-semibold text-lg text-foreground",
	},
	variants: {
		size: {
			sm: {
				content: ["max-w-sm"],
			},
		},
	},
	defaultVariants: {
		size: "sm",
	},
});

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	DialogContentProps
>((props, ref) => {
	const { className, size, ...rest } = props;
	return (
		<Portal>
			<DialogPrimitive.Backdrop className={dialogVariants().backdrop()} />
			<DialogPrimitive.Positioner className={dialogVariants().positioner()}>
				<DialogPrimitive.Content
					className={dialogVariants().content({
						size,
						className,
					})}
					{...rest}
					ref={ref}
				/>
			</DialogPrimitive.Positioner>
		</Portal>
	);
});

DialogContent.displayName = "DialogContent";

const DialogTitle = (props: DialogTitleProps) => {
	const { className, ...rest } = props;
	return (
		<DialogPrimitive.Title
			className={dialogVariants().title({
				className,
			})}
			{...rest}
		/>
	);
};

DialogTitle.displayName = "DialogTitle";

const DialogCloseTrigger = DialogPrimitive.CloseTrigger;
const DialogContext = DialogPrimitive.Context;

export {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogCloseTrigger,
	DialogContext,
};
