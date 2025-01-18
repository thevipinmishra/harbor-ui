"use client";

import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Field } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";
import { Switch } from "@/components/ui/Switch";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { createListCollection } from "@ark-ui/react";

export function DialogDemo() {
  return (
    <div className="space-x-4">
      {/* Existing Create Project Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create Project</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Project</DialogTitle>
          </DialogHeader>
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
              <DialogCloseTrigger asChild>
                <Button variant="outlined">Cancel</Button>
              </DialogCloseTrigger>

              <DialogCloseTrigger asChild>
                <Button>Create</Button>
              </DialogCloseTrigger>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p className="py-4 text-muted-foreground">
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
          <div className="flex justify-end gap-3">
            <DialogCloseTrigger asChild>
              <Button variant="outlined">Cancel</Button>
            </DialogCloseTrigger>
            <DialogCloseTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </DialogCloseTrigger>
          </div>
        </DialogContent>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outlined">Preferences</Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>User Preferences</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <Field className="flex flex-row items-center justify-between">
              <Label>Dark Mode</Label>
              <Switch />
            </Field>
            <Field className="flex flex-row items-center justify-between">
              <Label>Desktop Notifications</Label>
              <Switch defaultChecked />
            </Field>
            <Field>
              <Label>Language</Label>
              <Select
                collection={createListCollection({
                  items: ["English", "Spanish", "French"],
                })}
              >
                <SelectTrigger />
                <SelectContent>
                  {["English", "Spanish", "French"].map((lang) => (
                    <SelectItem key={lang} item={lang}>
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
