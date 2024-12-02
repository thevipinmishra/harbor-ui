import * as React from 'react'
import {Splitter as SplitterPrimitive, SplitterResizeTriggerProps} from '@ark-ui/react/splitter'
import { tv } from '@/lib/tv.config';

const splitterVariants = tv({
    slots: {
        resizeTrigger: ['bg-muted ', 'data-[orientation=horizontal]:w-2 data-[orientation=horizontal]:h-16 data-[orientation=horizontal]:rounded-md data-[orientation=horizontal]:self-center data-[orientation=horizontal]:mx-2']
    }
})


const Splitter = SplitterPrimitive.Root;

const SplitterPanel = SplitterPrimitive.Panel

const SplitterResizeTrigger = React.forwardRef<React.ElementRef<typeof SplitterPrimitive.ResizeTrigger>, SplitterResizeTriggerProps>((props, ref) => {
    const {className, ...rest} = props;
    return <SplitterPrimitive.ResizeTrigger className={splitterVariants().resizeTrigger()} {...rest} ref={ref} />
})

export {Splitter, SplitterPanel, SplitterResizeTrigger}