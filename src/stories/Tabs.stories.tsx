import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { GearSix, User, CreditCard } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Badge } from "@/components/ui/Badge";

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

export const ProfileSettings: Story = {
  render: () => (
    <Card className="w-full max-w-[600px]">
      <Tabs defaultValue="general" className="p-4 sm:p-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Display Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="john@example.com" type="email" />
          </div>
          <Button>Save Changes</Button>
        </TabsContent>
        <TabsContent value="security" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="current">Current Password</Label>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new">New Password</Label>
            <Input id="new" type="password" />
          </div>
          <Button>Update Password</Button>
        </TabsContent>
        <TabsContent value="notifications" className="mt-4 space-y-4">
          <div className="space-y-4">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive email updates about your account</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge>Enabled</Badge>
                  <Button variant="outlined" size="sm">Configure</Button>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive push notifications on your device</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="plain">Disabled</Badge>
                  <Button variant="outlined" size="sm">Configure</Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  ),
};

export const ProjectDashboard: Story = {
  render: () => (
    <Card className="w-full max-w-[800px]">
      <Tabs defaultValue="overview" className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <h2 className="text-xl sm:text-2xl font-bold">Harbor Technologies Inc.</h2>
          <Button variant="outlined">
            <GearSix className="h-4 w-4" />
            Company Settings
          </Button>
        </div>
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Performance</TabsTrigger>
          <TabsTrigger value="team">Departments</TabsTrigger>
          <TabsTrigger value="budget">Financials</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-4">
              <h3 className="font-medium mb-2">Annual Revenue</h3>
              <p className="text-2xl font-bold">$12.5M</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-2">Total Employees</h3>
              <p className="text-2xl font-bold">347</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-2">Customer Base</h3>
              <p className="text-2xl font-bold">1,240</p>
            </Card>
          </div>
          <Card className="p-4">
            <h3 className="font-medium mb-4">Key Milestones</h3>
            <div className="space-y-4">
              {[
                'Series B Funding Secured - $25M',
                'APAC Market Expansion',
                'ISO 27001 Certification'
              ].map((activity) => (
                <div key={activity} className="flex items-center space-x-4">
                  <Badge variant="outlined">{activity}</Badge>
                  <span className="text-sm text-muted-foreground">Q4 2023</span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="mt-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-4">
              <h3 className="font-medium mb-2">Market Share</h3>
              <p className="text-2xl font-bold">23.5%</p>
              <p className="text-sm text-muted-foreground">+5.2% YoY Growth</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-2">Customer Retention</h3>
              <p className="text-2xl font-bold">94.7%</p>
              <p className="text-sm text-muted-foreground">+2.1% from last quarter</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-2">NPS Score</h3>
              <p className="text-2xl font-bold">78</p>
              <p className="text-sm text-muted-foreground">Industry Avg: 42</p>
            </Card>
          </div>
          <Card className="p-4">
            <h3 className="font-medium mb-4">Revenue by Region</h3>
            <div className="space-y-4">
              {[
                { region: 'North America', share: '45%' },
                { region: 'Europe', share: '30%' },
                { region: 'Asia Pacific', share: '25%' }
              ].map((data) => (
                <div key={data.region} className="flex items-center justify-between">
                  <span>{data.region}</span>
                  <Badge variant="outlined">{data.share}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="team" className="mt-4 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Department Overview</h3>
            <Button size="sm">Add Department</Button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Engineering', head: 'Dr. Lisa Chen', employees: 145, growth: '+12%' },
              { name: 'Sales & Marketing', head: 'Michael Roberts', employees: 89, growth: '+8%' },
              { name: 'Product Development', head: 'Sarah O\'Connor', employees: 63, growth: '+15%' }
            ].map((dept) => (
              <Card key={dept.name} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">{dept.name}</p>
                    <p className="text-sm text-muted-foreground">Head: {dept.head}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="filled">{dept.employees} employees</Badge>
                    <Badge variant="outlined">{dept.growth} YoY</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="budget" className="mt-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-4">
              <h3 className="font-medium mb-2">Annual Budget</h3>
              <p className="text-2xl font-bold">$28.5M</p>
              <p className="text-sm text-muted-foreground">FY 2024</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-2">Q4 Expenditure</h3>
              <p className="text-2xl font-bold">$6.2M</p>
              <p className="text-sm text-muted-foreground">22% of annual budget</p>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-2">Profit Margin</h3>
              <p className="text-2xl font-bold">32.8%</p>
              <p className="text-sm text-muted-foreground">+3.2% YoY</p>
            </Card>
          </div>
          <Card className="p-4">
            <h3 className="font-medium mb-4">Major Investments</h3>
            <div className="space-y-4">
              {[
                { item: 'R&D Initiatives', amount: '$5.2M' },
                { item: 'Infrastructure Upgrade', amount: '$3.8M' },
                { item: 'Market Expansion', amount: '$2.5M' }
              ].map((expense) => (
                <div key={expense.item} className="flex items-center justify-between">
                  <span>{expense.item}</span>
                  <Badge variant="outlined">{expense.amount}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  ),
};
