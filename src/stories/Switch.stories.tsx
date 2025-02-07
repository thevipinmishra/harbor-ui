import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/components/ui/Switch";
import * as React from "react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Airplane Mode",
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    label: "Notifications",
    disabled: true,
  },
};

export const Examples: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch label="Wi-Fi" />
      <Switch label="Bluetooth" defaultChecked />
      <Switch label="Do Not Disturb" disabled />
      <Switch label="Dark Mode" defaultChecked disabled />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Switch
        label="Controlled Switch"
        checked={checked}
        onCheckedChange={(e) => setChecked(e.checked)}
      />
    );
  },
};
