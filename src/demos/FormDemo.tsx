"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Field } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectItemGroup,
  SelectItemGroupLabel,
} from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Switch } from "@/components/ui/Switch";
import { Calendar } from "@/components/ui/Calendar";
import { ChipGroup, ChipGroupItem } from "@/components/ui/ChipGroup";
import { createListCollection } from "@ark-ui/react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";
import { Info } from "@phosphor-icons/react";

export function FormDemo() {
  // Updated collections with grouped items
  const roleCollection = createListCollection({
    items: [
      { group: "Technical", items: ["Developer", "DevOps", "Architect"] },
      { group: "Management", items: ["Admin", "Project Manager", "Team Lead"] },
      { group: "Business", items: ["Analyst", "Consultant", "Stakeholder"] }
    ]
  });

  const industryCollection = createListCollection({
    items: [
      { group: "Technology", items: ["Software", "Hardware", "IT Services"] },
      { group: "Healthcare", items: ["Hospitals", "Pharmaceuticals", "Medical Devices"] },
      { group: "Finance", items: ["Banking", "Insurance", "Investment"] }
    ]
  });

  function OnboardingForm() {
    const [step, setStep] = useState(1);

    return (
      <form className="space-y-6 max-w-md">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-medium">Basic Information</h3>
            <Field>
              <Label>Company Name</Label>
              <Input placeholder="Enter your company name" required />
            </Field>

            <Field>
             <div className="flex gap-2">
             <Label>Industry</Label> <Tooltip>
                <TooltipTrigger className="cursor-pointer text-muted-foreground hover:text-foreground">
                    <Info className='size-4' />
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-sm">Select the industry that best describes your company</p>
                </TooltipContent>
             </Tooltip>
             </div>
              <Select collection={industryCollection}>
                <SelectTrigger />
                <SelectContent>
                  {industryCollection.items.map((group) => (
                    <SelectItemGroup key={group.group}>
                      <SelectItemGroupLabel>{group.group}</SelectItemGroupLabel>
                      {group.items.map((item) => (
                        <SelectItem key={item} item={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectItemGroup>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <Label>Company Size</Label>
              <ChipGroup multiple={false} defaultValue={["10-50"]}>
                <ChipGroupItem value="1-10">1-10</ChipGroupItem>
                <ChipGroupItem value="10-50">10-50</ChipGroupItem>
                <ChipGroupItem value="50-200">50-200</ChipGroupItem>
                <ChipGroupItem value="200+">200+</ChipGroupItem>
              </ChipGroup>
            </Field>

            <Button onClick={() => setStep(2)} type="button" className="w-full">
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-medium">Account Setup</h3>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <Label>First Name</Label>
                <Input placeholder="First name" required />
              </Field>
              <Field>
                <Label>Last Name</Label>
                <Input placeholder="Last name" required />
              </Field>
            </div>

            <Field>
              <Label>Work Email</Label>
              <Input type="email" placeholder="name@company.com" required />
              <ErrorMessage>Please enter a valid work email</ErrorMessage>
            </Field>

            <Field>
              <Label>Password</Label>
              <Input type="password" placeholder="Min. 8 characters" required />
            </Field>

            <div className="space-y-2">
              <Checkbox label="I agree to the Terms of Service" required />
              <Checkbox label="Subscribe to product updates" defaultChecked />
            </div>

            <div className="flex gap-3">
              <Button
                variant="outlined"
                onClick={() => setStep(1)}
                type="button"
              >
                Back
              </Button>
              <Button type="submit" className="flex-1">
                Create Account
              </Button>
            </div>
          </div>
        )}
      </form>
    );
  }

  function UserSettingsForm() {
    return (
      <form className="space-y-6 max-w-md">
        <div className="space-y-4">
          <Field>
            <Label>Display Name</Label>
            <Input placeholder="How others will see you" />
          </Field>

          <Field>
            <Label>Time Zone</Label>
            <Select
              collection={createListCollection({
                items: ["UTC-8", "UTC-5", "UTC+0", "UTC+1", "UTC+5:30"],
              })}
            >
              <SelectTrigger />
              <SelectContent>
                {["UTC-8", "UTC-5", "UTC+0", "UTC+1", "UTC+5:30"].map((tz) => (
                  <SelectItem key={tz} item={tz}>
                    {tz}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <Label>Date Format</Label>
            <ChipGroup multiple={false} defaultValue={["MM/DD/YYYY"]}>
              <ChipGroupItem value="MM/DD/YYYY">MM/DD/YYYY</ChipGroupItem>
              <ChipGroupItem value="DD/MM/YYYY">DD/MM/YYYY</ChipGroupItem>
              <ChipGroupItem value="YYYY-MM-DD">YYYY-MM-DD</ChipGroupItem>
            </ChipGroup>
          </Field>

          <Field>
            <Label>Birth Date</Label>
            <Calendar />
          </Field>

          <div className="space-y-3">
            <Label>Notification Preferences</Label>
            <div className="space-y-2">
              <Field className="flex flex-row items-center justify-between">
                <Label>Email Notifications</Label>
                <Switch defaultChecked />
              </Field>
              <Field className="flex flex-row items-center justify-between">
                <Label>Push Notifications</Label>
                <Switch />
              </Field>
              <Field className="flex flex-row items-center justify-between">
                <Label>Weekly Digest</Label>
                <Switch defaultChecked />
              </Field>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outlined">Reset</Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    );
  }

  function SubscriptionForm() {
    return (
      <form className="space-y-6 max-w-md">
        <div className="space-y-4">
          <Field>
            <Label>Plan Type</Label>
            <Select
              collection={createListCollection({
                items: ["Basic", "Pro", "Enterprise"],
              })}
            >
              <SelectTrigger />
              <SelectContent>
                {["Basic", "Pro", "Enterprise"].map((plan) => (
                  <SelectItem key={plan} item={plan}>
                    {plan}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <Label>Billing Cycle</Label>
            <Select
              collection={createListCollection({
                items: ["Monthly", "Annual"],
              })}
            >
              <SelectTrigger />
              <SelectContent>
                {["Monthly", "Annual"].map((cycle) => (
                  <SelectItem key={cycle} item={cycle}>
                    {cycle}
                  </SelectItem>
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

        <Button type="submit" className="w-full">
          Subscribe Now
        </Button>
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
      <div>
        <h2 className="text-lg font-medium mb-6">Onboarding</h2>
        <OnboardingForm />
      </div>

      <div>
        <h2 className="text-lg font-medium mb-6">User Settings</h2>
        <UserSettingsForm />
      </div>

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
                  {roleCollection.items.map((group) => (
                    <SelectItemGroup key={group.group}>
                      <SelectItemGroupLabel>{group.group}</SelectItemGroupLabel>
                      {group.items.map((item) => (
                        <SelectItem key={item} item={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectItemGroup>
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
            <Button type="submit" loading>
              Creating User...
            </Button>
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
