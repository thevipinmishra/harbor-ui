import { tv } from "@/lib/tv.config";
import {
  Progress,
  ProgressLabelProps,
  ProgressRootProps,
  ProgressTrackProps,
  ProgressValueTextProps,
} from "@ark-ui/react/progress";
import { labelVariants } from "./Label";

const linearProgressVariants = tv({
    slots: {
        root: ['flex flex-col gap-2'],
        track: 'bg-secondary w-full rounded relative h-2',
        range: ['h-full bg-primary rounded'],
        progressValue: ['text-muted-foreground font-medium text-sm'],
    }
})

const LinearProgress = (props: ProgressRootProps) => {
    const { className, ...rest } = props;
  return <Progress.Root className={linearProgressVariants().root()}  {...rest} />;
};

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

const LinearProgressTrack = (props: ProgressTrackProps) => {
  const { className, ...rest } = props;
  return (
    <Progress.Track className={linearProgressVariants().track({
        className
    })} {...rest}>
      <Progress.Range className={linearProgressVariants().range()} />
    </Progress.Track>
  );
};

export {
  LinearProgress,
  LinearProgressLabel,
  LinearProgressValue,
  LinearProgressTrack,
};
