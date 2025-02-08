import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/components/ui/Alert";
import {
  Info,
  Warning,
  CheckCircle,
  WarningCircle,
  ShieldWarning,
} from "@phosphor-icons/react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    title: "Alert Title",
    description: "Alert description goes here",
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert
        variant="default"
        title="Information"
        description="Your account has been created successfully."
      />
      <Alert
        variant="destructive"
        icon={<WarningCircle />}
        title="Error"
        description="There was an error processing your request."
      />
      <Alert
        variant="warning"
        icon={<Warning />}
        title="Warning"
        description="Your account is about to expire."
      />
      <Alert
        variant="success"
        icon={<CheckCircle />}
        title="Success"
        description="Your changes have been saved successfully."
      />
      <Alert
        variant="info"
        icon={<Info />}
        title="Note"
        description="A new version is available for download."
      />
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert
        variant="destructive"
        icon={<ShieldWarning />}
        title="Critical Security Update Required"
        description={
          <div className="space-y-2">
            <p>Your account requires immediate attention:</p>
            <ul className="list-disc list-inside">
              <li>Multiple failed login attempts detected</li>
              <li>Unusual activity from IP: 192.168.1.1</li>
              <li>Last attempt: 2 minutes ago</li>
            </ul>
            <p className="mt-2">
              <a href="#" className="font-medium underline">
                Review activity
              </a>
              {" or "}
              <a href="#" className="font-medium underline">
                change password
              </a>
            </p>
          </div>
        }
      />
      
      <Alert
        variant="warning"
        icon={<Warning />}
        title="Subscription Expiring Soon"
        description={
          <div className="space-y-2">
            <p>Your Pro plan will expire in 3 days. To avoid service interruption:</p>
            <ul className="list-disc list-inside">
              <li>Renew now to get 20% off</li>
              <li>All your data and settings will be preserved</li>
            </ul>
            <div className="mt-2 flex gap-4">
              <a href="#" className="font-medium underline">
                Renew now
              </a>
              <a href="#" className="font-medium underline text-gray-600">
                Compare plans
              </a>
            </div>
          </div>
        }
      />
      
      <Alert
        variant="info"
        icon={<Info />}
        title="System Maintenance"
        description={
          <div className="space-y-2">
            <p>Scheduled maintenance on July 15, 2024:</p>
            <ul className="list-disc list-inside">
              <li>Duration: 2 hours (02:00 - 04:00 UTC)</li>
              <li>Services affected: API, Dashboard</li>
            </ul>
            <a href="#" className="font-medium underline block mt-2">
              View maintenance schedule
            </a>
          </div>
        }
      />
      
      <Alert
        variant="success"
        icon={<CheckCircle />}
        title="Deployment Successful"
        description={
          <div className="space-y-2">
            <p>Version 2.4.0 has been deployed to production</p>
            <ul className="list-disc list-inside">
              <li>Build: #1234 (main branch)</li>
              <li>All 142 tests passed</li>
              <li>Performance metrics: 98/100</li>
            </ul>
            <div className="mt-2 flex gap-4">
              <a href="#" className="font-medium underline">
                View deployment
              </a>
              <a href="#" className="font-medium underline text-gray-600">
                Release notes
              </a>
            </div>
          </div>
        }
      />
    </div>
  ),
};

export const CustomIcon: Story = {
  args: {
    title: "Custom Icon Alert",
    description: "This alert uses a custom icon",
    icon: <span className="text-xl">🚀</span>,
  },
};
