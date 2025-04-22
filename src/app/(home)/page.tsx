"use client";

import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Checkbox, CheckboxGroup } from "@/components/ui/Checkbox";
import { DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import { Label } from "@/components/ui/Label";
import { ListBox, ListBoxItem } from "@/components/ui/ListBox";
import { Menu, MenuItem, MenuTrigger } from "@/components/ui/Menu";
import { Popover, PopoverTrigger } from "@/components/ui/Popover";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from "@/components/ui/Select";
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/Tabs";
import { Tooltip, TooltipTrigger } from "@/components/ui/Tooltip";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

import ComponentBox from "@/components/web/component-box";
import { Slider, SliderControl, SliderOutput } from "@/components/ui/Slider";
import { Input, TextField } from "@/components/ui/Input";
import {  FileTrigger, Form, useFilter } from "react-aria-components";
import { Calendar } from "@/components/ui/Calendar";
import { DatePicker } from "@/components/ui/Datepicker";
import { Radio, RadioGroup } from "@/components/ui/RadioGroup";
import { NumberField } from "@/components/ui/NumberField";
import { SearchField } from "@/components/ui/SearchField";
import {
  ComboBox,
  ComboBoxContent,
  ComboBoxItem,
  ComboBoxTrigger,
} from "@/components/ui/ComboBox";
import { ToggleButton } from "@/components/ui/ToggleButton";
import {
  RiBookmarkFill,
  RiBookmarkLine,
  RiInformationLine,
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
  RiUserLine,
  RiSettings3Line,
  RiLogoutBoxLine,
  RiDeleteBinLine,
  RiFilter3Line,
  RiAddLine,
  RiUploadCloud2Line,
  RiDatabase2Line,
  RiCheckLine,
  RiAlertLine,
  RiCloseCircleLine,
  RiSendPlaneLine,
} from "@remixicon/react";
import { ToggleButtonGroup } from "@/components/ui/ToggleButtonGroup";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteItem,
} from "@/components/ui/Autocomplete";
import { DateField } from "@/components/ui/DateField";
import { Meter } from "@/components/ui/Meter";
import { Tag, TagGroup, TagList } from "@/components/ui/TagGroup";
import { ProgressBar } from "@/components/ui/Progress";
import { Switch } from "@/components/ui/Switch";
import { RangeCalendar } from "@/components/ui/RangeCalendar";
import { Alert } from "@/components/ui/Alert";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { DateRangePicker } from "@/components/ui/DateRangePicker";
import { Carousel } from "@/components/ui/Carousel";

export default function HomePage() {
  const users = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Williams" },
    { id: 3, name: "Charlie Brown" },
    { id: 4, name: "Diana Garcia" },
    { id: 5, name: "Ethan Rodriguez" },
  ];
  const projectStatuses = [
    "Not Started",
    "In Progress",
    "Completed",
    "On Hold",
  ];
  const issueLabels = [
    "Bug",
    "Feature",
    "Improvement",
    "Documentation",
    "Help Wanted",
  ];
  const priorities = ["Low", "Medium", "High", "Urgent"];
  const shippingMethods = ["Standard", "Express", "Next Day"];
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "CSS",
    "HTML",
    "SQL",
    "Python",
  ];

  const { contains } = useFilter({ sensitivity: "base" });

  return (
    <main className="py-10 container max-w-3xl space-y-10">
      <div className="flex justify-end mb-6">
        <ThemeSwitcher />
      </div>

      {/* Basic Elements */}
      <ComponentBox title="Button">
        <div className="flex flex-wrap items-center gap-4">
          <Button>
            <RiAddLine className="w-4 h-4 mr-1" /> Create Project
          </Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="outlined">
            <RiFilter3Line className="w-4 h-4 mr-1" /> Filter Results
          </Button>
          <Button variant="destructive">
            <RiDeleteBinLine className="w-4 h-4 mr-1" /> Delete Account
          </Button>
          <Button isLoading>Processing...</Button>
          <Button isDisabled>Submit Application</Button>
        </div>
      </ComponentBox>
      <ComponentBox title="FileTrigger">
        <FileTrigger allowsMultiple>
          <Button variant="outlined">
            <RiUploadCloud2Line className="w-4 h-4 mr-1" /> Upload Documents
          </Button>
        </FileTrigger>
      </ComponentBox>

      <ComponentBox title="Popover">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feedback Popover */}
          <PopoverTrigger>
            <Button>Leave Feedback</Button>
            <Popover>
              <Form className="grid gap-4 w-72">
                <h3 className="text-lg font-semibold">Share Your Thoughts</h3>

                <Select placeholder="Select type">
                  <Label>Feedback Type</Label>
                  <SelectTrigger size="sm" />

                  <SelectContent>
                    <SelectItem textValue="bug">Bug Report</SelectItem>
                    <SelectItem textValue="feature">Feature Request</SelectItem>
                    <SelectItem textValue="general">
                      General Feedback
                    </SelectItem>
                  </SelectContent>
                </Select>

                <TextField isRequired>
                  <Label>Your Feedback</Label>
                  <Input placeholder="Describe your experience..." />
                </TextField>
                <div className="flex justify-end gap-2">
                  <Button variant="secondary" size="sm">
                    Cancel
                  </Button>
                  <Button type="submit" size="sm">
                    Submit Feedback
                  </Button>
                </div>
              </Form>
            </Popover>
          </PopoverTrigger>

          {/* Settings Popover */}
          <PopoverTrigger>
            <Button variant="secondary">
              <RiSettings3Line className="w-4 h-4 mr-1" /> App Settings
            </Button>
            <Popover>
              <Form className="grid gap-4 w-80">
                <h3 className="text-lg font-semibold mb-2">
                  Application Settings
                </h3>
                <Switch>Enable Dark Mode</Switch>
                <CheckboxGroup defaultValue={["mentions", "updates"]}>
                  <Label>Email Notifications For:</Label>
                  <Checkbox value="mentions">Mentions</Checkbox>
                  <Checkbox value="comments">New Comments</Checkbox>
                  <Checkbox value="updates">Product Updates</Checkbox>
                </CheckboxGroup>
                <Select
                  placeholder="Select frequency"
                  defaultSelectedKey="daily"
                >
                  <Label>Notification Frequency</Label>
                  <SelectTrigger size="sm" />
                  <SelectContent>
                    <SelectItem id="instant" textValue="instant">
                      Instant
                    </SelectItem>
                    <SelectItem id="daily" textValue="daily">
                      Daily Digest
                    </SelectItem>
                    <SelectItem id="weekly" textValue="weekly">
                      Weekly Digest
                    </SelectItem>
                    <SelectItem id="never" textValue="never">
                      Never
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Slider defaultValue={70}>
                  <Label>UI Scale</Label>

                  <SliderControl />
                </Slider>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="secondary" size="sm">
                    Reset Defaults
                  </Button>
                  <Button type="submit" size="sm">
                    Save Settings
                  </Button>
                </div>
              </Form>
            </Popover>
          </PopoverTrigger>
        </div>
      </ComponentBox>

      <ComponentBox fullWidth title="Accordion">
        <Accordion allowsMultipleExpanded>
          <AccordionItem id="feature-1">
            <AccordionItemTrigger>
              Real-time Collaboration Tools
            </AccordionItemTrigger>
            <AccordionItemContent>
              <p>
                Work together seamlessly with shared cursors, live commenting,
                and version history. See changes from your teammates instantly
                and resolve conflicts effortlessly. Supports up to 50 concurrent
                editors.
              </p>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="feature-2">
            <AccordionItemTrigger>
              Advanced Analytics Dashboard
            </AccordionItemTrigger>
            <AccordionItemContent>
              <p>
                Gain deep insights into your project performance with
                customizable widgets, trend analysis, and data export options.
                Track key metrics like task completion rates, user engagement,
                and resource allocation. Integrates with popular BI tools.
              </p>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="feature-3">
            <AccordionItemTrigger>
              Integrated Project Management
            </AccordionItemTrigger>
            <AccordionItemContent>
              <p>
                Manage tasks, deadlines, and milestones all in one place.
                Utilize Gantt charts, Kanban boards, and calendar views to
                visualize progress. Assign tasks, set dependencies, and receive
                automated reminders for upcoming deadlines.
              </p>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="feature-4">
            <AccordionItemTrigger>Secure Cloud Storage</AccordionItemTrigger>
            <AccordionItemContent>
              <p>
                Store all your project files securely with end-to-end encryption
                and granular access controls. Benefit from automatic backups,
                versioning, and easy sharing options. Compliant with industry
                standards like SOC 2 and ISO 27001.
              </p>
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
      </ComponentBox>

      <ComponentBox title="Tooltip">
        <TooltipTrigger>
          <Button size="icon-md" variant="primary" aria-label="User Profile">
            <RiUserLine />
          </Button>
          <Tooltip>
            <p>View your profile and account settings.</p>
          </Tooltip>
        </TooltipTrigger>
      </ComponentBox>

      <ComponentBox title="Dialog">
        <div className="flex flex-wrap gap-4">
          {/* Existing Delete Project Dialog */}
          <DialogTrigger>
            <Button variant="destructive">Delete Project</Button>
            <DialogContent>
              {({ close }) => (
                <div className="grid gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">
                      Confirm Project Deletion
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Are you absolutely sure you want to delete the 'Q3
                      Marketing Campaign' project? This action cannot be undone
                      and all associated data will be permanently lost.
                    </p>
                  </div>
                  <TextField>
                    <Label>Type "DELETE" to confirm</Label>
                    <Input placeholder="DELETE" />
                    {/* Add validation logic here */}
                  </TextField>
                  <div className="flex justify-end gap-2 pt-2">
                    <Button variant="secondary" onPress={close}>
                      Cancel
                    </Button>
                    <Button variant="destructive" onPress={close}>
                      {" "}
                      {/* Add isDisabled based on input validation */}
                      Yes, Delete Project
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </DialogTrigger>

          {/* New Publish Article Dialog */}
          <DialogTrigger>
            <Button variant="primary">
              <RiSendPlaneLine className="w-4 h-4 mr-1" /> Publish Article
            </Button>
            <DialogContent>
              {({ close }) => (
                <div className="grid gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">
                      Confirm Publication
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Ready to publish the article "The Future of Web
                      Development"? Once published, it will be visible to all
                      visitors.
                    </p>
                  </div>
                  <Checkbox>Notify subscribers via email</Checkbox>
                  <DatePicker label="Schedule publication for (optional)" />
                  <div className="flex justify-end gap-2 pt-2">
                    <Button variant="secondary" onPress={close}>
                      Save Draft
                    </Button>
                    <Button variant="primary" onPress={close}>
                      Publish Now
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </DialogTrigger>
        </div>
      </ComponentBox>

      <ComponentBox title="Checkbox">
        <Checkbox>I agree to the Terms of Service and Privacy Policy.</Checkbox>
      </ComponentBox>

      <ComponentBox title="CheckboxGroup">
        <CheckboxGroup defaultValue={["tech", "design"]}>
          <Label>Select Your Interests</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Checkbox value="tech">Technology</Checkbox>
            <Checkbox value="design">Design</Checkbox>
            <Checkbox value="business">Business</Checkbox>
            <Checkbox value="marketing">Marketing</Checkbox>
            <Checkbox value="finance">Finance</Checkbox>
            <Checkbox value="health">Health & Wellness</Checkbox>
          </div>
        </CheckboxGroup>
      </ComponentBox>

      <ComponentBox title="Select">
        <Select placeholder="Select status" className={"w-[200px]"}>
          <Label>Filter Tasks By Status</Label>
          <SelectTrigger size="sm" />
          <SelectContent>
            {projectStatuses.map((status) => (
              <SelectItem
                key={status.toLowerCase().replace(" ", "-")}
                textValue={status}
              >
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </ComponentBox>

      <ComponentBox title="ComboBox">
        <ComboBox className={"w-[250px]"}>
          <Label>Assign Task To</Label>
          <ComboBoxTrigger size="sm" placeholder="Search user..." />
          <ComboBoxContent>
            {users.map((user) => (
              <ComboBoxItem key={user.id} textValue={user.name}>
                {user.name}
              </ComboBoxItem>
            ))}
          </ComboBoxContent>
        </ComboBox>
      </ComponentBox>

      <ComponentBox title="Listbox">
        <ListBox
          aria-label="Select Task Priority"
          className="w-[200px]"
          selectionMode="single"
          defaultSelectedKeys={["medium"]}
        >
          <Label>Set Priority</Label>
          {priorities.map((p) => (
            <ListBoxItem key={p.toLowerCase()} textValue={p}>
              {p}
            </ListBoxItem>
          ))}
        </ListBox>
      </ComponentBox>

      <ComponentBox title="Menu">
        <MenuTrigger>
          <Button variant="secondary">
            <RiUserLine className="w-4 h-4 mr-1" /> User Menu
          </Button>
          <Menu>
            <MenuItem>
              <RiUserLine /> Profile
            </MenuItem>
            <MenuItem>
              <RiSettings3Line /> Settings
            </MenuItem>
            <MenuItem isDisabled>
              <RiDatabase2Line /> Billing
            </MenuItem>
            <MenuItem>
              <RiLogoutBoxLine className="text-destructive" />
              Logout
            </MenuItem>
          </Menu>
        </MenuTrigger>
      </ComponentBox>

      <ComponentBox fullWidth title="Tabs">
        <Tabs>
          <TabList aria-label="Project Information">
            <Tab id="tab-overview">Overview</Tab>
            <Tab id="tab-tasks">Tasks (12)</Tab>
            <Tab id="tab-files">Files (5)</Tab>
            <Tab id="tab-settings">Settings</Tab>
          </TabList>
          <TabPanel id="tab-overview">
            <div className="p-4 space-y-2">
              <h4 className="font-semibold">Project Summary</h4>
              <p>This project aims to redesign the company website...</p>
              <p>Deadline: 2024-12-31</p>
            </div>
          </TabPanel>
          <TabPanel id="tab-tasks">
            <p className="p-4">List of project tasks goes here...</p>
          </TabPanel>
          <TabPanel id="tab-files">
            <p className="p-4">List of project files goes here...</p>
          </TabPanel>
          <TabPanel id="tab-settings">
            <p className="p-4">Project settings form goes here...</p>
          </TabPanel>
        </Tabs>
      </ComponentBox>

      <ComponentBox title="Switch">
        <Switch defaultSelected>
          Enable Two-Factor Authentication (Recommended)
        </Switch>
      </ComponentBox>

      <ComponentBox fullWidth title="Slider">
        <Slider defaultValue={[20, 80]} className="max-w-md">
          <div className="flex gap-4 justify-between">
            <Label>Filter Price Range ($)</Label>
            <SliderOutput />
          </div>
          <SliderControl />
        </Slider>
      </ComponentBox>

      <ComponentBox title="Calendar">
        <Form className="space-y-2">
          <Label>Select Event Date</Label>
          <Calendar />
        </Form>
      </ComponentBox>

      <ComponentBox title="RangeCalendar">
        <Form className="space-y-2">
          <Label>Select Booking Dates</Label>
          <RangeCalendar />
        </Form>
      </ComponentBox>

      <ComponentBox title="TextField">
        <TextField className="w-[300px]" isRequired>
          <Label>Project Name</Label>
          <Input placeholder="Enter a descriptive name" />
        </TextField>
      </ComponentBox>

      <ComponentBox title="NumberField">
        <NumberField
          label="Order Quantity"
          defaultValue={1}
          minValue={1}
          maxValue={10}
        />
      </ComponentBox>

      <ComponentBox title="SearchField">
        <SearchField
          className={"w-[250px]"}
          label="Search Users"
          inputProps={{
            placeholder: "Enter name or email",
          }}
        />
      </ComponentBox>

      <ComponentBox title="DateField">
        <DateField shouldForceLeadingZeros label="Project Start Date" />
      </ComponentBox>

      <ComponentBox title="DatePicker">
        <DatePicker shouldForceLeadingZeros label="Task Due Date" />
      </ComponentBox>

      <ComponentBox title="DateRangePicker">
        <DateRangePicker shouldForceLeadingZeros label="Project Timeline" />
      </ComponentBox>

      <ComponentBox title="RadioGroup">
        <RadioGroup defaultValue="standard">
          <Label>Select Shipping Method</Label>
          {shippingMethods.map((method) => (
            <Radio key={method.toLowerCase()} value={method.toLowerCase()}>
              {method}
            </Radio>
          ))}
        </RadioGroup>
      </ComponentBox>

      <ComponentBox title="ToggleButton">
        <ToggleButton variant="outlined">
          {({ isSelected }) => (
            <>
              {isSelected ? <RiBookmarkFill /> : <RiBookmarkLine />}
              <span className="ml-1">
                {isSelected ? "Saved" : "Save for Later"}
              </span>
            </>
          )}
        </ToggleButton>
      </ComponentBox>

      <ComponentBox title="ToggleButtonGroup">
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
                  state.selectedKeys.has("left") ? "primary" : "outlined"
                }
              >
                <RiAlignLeft />
              </ToggleButton>
              <ToggleButton
                id="center"
                aria-label="Align Center"
                variant={
                  state.selectedKeys.has("center") ? "primary" : "outlined"
                }
              >
                <RiAlignCenter />
              </ToggleButton>
              <ToggleButton
                id="right"
                aria-label="Align Right"
                variant={
                  state.selectedKeys.has("right") ? "primary" : "outlined"
                }
              >
                <RiAlignRight />
              </ToggleButton>
            </>
          )}
        </ToggleButtonGroup>
      </ComponentBox>

      <ComponentBox title="Autocomplete">
        <Autocomplete filter={contains}>
          <SearchField
            label="Add Skill"
            inputProps={{
              placeholder: "Type a skill...",
            }}
          />
          <AutocompleteContent className="mt-2 w-[--trigger-width]">
            {skills.map((skill) => (
              <AutocompleteItem key={skill.toLowerCase().replace(/\s+/g, "-")}>
                {skill}
              </AutocompleteItem>
            ))}
          </AutocompleteContent>
        </Autocomplete>
      </ComponentBox>

      <ComponentBox fullWidth title="Meter">
        <Meter
          label="Cloud Storage Used"
          value={85}
          valueLabel="850 GB / 1 TB"
        />
      </ComponentBox>

      <ComponentBox fullWidth title="ProgressBar">
        <ProgressBar label="Syncing account data..." value={45} />
      </ComponentBox>

      <ComponentBox fullWidth title="TagGroup">
        <TagGroup selectionMode="multiple">
          <Label>Assign Labels to Issue</Label>
          <TagList>
            {issueLabels.map((label) => (
              <Tag key={label.toLowerCase()} textValue={label}>
                {label}
              </Tag>
            ))}
          </TagList>
        </TagGroup>
      </ComponentBox>

      <ComponentBox fullWidth title="Alert">
        <div className="grid gap-4">
          {/* Default */}
          <Alert
            title="Default Alert"
            description="This is a standard alert."
          />

          {/* Info */}
          <Alert
            variant="info"
            icon={<RiInformationLine />}
            title="Informational Alert"
            description="Here's some helpful information you might need."
          />

          {/* Success */}
          <Alert
            variant="success"
            icon={<RiCheckLine />}
            title="Success!"
            description="Your profile has been updated successfully."
          />

          {/* Warning */}
          <Alert
            variant="warning"
            icon={<RiAlertLine />}
            title="Warning: Low Disk Space"
            description="Your cloud storage is almost full. Consider upgrading or deleting files."
          />

          {/* Destructive */}
          <Alert
            variant="destructive"
            icon={<RiCloseCircleLine />}
            title="Error: Deletion Failed"
            description="Could not delete the project. Please try again later."
          />
        </div>
      </ComponentBox>

      <ComponentBox title="Avatar">
        <div className="flex gap-4">
          <Avatar src="https://avatar.iran.liara.run/public/45" />
          <Avatar src="https://avatar.iran.liara.run/public/37" />
        </div>
      </ComponentBox>

      <ComponentBox title="Badge">
        <div className="flex flex-wrap gap-4 items-center">
          <Badge>Active</Badge>
          <Badge variant="outlined">Draft</Badge>
          <Badge variant="plain">UI/UX</Badge>
          <Badge variant="destructive">Failed</Badge>
        </div>
      </ComponentBox>

      <ComponentBox title="Card">
        <Card>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar src="https://avatar.iran.liara.run/public/45" size="md" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg">Alice Johnson</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Product Designer
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Alice is a passionate product designer with 8+ years of experience
              in SaaS and fintech. She loves crafting delightful user
              experiences and mentoring junior designers.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="plain">UI/UX</Badge>
              <Badge variant="plain">Figma</Badge>
              <Badge variant="plain">Leadership</Badge>
              <Badge variant="plain">Accessibility</Badge>
            </div>
            <div className="flex gap-2 justify-end mt-2">
              <Button size="sm" variant="secondary">
                <RiUserLine className="w-4 h-4 mr-1" />
                View Profile
              </Button>
              <Button size="sm" variant="primary">
                <RiSendPlaneLine className="w-4 h-4 mr-1" />
                Message
              </Button>
            </div>
          </div>
        </Card>
      </ComponentBox>

      <ComponentBox title="Carousel" fullWidth>
        <Carousel className="max-w-3xl mx-auto">
          <Carousel.Slide>
            <Card>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground">
                  Work seamlessly with your team members in real-time.
                </p>
              </div>
            </Card>
          </Carousel.Slide>
          
          <Carousel.Slide>
            <Card>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Advanced Analytics</h3>
                <p className="text-muted-foreground">
                  Gain valuable insights through customizable dashboards.
                </p>
              </div>
            </Card>
          </Carousel.Slide>
          
          <Carousel.Slide>
            <Card>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Data protection with industry-leading security practices.
                </p>
              </div>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </ComponentBox>
    </main>
  );
}
