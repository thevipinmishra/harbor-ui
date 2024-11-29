import * as React from "react";
import {
  Dialog as DialogPrimitive,
  DialogContentProps as DialogPrimitiveContentProps,
} from "@ark-ui/react/dialog";
import { tv } from "@/lib/tv.config";
import { Portal } from "@ark-ui/react";
import { VariantProps } from "tailwind-variants";

interface DialogContentProps
  extends DialogPrimitiveContentProps,
    VariantProps<typeof dialogVariants> {}

const dialogVariants = tv({
  slots: {
    backdrop: ["fixed inset-0 bg-backdrop/90"],
    positioner: ["fixed inset-0 flex justify-center items-center p-4 lg:p-10"],
    content: ["bg-background shadow-md p-4 rounded-lg w-full"],
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
  }
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
          })}
          {...rest}
          ref={ref}
        />
      </DialogPrimitive.Positioner>
    </Portal>
  );
});

export { Dialog, DialogTrigger, DialogContent };
