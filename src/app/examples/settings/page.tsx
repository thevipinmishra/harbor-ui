"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Checkbox, CheckboxGroup } from "@/components/ui/Checkbox";
import { DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import { Label } from "@/components/ui/Label";
import { Input, TextField } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from "@/components/ui/Select";
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/Tabs";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Switch } from "@/components/ui/Switch";
import { Slider, SliderControl, SliderOutput } from "@/components/ui/Slider";
import { DatePicker } from "@/components/ui/Datepicker";
import { Radio, RadioGroup } from "@/components/ui/RadioGroup";
import { ToggleButton } from "@/components/ui/ToggleButton";
import { ToggleButtonGroup } from "@/components/ui/ToggleButtonGroup";
import { Tag, TagGroup, TagList } from "@/components/ui/TagGroup";
import { ProgressBar } from "@/components/ui/Progress";
import { Alert } from "@/components/ui/Alert";
import {
  RiUserLine,
  RiSettings3Line,
  RiDeleteBinLine,
  RiNotification2Line,
  RiLockLine,
  RiPaintBrushLine,
  RiDatabase2Line,
  RiUploadCloud2Line,
  RiDownload2Line,
  RiInformationLine,
  RiCheckLine,
  RiAlignLeft,
  RiAlignCenter,
  RiAlignRight,
} from "@remixicon/react";
import { getLocalTimeZone, today } from "@internationalized/date";

export default function SettingsPage() {
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Japanese",
    "Chinese",
  ];
  const timeZones = [
    "UTC-8 (PST)",
    "UTC-5 (EST)",
    "UTC+0 (GMT)",
    "UTC+1 (CET)",
    "UTC+8 (CST)",
    "UTC+9 (JST)",
  ];
  const dateFormats = ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"];
  const timeFormats = ["12-hour", "24-hour"];
  const emailFrequencies = [
    "Instant",
    "Daily Digest",
    "Weekly Digest",
    "Never",
  ];
  const themes = ["Light", "Dark", "System default"];

  return (
    <main className="py-8 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold">Account Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and settings
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          {saveSuccess && (
            <Alert
              variant="success"
              icon={<RiCheckLine />}
              title="Settings Saved"
              className="animate-in fade-in"
            />
          )}
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>

      <Tabs>
        <TabList aria-label="Settings" className="mb-8">
          <Tab id="tab-profile">
            <RiUserLine className="mr-2 h-4 w-4" /> Profile
          </Tab>
          <Tab id="tab-account">
            <RiSettings3Line className="mr-2 h-4 w-4" /> Account
          </Tab>
          <Tab id="tab-notifications">
            <RiNotification2Line className="mr-2 h-4 w-4" /> Notifications
          </Tab>
          <Tab id="tab-security">
            <RiLockLine className="mr-2 h-4 w-4" /> Security
          </Tab>
          <Tab id="tab-appearance">
            <RiPaintBrushLine className="mr-2 h-4 w-4" /> Appearance
          </Tab>
          <Tab id="tab-data">
            <RiDatabase2Line className="mr-2 h-4 w-4" /> Data
          </Tab>
        </TabList>

        {/* Profile Tab */}
        <TabPanel id="tab-profile">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 col-span-1">
              <div className="flex flex-col items-center gap-4 text-center">
                <Avatar
                  src="https://avatar.iran.liara.run/public/45"
                  size="lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">Alice Johnson</h3>
                  <p className="text-sm text-muted-foreground">
                    Product Manager
                  </p>
                </div>
                <Badge>Admin</Badge>
                <div className="flex gap-2">
                  <Button size="sm" variant="outlined">
                    <RiUploadCloud2Line className="w-4 h-4 mr-1" /> Change Photo
                  </Button>
                  <Button size="sm" variant="destructive">
                    <RiDeleteBinLine className="w-4 h-4 mr-1" /> Remove
                  </Button>
                </div>
              </div>
            </Card>

            <div className="lg:col-span-2 space-y-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TextField>
                    <Label>First Name</Label>
                    <Input defaultValue="Alice" />
                  </TextField>

                  <TextField>
                    <Label>Last Name</Label>
                    <Input defaultValue="Johnson" />
                  </TextField>

                  <TextField>
                    <Label>Email Address</Label>
                    <Input defaultValue="alice.johnson@example.com" />
                  </TextField>

                  <TextField>
                    <Label>Phone Number</Label>
                    <Input defaultValue="+1 (555) 123-4567" />
                  </TextField>

                  <DatePicker label="Date of Birth"   shouldForceLeadingZeros />

                  <Select defaultSelectedKey="dev" placeholder="Select role">
                    <Label>Job Title</Label>
                    <SelectTrigger />
                    <SelectContent>
                      <SelectItem id="dev" textValue="Product Manager">
                        Product Manager
                      </SelectItem>
                      <SelectItem id="design" textValue="Designer">
                        Designer
                      </SelectItem>
                      <SelectItem id="marketing" textValue="Marketing">
                        Marketing
                      </SelectItem>
                      <SelectItem id="sales" textValue="Sales">
                        Sales
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Bio & Skills</h3>
                <div className="space-y-6">
                  <TextField>
                    <Label>Bio</Label>
                    <Input
                      className="min-h-[100px]"
                      defaultValue="Product Manager with 8+ years experience in SaaS and fintech."
                    />
                  </TextField>

                  <TagGroup
                    selectionMode="multiple"
                    defaultSelectedKeys={["react", "product", "leadership"]}
                  >
                    <Label>Skills</Label>
                    <TagList>
                      <Tag key="react" textValue="React">
                        React
                      </Tag>
                      <Tag key="product" textValue="Product Management">
                        Product Management
                      </Tag>
                      <Tag key="leadership" textValue="Leadership">
                        Leadership
                      </Tag>
                      <Tag key="ui" textValue="UI/UX">
                        UI/UX
                      </Tag>
                      <Tag key="figma" textValue="Figma">
                        Figma
                      </Tag>
                    </TagList>
                  </TagGroup>
                </div>
              </Card>
            </div>
          </div>
        </TabPanel>

        {/* Account Tab */}
        <TabPanel id="tab-account">
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Account Preferences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select defaultSelectedKey="en" placeholder="Select language">
                  <Label>Language</Label>
                  <SelectTrigger />
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem
                        key={lang.toLowerCase()}
                        id={lang.toLowerCase()}
                        textValue={lang}
                      >
                        {lang}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select defaultSelectedKey="utc0" placeholder="Select timezone">
                  <Label>Time Zone</Label>
                  <SelectTrigger />
                  <SelectContent>
                    {timeZones.map((zone, index) => (
                      <SelectItem
                        key={`utc${index}`}
                        id={`utc${index}`}
                        textValue={zone}
                      >
                        {zone}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <RadioGroup defaultValue="mm/dd/yyyy">
                  <Label>Date Format</Label>
                  {dateFormats.map((format) => (
                    <Radio
                      key={format.toLowerCase().replace(/\//g, "")}
                      value={format.toLowerCase().replace(/\//g, "")}
                    >
                      {format}
                    </Radio>
                  ))}
                </RadioGroup>

                <RadioGroup defaultValue="12hour">
                  <Label>Time Format</Label>
                  {timeFormats.map((format) => (
                    <Radio
                      key={format.replace("-", "")}
                      value={format.replace("-", "")}
                    >
                      {format}
                    </Radio>
                  ))}
                </RadioGroup>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Subscription</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Current Plan</Label>
                  <div className="flex items-center mt-2 gap-2">
                    <Badge variant="plain">Pro</Badge>
                    <span className="text-sm">$15/month</span>
                  </div>
                </div>

                <div>
                  <Label>Next Billing Date</Label>
                  <p className="mt-2">November 15, 2023</p>
                </div>

                <div className="md:col-span-2">
                  <Button variant="outlined">Upgrade Plan</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-destructive">
                Danger Zone
              </h3>
              <div className="space-y-6">
                <DialogTrigger>
                  <Button variant="destructive">Delete Account</Button>
                  <DialogContent>
                    {({ close }) => (
                      <div className="grid gap-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold text-destructive">
                            Confirm Account Deletion
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Are you sure you want to delete your account? This
                            action cannot be undone and all your data will be
                            permanently lost.
                          </p>
                        </div>
                        <TextField>
                          <Label>Type "DELETE" to confirm</Label>
                          <Input placeholder="DELETE" />
                        </TextField>
                        <div className="flex justify-end gap-2 pt-2">
                          <Button variant="secondary" onPress={close}>
                            Cancel
                          </Button>
                          <Button variant="destructive">
                            Permanently Delete Account
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </DialogTrigger>
              </div>
            </Card>
          </div>
        </TabPanel>

        {/* Notifications Tab */}
        <TabPanel id="tab-notifications">
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Email Notifications
              </h3>
              <CheckboxGroup>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Checkbox defaultSelected value="product_updates">
                    Product Updates
                  </Checkbox>
                  <Checkbox defaultSelected value="security_alerts">
                    Security Alerts
                  </Checkbox>
                  <Checkbox defaultSelected value="account_activity">
                    Account Activity
                  </Checkbox>
                  <Checkbox defaultSelected value="new_features">
                    New Features
                  </Checkbox>
                  <Checkbox value="marketing">Marketing & Promotions</Checkbox>
                  <Checkbox value="blog_posts">Blog Posts</Checkbox>
                </div>
              </CheckboxGroup>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">App Notifications</h3>
              <div className="space-y-6">
                <RadioGroup defaultValue="instant">
                  <Label>Email Digest Frequency</Label>
                  {emailFrequencies.map((freq) => (
                    <Radio key={freq.toLowerCase()} value={freq.toLowerCase()}>
                      {freq}
                    </Radio>
                  ))}
                </RadioGroup>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Switch defaultSelected>Push Notifications</Switch>
                  <Switch defaultSelected>In-app Notifications</Switch>
                  <Switch>Sound Alerts</Switch>
                  <Switch defaultSelected>Desktop Notifications</Switch>
                </div>

                <Slider defaultValue={[85]} className="max-w-md">
                  <div className="flex gap-4 justify-between">
                    <Label>Notification Volume</Label>
                    <SliderOutput />
                  </div>
                  <SliderControl />
                </Slider>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quiet Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Switch defaultSelected>Enable Quiet Hours</Switch>

                <div className="grid grid-cols-2 gap-4">
                  <TextField>
                    <Label>Start Time</Label>
                    <Input defaultValue="22:00" />
                  </TextField>

                  <TextField>
                    <Label>End Time</Label>
                    <Input defaultValue="07:00" />
                  </TextField>
                </div>

                <div className="md:col-span-2">
                  <CheckboxGroup
                    defaultValue={["mon", "tue", "wed", "thu", "fri"]}
                  >
                    <Label>Active Days</Label>
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                      <Checkbox value="mon">Mon</Checkbox>
                      <Checkbox value="tue">Tue</Checkbox>
                      <Checkbox value="wed">Wed</Checkbox>
                      <Checkbox value="thu">Thu</Checkbox>
                      <Checkbox value="fri">Fri</Checkbox>
                      <Checkbox value="sat">Sat</Checkbox>
                      <Checkbox value="sun">Sun</Checkbox>
                    </div>
                  </CheckboxGroup>
                </div>
              </div>
            </Card>
          </div>
        </TabPanel>

        {/* Security Tab */}
        <TabPanel id="tab-security">
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Password</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField>
                  <Label>Current Password</Label>
                  <Input type="password" />
                </TextField>

                <div className="md:col-span-1"></div>

                <TextField>
                  <Label>New Password</Label>
                  <Input type="password" />
                </TextField>

                <TextField>
                  <Label>Confirm New Password</Label>
                  <Input type="password" />
                </TextField>

                <Button className="md:col-span-2 w-fit">Change Password</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Two-Factor Authentication
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      Two-factor authentication is enabled
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Your account is protected with an authenticator app
                    </p>
                  </div>
                  <Switch defaultSelected />
                </div>

                <Alert
                  variant="info"
                  icon={<RiInformationLine />}
                  title="Security Tip"
                  description="We recommend using an authenticator app like Google Authenticator or Authy for the most secure experience."
                />

                <div>
                  <Button variant="outlined">Setup New Device</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Session Management</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <p className="font-medium">Current Session</p>
                    <p className="text-sm text-muted-foreground">
                      Chrome on Windows • IP: 192.168.1.1
                    </p>
                  </div>
                  <Badge>Active Now</Badge>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <p className="font-medium">Mobile App</p>
                    <p className="text-sm text-muted-foreground">
                      iOS • Last active: 2 hours ago
                    </p>
                  </div>
                  <Button size="sm" variant="destructive">
                    Revoke
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <p className="font-medium">Firefox</p>
                    <p className="text-sm text-muted-foreground">
                      macOS • Last active: 3 days ago
                    </p>
                  </div>
                  <Button size="sm" variant="destructive">
                    Revoke
                  </Button>
                </div>

                <Button variant="outlined">Sign Out All Other Sessions</Button>
              </div>
            </Card>
          </div>
        </TabPanel>

        {/* Appearance Tab */}
        <TabPanel id="tab-appearance">
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Theme</h3>
              <RadioGroup defaultValue="system">
                <Label>Select Theme</Label>
                {themes.map((theme) => (
                  <Radio
                    key={theme.toLowerCase().replace(" ", "-")}
                    value={theme.toLowerCase().replace(" ", "-")}
                  >
                    {theme}
                  </Radio>
                ))}
              </RadioGroup>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Interface Density</h3>
              <div className="space-y-6">
                <Select
                  defaultSelectedKey="comfortable"
                  placeholder="Select density"
                >
                  <Label>Interface Density</Label>
                  <SelectTrigger />
                  <SelectContent>
                    <SelectItem id="compact" textValue="Compact">
                      Compact
                    </SelectItem>
                    <SelectItem id="comfortable" textValue="Comfortable">
                      Comfortable
                    </SelectItem>
                    <SelectItem id="spacious" textValue="Spacious">
                      Spacious
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Slider defaultValue={[100]} className="max-w-md">
                  <div className="flex gap-4 justify-between">
                    <Label>Text Size</Label>
                    <SliderOutput />
                  </div>
                  <SliderControl />
                </Slider>

                <Label>Text Alignment</Label>
                <ToggleButtonGroup
                  selectionMode="single"
                  defaultSelectedKeys={["left"]}
                >
                  {({ state }) => (
                    <>
                      <ToggleButton
                        id="left"
                        aria-label="Align Left"
                        variant={
                          state.selectedKeys.has("left")
                            ? "primary"
                            : "outlined"
                        }
                      >
                        <RiAlignLeft />
                      </ToggleButton>
                      <ToggleButton
                        id="center"
                        aria-label="Align Center"
                        variant={
                          state.selectedKeys.has("center")
                            ? "primary"
                            : "outlined"
                        }
                      >
                        <RiAlignCenter />
                      </ToggleButton>
                      <ToggleButton
                        id="right"
                        aria-label="Align Right"
                        variant={
                          state.selectedKeys.has("right")
                            ? "primary"
                            : "outlined"
                        }
                      >
                        <RiAlignRight />
                      </ToggleButton>
                    </>
                  )}
                </ToggleButtonGroup>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Accessibility</h3>
              <div className="space-y-4">
                <Switch defaultSelected>High Contrast Mode</Switch>
                <Switch>Reduce Motion</Switch>
                <Switch>Screen Reader Optimizations</Switch>
              </div>
            </Card>
          </div>
        </TabPanel>

        {/* Data Tab */}
        <TabPanel id="tab-data">
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Storage Usage</h3>
              <div className="space-y-6">
                <ProgressBar
                  label="Storage Used"
                  value={68}
                  valueLabel="6.8 GB of 10 GB"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border p-3 rounded-md">
                    <p className="text-sm font-medium">Documents</p>
                    <p className="text-2xl font-bold">2.3 GB</p>
                  </div>
                  <div className="border p-3 rounded-md">
                    <p className="text-sm font-medium">Images</p>
                    <p className="text-2xl font-bold">3.7 GB</p>
                  </div>
                  <div className="border p-3 rounded-md">
                    <p className="text-sm font-medium">Other</p>
                    <p className="text-2xl font-bold">0.8 GB</p>
                  </div>
                </div>

                <Button variant="outlined">
                  <RiDatabase2Line className="w-4 h-4 mr-1" />
                  Manage Storage
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Import & Export Data
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Import Data</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Import data from another service or source.
                  </p>
                  <Button variant="outlined">
                    <RiUploadCloud2Line className="w-4 h-4 mr-1" /> Upload File
                  </Button>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Export Data</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Download a copy of all your data.
                  </p>
                  <Button variant="outlined">
                    <RiDownload2Line className="w-4 h-4 mr-1" /> Export All Data
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Data Retention</h3>
              <div className="space-y-6">
                <Select
                  defaultSelectedKey="90days"
                  placeholder="Select retention period"
                >
                  <Label>Log Data Retention</Label>
                  <SelectTrigger />
                  <SelectContent>
                    <SelectItem id="30days" textValue="30 days">
                      30 days
                    </SelectItem>
                    <SelectItem id="90days" textValue="90 days">
                      90 days
                    </SelectItem>
                    <SelectItem id="1year" textValue="1 year">
                      1 year
                    </SelectItem>
                    <SelectItem id="forever" textValue="Forever">
                      Forever
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Alert
                  variant="warning"
                  title="Important"
                  description="Shortening your data retention period may result in the permanent deletion of older data."
                />

                <Button variant="destructive" size="sm">
                  <RiDeleteBinLine className="w-4 h-4 mr-1" /> Clear All Data
                </Button>
              </div>
            </Card>
          </div>
        </TabPanel>
      </Tabs>
    </main>
  );
}
