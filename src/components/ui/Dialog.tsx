"use client";

import * as React from "react";
import {
  type DialogDescriptionProps,
  Dialog as DialogPrimitive,
  type DialogContentProps as DialogPrimitiveContentProps,
  type DialogTitleProps,
} from "@ark-ui/react/dialog";
import { cn, tv } from "@/lib/tv.config";
import { Portal } from "@ark-ui/react";
import type { VariantProps } from "tailwind-variants";
import { X } from "@phosphor-icons/react";

interface DialogContentProps
  extends DialogPrimitiveContentProps,
    VariantProps<typeof dialogVariants> {}

const dialogVariants = tv({
  slots: {
    backdrop: [
      "fixed inset-0 bg-black/80 z-40",
      "motion-safe:data-[state=open]:motion-opacity-in-0 motion-duration-200",
      "motion-safe:data-[state=closed]:motion-opacity-out-0",
    ],
    positioner: [
      "fixed inset-0 flex justify-center items-center p-4 lg:p-10 z-50",
    ],
    content: [
      "bg-background relative shadow-md grid gap-2 p-4 lg:p-5 rounded w-full md:max-w-md",
      "motion-safe:data-[state=open]:motion-duration-300 motion-safe:data-[state=closed]:motion-duration-100",
      "motion-safe:data-[state=open]:motion-translate-y-in-[1rem] ",
      "motion-safe:data-[state=closed]:motion-opacity-out-0 motion-safe:data-[state=closed]:motion-translate-y-out-[1rem]",
    ],
    title: "font-semibold text-lg text-foreground",
    description: "text-sm text-muted-foreground",
  },
});

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const DialogContent = (props: DialogContentProps) => {
  const { className, children, ...rest } = props;
  return (
    <Portal>
      <DialogPrimitive.Backdrop className={dialogVariants().backdrop()} />
      <DialogPrimitive.Positioner className={dialogVariants().positioner()}>
        <DialogPrimitive.Content
          className={dialogVariants().content({
            className,
          })}
          {...rest}
        >
          {children}
          <DialogPrimitive.CloseTrigger className="absolute right-4 cursor-pointer top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.CloseTrigger>
        </DialogPrimitive.Content>
      </DialogPrimitive.Positioner>
    </Portal>
  );
};

DialogContent.displayName = "DialogContent";

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

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

const DialogDescription = (props: DialogDescriptionProps) => {
  const { className, ...rest } = props;
  return (
    <DialogPrimitive.Description
      className={dialogVariants().description({
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
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
  DialogContext,
};
