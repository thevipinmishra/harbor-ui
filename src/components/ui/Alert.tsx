import { tv } from "@/lib/tv.config";
import type * as React from "react";
import type { VariantProps } from "tailwind-variants";
import { Info } from "@phosphor-icons/react";

interface AlertProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof alertVariants> {
	variant?: "destructive" | "default";
	icon?: React.ReactNode;
	title: string;
	description?: string;
}

const alertVariants = tv({
	slots: {
		root: [
			"grid grid-cols-[minmax(24px,max-content)_1fr] items-center gap-x-2 gap-y-1 border p-3 rounded-md",
		],
		description: ["text-sm col-start-2"],
		title: ["font-semibold col-start-2 text-base -tracking-wide "],
		iconSlot: ["text-lg flex justify-center items-center"],
	},
	variants: {
		variant: {
			destructive: {
				root: "border-destructive text-destructive bg-destructive/5",
				description: "text-destructive",
			},
			default: {
				root: "border-border text-card-foreground bg-card",
			},
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

const Alert = (props: AlertProps) => {
	const { className, icon, title, description, variant, ...rest } = props;

	return (
		<div
			className={alertVariants().root({
				className,
				variant,
			})}
			{...rest}
		>
			<div className={alertVariants().iconSlot()}>{icon ? icon : <Info />}</div>
			<p className={alertVariants().title()}>{title}</p>
			{description ? (
				<p className={alertVariants().description()}>{description}</p>
			) : null}
		</div>
	);
};

export { Alert };
