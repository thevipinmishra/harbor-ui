import { tv } from "@/lib/tv.config";
import {
  Progress,
  ProgressLabelProps,
  ProgressRootProps,
  ProgressTrackProps,
  ProgressValueTextProps,
} from "@ark-ui/react/progress";
import * as React from "react";
import { labelVariants } from "./Label";

const linearProgressVariants = tv({
    slots: {
        root: ['flex flex-col gap-2'],
        track: 'bg-secondary w-full rounded relative h-2',
        range: ['h-full bg-primary rounded'],
        progressValue: ['text-muted-foreground font-medium text-sm'],
    }
})

const LinearProgress = React.forwardRef<
  React.ElementRef<typeof Progress.Root>,
  ProgressRootProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <Progress.Root 
      ref={ref}
      className={linearProgressVariants().root()} 
      {...rest} 
    />
  );
});
LinearProgress.displayName = "LinearProgress";

const LinearProgressLabel = (props: ProgressLabelProps) => {
    const { className, ...rest } = props;
  return <Progress.Label className={labelVariants({
    className,
  })} {...rest} />;
};

const LinearProgressValue = (props: ProgressValueTextProps) => {
    const { className, ...rest } = props;
  return <Progress.ValueText className={linearProgressVariants().progressValue({
    className
  })} {...rest} />;
};

const LinearProgressTrack = React.forwardRef<
  React.ElementRef<typeof Progress.Track>,
  ProgressTrackProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <Progress.Track 
      ref={ref}
      className={linearProgressVariants().track({ className })} 
      {...rest}
    >
      <Progress.Range className={linearProgressVariants().range()} />
    </Progress.Track>
  );
});
LinearProgressTrack.displayName = "LinearProgressTrack";

export {
  LinearProgress,
  LinearProgressLabel,
  LinearProgressValue,
  LinearProgressTrack,
};
