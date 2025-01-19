"use client";

import { Button, ButtonGroup } from "@/components/ui/Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/Tooltip";
import { FloppyDisk, Trash, Plus, Gear } from "@phosphor-icons/react";

export function ButtonDemo() {
  return (
    <div className="space-y-8">
      {/* Core Variants */}
      <div className="flex gap-4 flex-wrap">
        <Button>Default</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="plain">Plain</Button>
        <Button variant="destructive">Destructive</Button>
      </div>

      {/* Common Use Cases */}
      <div className="flex gap-4 flex-wrap">
        <Button loading>Processing...</Button>
        <Button><Plus /> New Item</Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="destructive"><Trash /></Button>
          </TooltipTrigger>
          <TooltipContent>Delete item</TooltipContent>
        </Tooltip>
      </div>

      {/* Button Group Example */}
      <ButtonGroup>
        <Button variant="outlined"><Plus /></Button>
        <Button variant="outlined"><Gear /></Button>
        <Button variant="outlined"><FloppyDisk /></Button>
      </ButtonGroup>

      {/* Full Width Example */}
      <div className="max-w-sm">
        <Button className="w-full">Continue</Button>
      </div>
    </div>
  );
}
