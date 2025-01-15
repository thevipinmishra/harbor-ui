"use client";

import { Button, ButtonGroup } from "@/components/ui/Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/Tooltip";
import { FloppyDisk, Trash, Plus, Gear, Download, Share } from "@phosphor-icons/react";

export function ButtonDemo() {
  return (
    <div className="space-y-8">
      {/* Basic Variants */}
      <div className="flex gap-4 flex-wrap">
        <Button>Default</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="plain">Plain</Button>
        <Button variant="destructive">Destructive</Button>
        <Button disabled>Disabled</Button>
      </div>

      {/* Sizes */}
      <div className="flex gap-4 items-center flex-wrap">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* With Icons */}
      <div className="flex gap-4 flex-wrap">
        <Button><Plus /> New Item</Button>
        <Button variant="outlined"><Gear /> Settings</Button>
        <Button><Download /> Download</Button>
        <Button><Share /> Share</Button>
      </div>

      {/* Loading States */}
      <div className="flex gap-4 flex-wrap">
        <Button loading>Saving...</Button>
        <Button variant="outlined" loading>Processing</Button>
        <Button variant="destructive" loading>Deleting</Button>
      </div>

      {/* Button Groups */}
      <div className="space-y-4">
        <ButtonGroup>
          <Button>Edit</Button>
          <Button><FloppyDisk /></Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="destructive"><Trash /></Button>
            </TooltipTrigger>
            <TooltipContent>Delete item</TooltipContent>
          </Tooltip>
        </ButtonGroup>
      </div>

     

      {/* Icon Only Buttons */}
      <div className="flex gap-4 flex-wrap">
        <ButtonGroup>
          <Button size="sm" variant="plain"><Plus /></Button>
          <Button size="sm" variant="plain"><Gear /></Button>
          <Button size="sm" variant="plain"><Share /></Button>
        </ButtonGroup>
      </div>

      {/* Full Width Buttons */}
      <div className="space-y-2 max-w-sm">
        <Button className="w-full">Continue with Email</Button>
        <Button variant="outlined" className="w-full">Sign in with Google</Button>
      </div>

      {/* Success/Error States */}
     
    </div>
  );
}
