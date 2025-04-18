"use client";

import * as React from "react";
import {
  Dialog as DialogPrimitive,
  DialogProps,
  DialogTrigger as DialogTriggerPrimitive,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { tv } from "@/lib/tv.config";

const Dialog = (props: DialogProps) => {
  return <DialogPrimitive {...props} />;
};

const dialogVariants = tv({
  slots: {
    backdrop: [
      "fixed inset-0 bg-accent-subtle/60  backdrop-blur-xs z-40 max-h-[var(--visual-viewport-height)]",
      "flex justify-center items-end md:items-center",
      "motion-safe:entering:motion-opacity-in-0 motion-duration-200",
      "motion-safe:exiting:motion-opacity-out-0",
    ],
    content: [
      "bg-background relative shadow-md grid gap-2 p-6 rounded-t-md md:rounded-md w-full md:max-w-md",
      "max-h-[calc(var(--visual-viewport-height)-theme(space.10))] overflow-y-auto",
      "motion-safe:entering:motion-duration-300 motion-safe:exiting:motion-duration-100",
      "motion-safe:entering:motion-translate-y-in-100 motion-safe:entering:md:motion-translate-y-in-[1rem]  ",
      "motion-safe:exiting:motion-opacity-out-0 motion-safe:exiting:motion-translate-y-out-[1rem]",
    ],
    title: "font-semibold text-lg text-foreground",
    description: "text-sm text-muted-foreground",
  },
});

const DialogTrigger = DialogTriggerPrimitive;

const DialogContent = (props: DialogProps) => {
  const { className, children, ...rest } = props;
  return (
    <ModalOverlay isDismissable className={dialogVariants().backdrop()}>
      <Modal
        className={dialogVariants().content({
          className,
        })}
      >
        <Dialog {...rest}>
          {(dialogProps) =>
            typeof children === "function" ? children(dialogProps) : children
          }
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
};

DialogContent.displayName = "DialogContent";

export { Dialog, DialogTrigger, DialogContent };
