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
import { Slider } from "@/components/ui/Slider";
import { toaster } from "@/components/ui/Toast";
import { DatePicker } from "@/components/ui/Datepicker";

export function FormDemo() {
  // Flatten the collections while keeping visual groups
  const roleItems = ["Developer", "DevOps", "Architect", "Admin", "Project Manager", "Team Lead", "Analyst", "Consultant", "Stakeholder"];
  const roleGroups = [
    { group: "Technical", items: ["Developer", "DevOps", "Architect"] },
    { group: "Management", items: ["Admin", "Project Manager", "Team Lead"] },
    { group: "Business", items: ["Analyst", "Consultant", "Stakeholder"] }
  ];

  const industryItems = ["Software", "Hardware", "IT Services", "Hospitals", "Pharmaceuticals", "Medical Devices", "Banking", "Insurance", "Investment"];
  const industryGroups = [
    { group: "Technology", items: ["Software", "Hardware", "IT Services"] },
    { group: "Healthcare", items: ["Hospitals", "Pharmaceuticals", "Medical Devices"] },
    { group: "Finance", items: ["Banking", "Insurance", "Investment"] }
  ];

  const roleCollection = createListCollection({ items: roleItems });
  const industryCollection = createListCollection({ items: industryItems });

  function OnboardingForm() {
    const [step, setStep] = useState(1);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      toaster.create({
        title: "Account Created",
        description: "Your account has been successfully created!",
        type: "success",
      });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
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
                  {industryGroups.map((group) => (
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
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      toaster.create({
        title: "Settings Saved",
        description: "Your preferences have been updated.",
        type: "success",
      });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
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
            <DatePicker />
          </Field>

          <Field>
            <Label>Activity Level</Label>
            <Slider
              defaultValue={[50]}
              min={0}
              max={100}
              step={10}
              className="my-4"
            />
          </Field>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Label>Notification Preferences</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="size-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  Configure how you want to receive updates and alerts
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="space-y-2 p-4 border rounded-lg">
              <Field className="flex flex-row items-center justify-between">
                <div>
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch defaultChecked />
              </Field>
              <Field className="flex flex-row items-center justify-between">
                <div>
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Get instant alerts</p>
                </div>
                <Switch />
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
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      toaster.create({
        title: "Subscription Updated",
        description: "Your subscription has been processed successfully.",
        type: "success",
      });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
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

          <Field>
            <Label>Storage Limit</Label>
            <Slider
              defaultValue={[50]}
              min={5}
              max={100}
              step={5}
              className="my-4"
            />
            <p className="text-sm text-muted-foreground">GB of storage</p>
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

  function ProjectSettingsForm() {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      toaster.create({
        title: "Project Updated",
        description: "Project settings have been saved.",
        type: "success",
      });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <Field>
          <Label>Project Name</Label>
          <Input placeholder="My Awesome Project" />
        </Field>

        <Field>
          <Label>Project Visibility</Label>
          <ChipGroup multiple={false} defaultValue={["private"]}>
            <ChipGroupItem value="public">Public</ChipGroupItem>
            <ChipGroupItem value="private">Private</ChipGroupItem>
            <ChipGroupItem value="restricted">Restricted</ChipGroupItem>
          </ChipGroup>
        </Field>

        <Field>
          <div className="flex gap-2">
            <Label>Storage Quota</Label>
            <Tooltip>
              <TooltipTrigger className="cursor-pointer text-muted-foreground hover:text-foreground">
                <Info className="size-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Maximum storage space for project assets</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Slider
            defaultValue={[10]}
            min={5}
            max={100}
            step={5}
            className="my-4"
          />
          <p className="text-sm text-muted-foreground">GB of storage</p>
        </Field>

        <div className="space-y-3 p-4 border rounded-lg">
          <Field className="flex flex-row items-center justify-between">
            <div>
              <Label>Auto Archive</Label>
              <p className="text-sm text-muted-foreground">Archive inactive items after 30 days</p>
            </div>
            <Switch />
          </Field>
          <Field className="flex flex-row items-center justify-between">
            <div>
              <Label>Backup Enabled</Label>
              <p className="text-sm text-muted-foreground">Daily automated backups</p>
            </div>
            <Switch defaultChecked />
          </Field>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outlined">Reset</Button>
          <Button type="submit">Save Settings</Button>
        </div>
      </form>
    );
  }

  function TeamInviteForm() {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      toaster.create({
        title: "Invitation Sent",
        description: "Team member has been invited successfully.",
        type: "success",
      });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <Field>
          <Label>Team Member Email</Label>
          <Input type="email" placeholder="colleague@company.com" />
          <ErrorMessage>Please enter a valid email address</ErrorMessage>
        </Field>

        <Field>
          <Label>Role Assignment</Label>
          <Select collection={roleCollection}>
            <SelectTrigger />
            <SelectContent>
              {roleGroups.map((group) => (
                <SelectItemGroup key={group.group}>
                  <SelectItemGroupLabel>{group.group}</SelectItemGroupLabel>
                  {group.items.map((item) => (
                    <SelectItem key={item} item={item}>{item}</SelectItem>
                  ))}
                </SelectItemGroup>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <Label>Access Level</Label>
          <ChipGroup multiple={false} defaultValue={["member"]}>
            <ChipGroupItem value="admin">Admin</ChipGroupItem>
            <ChipGroupItem value="member">Member</ChipGroupItem>
            <ChipGroupItem value="viewer">Viewer</ChipGroupItem>
          </ChipGroup>
        </Field>

        <Field>
          <Label>Start Date</Label>
          <DatePicker />
        </Field>

        <Field>
          <Label>Trial Period</Label>
          <Slider
            defaultValue={[30]}
            min={7}
            max={90}
            step={7}
            className="my-4"
          />
          <p className="text-sm text-muted-foreground">Days</p>
        </Field>

        <div className="space-y-2">
          <Checkbox label="Send welcome email" defaultChecked />
          <Checkbox label="Grant repository access" />
        </div>

        <Button type="submit" className="w-full">Send Invitation</Button>
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
                  {roleGroups.map((group) => (
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

      <div>
        <h2 className="text-lg font-medium mb-6">Project Settings</h2>
        <ProjectSettingsForm />
      </div>

      <div>
        <h2 className="text-lg font-medium mb-6">Invite Team Member</h2>
        <TeamInviteForm />
      </div>
    </div>
  );
}
