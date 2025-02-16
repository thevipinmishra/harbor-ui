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
      "bg-background rounded-lg shadow-lg min-w-[320px] max-w-[420px]",
      "h-[var(--height)] opacity-[var(--opacity)] [overflow-wrap:anywhere]",
      "p-4 relative border border-border",
      "scale-[var(--scale)] z-[var(--z-index)] [translate:var(--x)_var(--y)_0]",
      "transition-all duration-200 will-change-[translate,_opacity,_scale]",
      "data-[state=entering]:animate-in data-[state=closed]:animate-out",
      "hover:shadow-md",
    ],
    closeTrigger: ["absolute top-3 right-3 cursor-pointer opacity-70 hover:opacity-100"],
    title: ["text-sm font-semibold text-foreground mb-1"],
    description: ["text-sm text-muted-foreground leading-relaxed"],
  },
});

const toaster = createToaster({
  placement: "top-end",
  overlap: true,
  gap: 12,
  duration: 5000, // 5 seconds default duration
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
