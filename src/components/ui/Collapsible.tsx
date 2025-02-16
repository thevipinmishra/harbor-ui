import { tv } from "@/lib/tv.config";
import {
  type CollapsibleContentProps,
  Collapsible as CollapsiblePrimitive,
} from "@ark-ui/react/collapsible";

const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
const CollapsibleContext = CollapsiblePrimitive.Context;

const collapsibleVariants = tv({
  slots: {
    content:
      "overflow-hidden motion-safe:data-[state=open]:animate-collapse-in motion-safe:data-[state=closed]:animate-collapse-out",
  },
});

const CollapsibleContent = (props: CollapsibleContentProps) => {
  const { className, ...rest } = props;
  return (
    <CollapsiblePrimitive.Content className={collapsibleVariants().content()} {...rest} />
  );
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleContext };
