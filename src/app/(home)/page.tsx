"use client";

import { TabsDemo } from "@/demos/TabsDemo";
import { FormDemo } from "@/demos/FormDemo";
import { DialogDemo } from "@/demos/DialogDemo";
import { AlertDemo } from "@/demos/AlertDemo";
import { ButtonDemo } from "@/demos/ButtonDemo";
import { DatePicker } from "@/components/ui/Datepicker";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleContext,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import { Button } from "@/components/ui/Button";
import { toaster } from "@/components/ui/Toast";
import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderValueText,
} from "@/components/ui/Slider";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadPreview,
  FileUploadTrigger,
} from "@/components/ui/FileUpload";
import { Upload } from "@phosphor-icons/react";
import { Field } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Toggle, ToggleContext } from "@/components/ui/Toggle";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
} from "@/components/ui/RadioGroup";
import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/Accordion";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { FileOrganizerDemo } from "@/demos/FileOrganizerDemo";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@/components/ui/Menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Input } from "@/components/ui/Input";

export default function HomePage() {
  return (
    <main className="py-10">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">File Organization</h2>
          <FileOrganizerDemo />
        </section>

        <section className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Buttons</h2>
          <ButtonDemo />
        </section>

        <section className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Form</h2>
          <FormDemo />
        </section>

        <section className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Dialog</h2>
          <DialogDemo />
        </section>

        <section className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Tabs and Progress</h2>
          <TabsDemo />
        </section>

        <section className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Alerts</h2>
          <AlertDemo />
        </section>

        <section className="border border-border space-y-8 rounded-lg p-6">
          <Field>
            <Label>Default datepicker</Label>
            <DatePicker locale="en-IN" />
          </Field>

          <Field>
            <Label>Multiple</Label>
            <DatePicker selectionMode="multiple" locale="en-IN" />
          </Field>

          <Field>
            <Label>Range</Label>
            <DatePicker selectionMode="range" locale="en-IN" />
          </Field>
        </section>

        <section className="border border-border rounded-lg p-6">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button>
                <CollapsibleContext>
                  {({ open }) => (
                    <span>{open ? "Close" : "Open"} Project Information</span>
                  )}
                </CollapsibleContext>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 space-y-4 border rounded-lg mt-2">
                <h3 className="font-semibold text-lg">Project Information</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    Harbor UI is a modern React component library built with:
                  </p>
                  <ul className="list-disc list-inside pl-4">
                    <li>TypeScript for type safety</li>
                    <li>Tailwind CSS for styling</li>
                    <li>Radix UI primitives</li>
                    <li>Modern React patterns</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    Version 1.0.0 - Last updated: 2024
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </section>

        <section className="border border-border rounded-lg p-6">
          <Button
            onClick={() =>
              toaster.create({
                title: "Toast",
                description: "Your toast is ready!",
                type: "error",
              })
            }
          >
            Cook a toast
          </Button>
        </section>

        <section className="border border-border rounded-lg p-6 space-y-8">
          <Slider>
            <div className="flex gap-4 justify-between">
              <SliderLabel className="flex-1">Volume</SliderLabel>
              <SliderValueText />
            </div>
            <SliderControl />
          </Slider>

          <Slider defaultValue={[5, 10]}>
            <div className="flex gap-4 justify-between">
              <SliderLabel className="flex-1">Volume</SliderLabel>
              <SliderValueText />
            </div>
            <SliderControl />
          </Slider>
        </section>

        <section className="container space-y-8 p-6">
          <FileUpload>
            <FileUploadTrigger asChild>
              <Button fullWidth>
                Upload File <Upload />
              </Button>
            </FileUploadTrigger>
            <FileUploadPreview />
          </FileUpload>

          <FileUpload>
            <FileUploadDropzone>
              <FileUploadTrigger asChild>
                <Button>
                  Upload File <Upload />
                </Button>
              </FileUploadTrigger>
            </FileUploadDropzone>
            <FileUploadPreview />
          </FileUpload>
        </section>

        <section className="p-6">
          <Tooltip>
            <TooltipTrigger>tooltip</TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </section>
        <section className="p-6">
          <Toggle asChild>
            <Button>
              <ToggleContext>
                {({ pressed }) => (pressed ? "Mute" : "Unmute")}
              </ToggleContext>
            </Button>
          </Toggle>
        </section>

        <section className="p-6">
          <RadioGroup>
            <RadioGroupLabel>Your Favourite Fruit</RadioGroupLabel>
            <RadioGroupItem value="1">Apple</RadioGroupItem>
            <RadioGroupItem value="2">Banana</RadioGroupItem>
            <RadioGroupItem value="3">Orange</RadioGroupItem>
          </RadioGroup>
        </section>

        <section className="p-6">
          <Accordion collapsible>
            <AccordionItem value="account">
              <AccordionItemTrigger>Account Settings</AccordionItemTrigger>
              <AccordionItemContent>
                <div className="space-y-2">
                  <p>Manage your account preferences and security settings:</p>
                  <ul className="list-disc list-inside">
                    <li>Update profile information</li>
                    <li>Change password</li>
                    <li>Two-factor authentication</li>
                    <li>Connected devices</li>
                  </ul>
                </div>
              </AccordionItemContent>
            </AccordionItem>
            <AccordionItem value="billing">
              <AccordionItemTrigger>
                Billing & Subscriptions
              </AccordionItemTrigger>
              <AccordionItemContent>
                <div className="">
                  <p className="mb-2">Your current plan: Professional</p>
                  <p className="text-sm text-gray-600">
                    Next billing date: January 1, 2024
                  </p>
                  <div className="mt-2">
                    <code className="block bg-gray-100 px-4 py-3 rounded-lg">
                      Monthly cost: $29/month
                    </code>
                  </div>
                </div>
              </AccordionItemContent>
            </AccordionItem>
            <AccordionItem value="notifications">
              <AccordionItemTrigger>
                Notification Preferences
              </AccordionItemTrigger>
              <AccordionItemContent>
                <ul className="space-y-2 list-outside">
                  <li>Email notifications: Enabled</li>
                  <li>Push notifications: Disabled</li>
                  <li>Weekly reports: Enabled</li>
                  <li>Marketing communications: Disabled</li>
                </ul>
              </AccordionItemContent>
            </AccordionItem>
            <AccordionItem value="privacy">
              <AccordionItemTrigger>Privacy & Data</AccordionItemTrigger>
              <AccordionItemContent>
                <p className="">
                  Your data is encrypted and stored securely. We never share
                  your personal information with third parties without your
                  explicit consent.
                </p>
              </AccordionItemContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="p-6 space-y-6">
          <Avatar src="https://avatar.iran.liara.run/public/47" />

          <Badge>Online</Badge>

          <div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button size="sm" variant="outlined">
                  @thevipinmishra
                </Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <p>Vipin Mishra</p>
              </HoverCardContent>
            </HoverCard>
          </div>

          <div>
            <Menu>
              <MenuTrigger>
                <Avatar src="https://avatar.iran.liara.run/public/47" />
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="profile">Profile</MenuItem>
                <MenuItem value="settings">Settings</MenuItem>
                <MenuItem value="logout">Logout</MenuItem>
              </MenuContent>
            </Menu>
          </div>

          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button size="sm" variant="outlined">
                  Popover
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <form className="space-y-4">
                  <Input />
                  <Input />
                  <Button>Login</Button>
                </form>
              </PopoverContent>
            </Popover>
          </div>
        </section>
      </div>
    </main>
  );
}
