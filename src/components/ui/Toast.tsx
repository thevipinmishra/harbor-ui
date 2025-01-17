"use client";

import { tv } from "@/lib/tv.config";
import {
  Toaster as ToasterPrimitive,
  Toast,
  createToaster,
} from "@ark-ui/react/toast";
import { X } from "@phosphor-icons/react";

const toastVariants = tv({
  slots: {
    root: [
      "bg-background shadow p-2 min-w-[260px] rounded h-[var(--height)] opacity-[var(--opacity)] [overflow-wrap:anywhere]",
      "relative scale-[var(--scale)] z-[var(--z-index)] translate-x-[var(--x)]",
      "translate-y-[var(--y)] transition-all will-change-[translate,_opacity,_scale]"
    ],
  },
});

const toaster = createToaster({
  placement: "top-end",
  overlap: true,
  gap: 16,
});

const Toaster = () => {
  return (
    <ToasterPrimitive toaster={toaster}>
      {(toast) => (
        <Toast.Root key={toast.id} className={toastVariants().root()}>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.CloseTrigger>
            <X />
          </Toast.CloseTrigger>
        </Toast.Root>
      )}
    </ToasterPrimitive>
  );
};

export { Toaster, toaster };
