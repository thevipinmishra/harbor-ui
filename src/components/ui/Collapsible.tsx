import {CollapsibleContentProps, Collapsible as CollapsiblePrimitive} from '@ark-ui/react/collapsible'

const Collapsible = CollapsiblePrimitive.Root
const CollapsibleTrigger = CollapsiblePrimitive.Trigger

const CollapsibleContent = (props: CollapsibleContentProps) => {
    const {className, ...rest} = props
    return <CollapsiblePrimitive.Content className={''} {...rest} />
}

export {Collapsible, CollapsibleTrigger, CollapsibleContent}