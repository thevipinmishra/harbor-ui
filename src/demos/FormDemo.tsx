"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Field } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Switch } from "@/components/ui/Switch";
import { createListCollection } from "@ark-ui/react";

export function FormDemo() {
  const roleCollection = createListCollection({
    items: ["Admin", "Editor", "Viewer", "Developer", "Analyst"],
  });

  function SubscriptionForm() {
    return (
      <form className="space-y-6 max-w-md">
        <div className="space-y-4">
          <Field>
            <Label>Plan Type</Label>
            <Select collection={createListCollection({ items: ["Basic", "Pro", "Enterprise"] })}>
              <SelectTrigger />
              <SelectContent>
                {["Basic", "Pro", "Enterprise"].map((plan) => (
                  <SelectItem key={plan} item={plan}>{plan}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <Label>Billing Cycle</Label>
            <Select collection={createListCollection({ items: ["Monthly", "Annual"] })}>
              <SelectTrigger />
              <SelectContent>
                {["Monthly", "Annual"].map((cycle) => (
                  <SelectItem key={cycle} item={cycle}>{cycle}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <Label>Payment Method</Label>
            <Input placeholder="4242 4242 4242 4242" />
          </Field>

          <div className="space-y-2">
            <Checkbox label="I agree to the terms and conditions" />
            <Checkbox label="Send me invoice via email" defaultChecked />
          </div>
        </div>

        <Button type="submit" className="w-full">Subscribe Now</Button>
      </form>
    );
  }

  function ProfileForm() {
    return (
      <form className="space-y-6 max-w-md">
        <Field>
          <Label>Username</Label>
          <Input placeholder="@username" />
        </Field>

        <Field>
          <Label>Bio</Label>
          <Input placeholder="Tell us about yourself" />
        </Field>

        <Field>
          <Label>Location</Label>
          <Input placeholder="City, Country" />
        </Field>

        <Field>
          <Label>Website</Label>
          <Input type="url" placeholder="https://example.com" />
        </Field>

        <div className="flex justify-end gap-3">
          <Button variant="outlined">Reset</Button>
          <Button type="submit">Update Profile</Button>
        </div>
      </form>
    );
  }

  return (
    <div className="space-y-12">
      {/* Original form */}
      <div>
        <h2 className="text-lg font-medium mb-6">Create User</h2>
        <form className="space-y-6 max-w-md">
          <div className="space-y-4">
            <Field>
              <Label>Email</Label>
              <Input type="email" placeholder="Enter email" />
              <ErrorMessage>Please enter a valid email address</ErrorMessage>
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <Label>First Name</Label>
                <Input placeholder="First name" />
              </Field>
              <Field>
                <Label>Last Name</Label>
                <Input placeholder="Last name" />
              </Field>
            </div>

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

            <div className="space-y-4">
              <Label>Permissions</Label>
              <div className="space-y-2">
                <Checkbox label="Can view dashboard" defaultChecked />
                <Checkbox label="Can edit settings" />
                <Checkbox label="Can manage users" />
              </div>
            </div>

            <Field className="flex flex-row items-center justify-between">
              <Label>Enable Two-Factor Auth</Label>
              <Switch />
            </Field>

            <Field className="flex flex-row items-center justify-between">
              <Label>Email Notifications</Label>
              <Switch defaultChecked />
            </Field>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outlined">Cancel</Button>
            <Button type="submit" loading>Creating User...</Button>
          </div>
        </form>
      </div>

      {/* Profile form */}
      <div>
        <h2 className="text-lg font-medium mb-6">Edit Profile</h2>
        <ProfileForm />
      </div>

      {/* Subscription form */}
      <div>
        <h2 className="text-lg font-medium mb-6">Choose Plan</h2>
        <SubscriptionForm />
      </div>
    </div>
  );
}
