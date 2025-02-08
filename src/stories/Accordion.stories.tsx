import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/Accordion";
import {
  CreditCard,
  ShieldCheck,
  User,
  Bell,
  Globe,
  Gear,
  Lock,
  Question,
} from "@phosphor-icons/react";
import { Field } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Switch } from "@/components/ui/Switch";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: () => (
    <Accordion defaultValue={["item-1"]} className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionItemTrigger>Is it accessible?</AccordionItemTrigger>
        <AccordionItemContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionItemContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionItemTrigger>Is it styled?</AccordionItemTrigger>
        <AccordionItemContent>
          Yes. It comes with default styles that match the other
          components&apos; aesthetic.
        </AccordionItemContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionItemTrigger>Is it animated?</AccordionItemTrigger>
        <AccordionItemContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionItemContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Accordion defaultValue={["item-1"]} className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionItemTrigger>
          <User className="size-5" /> Account Settings
        </AccordionItemTrigger>
        <AccordionItemContent>
          Manage your account preferences, profile information and security
          settings.
        </AccordionItemContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionItemTrigger>
          <CreditCard className="size-5" /> Billing Information
        </AccordionItemTrigger>
        <AccordionItemContent>
          View your billing history, update payment methods and manage
          subscriptions.
        </AccordionItemContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionItemTrigger>
          <ShieldCheck className="size-5" /> Security
        </AccordionItemTrigger>
        <AccordionItemContent>
          Configure two-factor authentication, password settings and login
          history.
        </AccordionItemContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div className="max-w-[600px] mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionItemTrigger>
            <div className="flex items-center gap-2">
              <Question className="size-5 text-primary" />
              <span>How do I get started?</span>
            </div>
          </AccordionItemTrigger>
          <AccordionItemContent className="text-muted-foreground">
            <p className="mb-2">Getting started is easy! Follow these steps:</p>
            <ol className="list-decimal ml-4 space-y-2">
              <li>Sign up for an account</li>
              <li>Complete your profile setup</li>
              <li>Choose your subscription plan</li>
              <li>Start exploring our features</li>
            </ol>
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionItemTrigger>
            <div className="flex items-center gap-2">
              <Question className="size-5 text-primary" />
              <span>What payment methods do you accept?</span>
            </div>
          </AccordionItemTrigger>
          <AccordionItemContent className="text-muted-foreground">
            <p>We accept all major payment methods including:</p>
            <ul className="list-disc ml-4 mt-2">
              <li>Credit/Debit Cards (Visa, Mastercard, Amex)</li>
              <li>PayPal</li>
              <li>Bank Transfer</li>
              <li>Cryptocurrency (Bitcoin, Ethereum)</li>
            </ul>
          </AccordionItemContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const AccountSettings: Story = {
  render: () => (
    <div className="max-w-[800px] mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
      <Accordion multiple defaultValue={["profile"]}>
        <AccordionItem value="profile">
          <AccordionItemTrigger>
            <div className="flex items-center gap-3">
              <User className="size-5 text-blue-600" />
              <div>
                <span className="font-medium">Profile Settings</span>
                <p className="text-sm text-muted-foreground">
                  Manage your personal information
                </p>
              </div>
            </div>
          </AccordionItemTrigger>
          <AccordionItemContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Field>
                    <Label>Full Name</Label>
                    <Input defaultValue="John Doe" />
                  </Field>
                </div>
                <div>
                  <Field>
                    <Label>Username</Label>
                    <Input defaultValue="johndoe" />
                  </Field>
                </div>
              </div>
              <Button>Save Changes</Button>
            </div>
          </AccordionItemContent>
        </AccordionItem>

        <AccordionItem value="notifications">
          <AccordionItemTrigger>
            <div className="flex items-center gap-3">
              <Bell className="size-5 text-amber-600" />
              <div>
                <span className="font-medium">Notification Preferences</span>
                <p className="text-sm text-muted-foreground">
                  Control your notification settings
                </p>
              </div>
            </div>
          </AccordionItemTrigger>
          <AccordionItemContent>
            <div className="space-y-3">
              {["Email Notifications", "Push Notifications", "SMS Alerts"].map(
                (item) => (
                  <Field key={item} className="flex-row items-center justify-between">
                    <Label>{item}</Label>
                    <Switch />
                  </Field>
                )
              )}
            </div>
          </AccordionItemContent>
        </AccordionItem>

        <AccordionItem value="security">
          <AccordionItemTrigger>
            <div className="flex items-center gap-3">
              <Lock className="size-5 text-green-600" />
              <div>
                <span className="font-medium">Security</span>
                <p className="text-sm text-muted-foreground">
                  Manage your security settings
                </p>
              </div>
            </div>
          </AccordionItemTrigger>
          <AccordionItemContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <div>
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security
                  </p>
                </div>
                <Button>Enable</Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <div>
                  <h4 className="font-medium">Password</h4>
                  <p className="text-sm text-muted-foreground">
                    Last changed 3 months ago
                  </p>
                </div>
                <Button>Change</Button>
              </div>
            </div>
          </AccordionItemContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
