import {
  type ClipboardControlProps,
  type ClipboardInputProps,
  type ClipboardTriggerProps,
  Clipboard as Primitive,
} from "@ark-ui/react/clipboard";

const Clipboard = Primitive.Root;
const ClipboardLabel = Primitive.Label;
const ClipboardContext = Primitive.Context;

const ClipboardControl = (props: ClipboardControlProps) => {
  const { className, ...rest } = props;
  return <Primitive.Control {...rest} />;
};

const ClipboardInput = (props: ClipboardInputProps) => {
  const { className, ...rest } = props;
  return <Primitive.Input {...rest} />;
};

const ClipboardTrigger = (props: ClipboardTriggerProps) => {
  const { className, ...rest } = props;
  return <Primitive.Trigger {...rest} />;
};

export {
  Clipboard,
  ClipboardLabel,
  ClipboardContext,
  ClipboardControl,
  ClipboardInput,
  ClipboardTrigger,
};
