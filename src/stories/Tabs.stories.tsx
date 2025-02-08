import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { GearSix, User, CreditCard } from "@phosphor-icons/react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    defaultValue: {
      description: "The initial active tab",
      control: "text",
    },
    value: {
      description: "The controlled value of the tab to activate",
      control: "text",
    },
    onChange: {
      description: "Callback when tab changes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">
          <User className="h-4 w-4" />
          Account
        </TabsTrigger>
        <TabsTrigger value="password">
          <GearSix className="h-4 w-4" />
          Settings
        </TabsTrigger>
        <TabsTrigger value="billing">
          <CreditCard className="h-4 w-4" />
          Billing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Make changes to your account settings.
        </p>
      </TabsContent>
      <TabsContent value="password" className="p-4">
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Configure your app preferences.
        </p>
      </TabsContent>
      <TabsContent value="billing" className="p-4">
        <h3 className="text-lg font-medium">Billing</h3>
        <p className="text-sm text-muted-foreground">
          Manage your billing information and view receipts.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings" disabled>
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password">Password settings</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
  ),
};
