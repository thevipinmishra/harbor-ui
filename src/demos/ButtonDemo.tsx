"use client";

import { Button, ButtonGroup } from "@/components/ui/Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/Tooltip";
import { FloppyDisk, Trash } from "@phosphor-icons/react";

export function ButtonDemo() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Button>Save Changes</Button>
        <Button variant="outlined">Cancel</Button>
        <Button variant="destructive">Delete</Button>
      </div>

      <ButtonGroup>
        <Button>
          <FloppyDisk /> Save Draft
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="destructive">
              <Trash />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete draft</TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}
