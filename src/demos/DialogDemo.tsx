"use client";

import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Field } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>New Project</DialogTitle>
        <div className="space-y-4 mt-4">
          <Field>
            <Label>Project Name</Label>
            <Input placeholder="Enter project name" />
          </Field>
          <Field>
            <Label>Description</Label>
            <Input placeholder="Brief project description" />
          </Field>
          <div className="flex justify-end gap-3">
            <Button variant="outlined">Cancel</Button>
            <Button>Create</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
