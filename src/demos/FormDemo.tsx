"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Field } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/Select";
import { createListCollection } from "@ark-ui/react";

export function FormDemo() {
  const roleCollection = createListCollection({
    items: ["Admin", "Editor", "Viewer"],
  });

  return (
    <form className="space-y-4 max-w-md">
      <Field>
        <Label>Username</Label>
        <Input placeholder="Enter username" />
        <ErrorMessage>Username is required</ErrorMessage>
      </Field>

      <Field>
        <Label>Role</Label>
        <Select collection={roleCollection}>
          <SelectTrigger />
          <SelectContent>
            {roleCollection.items.map((role) => (
              <SelectItem key={role} item={role}>
                {role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <div className="flex justify-end gap-3">
        <Button variant="outlined">Cancel</Button>
        <Button type="submit">Create User</Button>
      </div>
    </form>
  );
}
