import { tv } from "@/lib/tv.config";
import {
  CollapsibleContentProps,
  Collapsible as CollapsiblePrimitive,
} from "@ark-ui/react/collapsible";

const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

const collapsibleVariants = tv({
  slots: {
    content:
      "overflow-hidden data-[state=open]:motion-safe:animate-slide-down data-[state=closed]:motion-safe:animate-slide-up",
  },
});

const CollapsibleContent = (props: CollapsibleContentProps) => {
  const { className, ...rest } = props;
  return (
    <CollapsiblePrimitive.Content
      className={collapsibleVariants().content()}
      {...rest}
    />
  );
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
