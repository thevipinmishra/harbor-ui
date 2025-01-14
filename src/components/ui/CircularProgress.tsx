"use clinet";

import { tv } from "@/lib/tv.config";
import {
  Progress,
  ProgressCircleProps,
  ProgressLabelProps,
  ProgressRootProps,
  ProgressValueTextProps,
} from "@ark-ui/react/progress";
import { labelVariants } from "./Label";

const circularProgressVariants = tv({
  slots: {
    root: ["flex flex-col gap-2"],
    circle: ["[--size:48px] [--thickness:4px]"],
    circleTrack: ["stroke-secondary"],
    circleRange: ["stroke-primary"],
    progressValue: ["text-muted-foreground font-medium text-sm"],
  },
});

const CircularProgress = (props: ProgressRootProps) => {
  const { className, ...rest } = props;
  return (
    <Progress.Root className={circularProgressVariants().root()} {...rest} />
  );
};

const CircularProgressLabel = (props: ProgressLabelProps) => {
  const { className, ...rest } = props;
  return (
    <Progress.Label
      className={labelVariants({
        className,
      })}
      {...rest}
    />
  );
};

const CircularProgressValue = (props: ProgressValueTextProps) => {
  const { className, ...rest } = props;
  return (
    <Progress.ValueText
      className={circularProgressVariants().progressValue({
        className,
      })}
      {...rest}
    />
  );
};

const CircularProgressCircle = (props: ProgressCircleProps) => {
  const { className, ...rest } = props;
  return (
    <Progress.Circle className={circularProgressVariants().circle({
        className,
    })} {...rest}>
      <Progress.CircleTrack
        className={circularProgressVariants().circleTrack()}
      />
      <Progress.CircleRange
        className={circularProgressVariants().circleRange()}
      />
    </Progress.Circle>
  );
};

const CircularProgressContext = Progress.Context;

export {
  CircularProgress,
  CircularProgressLabel,
  CircularProgressValue,
  CircularProgressCircle,
  CircularProgressContext,
};
