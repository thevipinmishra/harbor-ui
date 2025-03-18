import { tv } from "@/lib/tv.config";
import type * as React from "react";
import type { VariantProps } from "tailwind-variants";
import { Info } from "@phosphor-icons/react";

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  variant?: "destructive" | "default" | "success" | "warning" | "info";
  icon?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
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
      success: {
        root: "border-green-600 text-green-600 bg-green-50",
        description: "text-green-600",
      },
      warning: {
        root: "border-yellow-600 text-yellow-600 bg-yellow-50",
        description: "text-yellow-600",
      },
      info: {
        root: "border-blue-600 text-blue-600 bg-blue-50",
        description: "text-blue-600",
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

  const DescriptionElement = typeof description === "string" ? "p" : "div";

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
        <DescriptionElement className={alertVariants().description()}>
          {description}
        </DescriptionElement>
      ) : null}
    </div>
  );
};

export { Alert };
