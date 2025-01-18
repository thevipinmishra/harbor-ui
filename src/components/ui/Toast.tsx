"use client";

import { cn, tv } from "@/lib/tv.config";
import {
  Toaster as ToasterPrimitive,
  Toast,
  createToaster,
} from "@ark-ui/react/toast";
import { X } from "@phosphor-icons/react";
import { buttonVariants } from "./Button";

const toastVariants = tv({
  slots: {
    root: [
      "bg-background rounded shadow min-w-[280px]   ",
      "h-[var(--height)]  opacity-[var(--opacity)] [overflow-wrap:anywhere]",
      "p-4 relative space-y-1",
      "scale-[var(--scale)] z-[var(--z-index)] [translate:var(--x)_var(--y)_0]",
      "transition-all will-change-[translate,_opacity,_scale]",
    ],
    closeTrigger: ["absolute top-2 right-2 cursor-pointer"],
    title: ['text-sm font-semibold text-foreground'],
    description: ['text-sm text-muted-foreground'],
  },
});

const toaster = createToaster({
  placement: "top-end",
  overlap: true,
  gap: 12,
});

const Toaster = () => {
  return (
    <ToasterPrimitive toaster={toaster}>
      {(toast) => (
        <Toast.Root
          key={toast.id}
          className={toastVariants().root()}
        >
          <Toast.Title className={toastVariants().title()}>{toast.title}</Toast.Title>
          <Toast.Description className={toastVariants().description()}>{toast.description}</Toast.Description>
          <Toast.CloseTrigger
            className={cn(
              buttonVariants({
                size: "icon",
                variant: "plain",
              }),
              toastVariants().closeTrigger()
            )}
          >
            <X />
          </Toast.CloseTrigger>
        </Toast.Root>
      )}
    </ToasterPrimitive>
  );
};

export { Toaster, toaster };
