"use client";

import { Button, ButtonGroup } from "@/components/ui/Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/Tooltip";
import { FloppyDisk, Trash, Plus, Gear } from "@phosphor-icons/react";

export function ButtonDemo() {
  return (
    <div className="space-y-8 w-full max-w-3xl mx-auto p-4">
      {/* Core Variants */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Button>Default</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="plain">Plain</Button>
        <Button variant="destructive">Destructive</Button>
      </div>

      {/* Common Use Cases */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
      <div className="flex flex-wrap gap-4">
        <ButtonGroup>
          <Button variant="outlined"><Plus /></Button>
          <Button variant="outlined"><Gear /></Button>
          <Button variant="outlined"><FloppyDisk /></Button>
        </ButtonGroup>
      </div>

      {/* Full Width Example */}
      <div className="max-w-sm">
        <Button className="w-full">Continue</Button>
      </div>
    </div>
  );
}
