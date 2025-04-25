"use client";

import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/Accordion";
import { Alert } from "@/components/ui/Alert";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteItem,
} from "@/components/ui/Autocomplete";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { Card } from "@/components/ui/Card";
import { Carousel, useDotButton } from "@/components/ui/Carousel";
import { Checkbox, CheckboxGroup } from "@/components/ui/Checkbox";
import {
  ComboBox,
  ComboBoxContent,
  ComboBoxItem,
  ComboBoxTrigger,
} from "@/components/ui/ComboBox";
import { DateField } from "@/components/ui/DateField";
import { DatePicker } from "@/components/ui/Datepicker";
import { DateRangePicker } from "@/components/ui/DateRangePicker";
import { DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import { Input, TextField } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { ListBox, ListBoxItem } from "@/components/ui/ListBox";
import {
  Menu,
  MenuItem,
  MenuTrigger,
  SubmenuTrigger,
} from "@/components/ui/Menu";
import { Meter } from "@/components/ui/Meter";
import { NumberField } from "@/components/ui/NumberField";
import { Popover, PopoverTrigger } from "@/components/ui/Popover";
import { ProgressBar } from "@/components/ui/Progress";
import { Radio, RadioGroup } from "@/components/ui/RadioGroup";
import { RangeCalendar } from "@/components/ui/RangeCalendar";
import { SearchField } from "@/components/ui/SearchField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/Select";
import { Slider, SliderControl, SliderOutput } from "@/components/ui/Slider";
import { Switch } from "@/components/ui/Switch";
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/Tabs";
import { Tag, TagGroup, TagList } from "@/components/ui/TagGroup";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { ToggleButton } from "@/components/ui/ToggleButton";
import { ToggleButtonGroup } from "@/components/ui/ToggleButtonGroup";
import { Tooltip, TooltipTrigger } from "@/components/ui/Tooltip";
import ComponentBox from "@/components/web/component-box";
import { cn } from "@/lib/tv.config";
import { getLocalTimeZone, today } from "@internationalized/date";
import {
  RiAddLine,
  RiAlertLine,
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
  RiArrowRightSLine,
  RiBookmarkFill,
  RiBookmarkLine,
  RiCheckLine,
  RiCloseCircleLine,
  RiDatabase2Line,
  RiDeleteBinLine,
  RiFilter3Line,
  RiInformationLine,
  RiLogoutBoxLine,
  RiMailLine,
  RiSendPlaneLine,
  RiSettings3Line,
  RiUploadCloud2Line,
  RiUserLine,
} from "@remixicon/react";
import { EmblaCarouselType } from "embla-carousel";
import * as React from "react";
import { FileTrigger, Form, useFilter } from "react-aria-components";

// Mock Data
const users = [
  { id: 1, name: "Alice Johnson", role: "Product Manager" },
  { id: 2, name: "Bob Williams", role: "Frontend Developer" },
  { id: 3, name: "Charlie Brown", role: "Backend Developer" },
  { id: 4, name: "Diana Garcia", role: "UX Designer" },
  { id: 5, name: "Ethan Rodriguez", role: "QA Engineer" },
];
const projectStatuses = [
  "Not Started",
  "In Progress",
  "Completed",
  "On Hold",
  "Cancelled",
];
const issueLabels = [
  "Bug",
  "Feature Request",
  "Improvement",
  "Documentation",
  "Help Wanted",
  "UI/UX",
  "Backend",
  "Frontend",
];
const priorities = ["Low", "Medium", "High", "Urgent"];
const shippingMethods = ["Standard", "Express", "Next Day", "Store Pickup"];
const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "CSS",
  "HTML",
  "SQL",
  "Python",
  "AWS",
  "Docker",
  "Figma",
];
const faqItems = [
  {
    id: "faq-1",
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking the 'Forgot Password' link on the login page. Follow the instructions sent to your registered email address.",
  },
  {
    id: "faq-2",
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Specific options may vary by region.",
  },
  {
    id: "faq-3",
    question: "How can I track my order?",
    answer:
      "Once your order ships, you will receive an email with a tracking number and a link to the carrier's website. You can also track your order status in your account dashboard.",
  },
  {
    id: "faq-4",
    question: "What is the return policy?",
    answer:
      "We offer a 30-day return policy for most items. Please visit our Returns & Exchanges page for detailed information and instructions.",
  },
];
const teamMembers = [
  {
    id: "tm-1",
    name: "Alice Johnson",
    role: "Product Designer",
    avatar: "https://avatar.iran.liara.run/public/45",
    bio: "Alice is a passionate product designer with 8+ years of experience in SaaS and fintech. She loves crafting delightful user experiences.",
    skills: ["UI/UX", "Figma", "Leadership", "Accessibility"],
  },
  {
    id: "tm-2",
    name: "Bob Williams",
    role: "Lead Frontend Engineer",
    avatar: "https://avatar.iran.liara.run/public/37",
    bio: "Bob leads the frontend team, specializing in React and performance optimization. He enjoys building scalable and maintainable UIs.",
    skills: ["React", "TypeScript", "Performance", "Testing"],
  },
  {
    id: "tm-3",
    name: "Charlie Brown",
    role: "Backend Developer",
    avatar: "https://avatar.iran.liara.run/public/15",
    bio: "Charlie focuses on building robust APIs and managing database infrastructure. He's proficient in Node.js and cloud services.",
    skills: ["Node.js", "SQL", "AWS", "Microservices"],
  },
];
const features = [
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team members in real-time.",
  },
  {
    title: "Advanced Analytics",
    description: "Gain valuable insights through customizable dashboards.",
  },
  {
    title: "Enterprise Security",
    description: "Data protection with industry-leading security practices.",
  },
  {
    title: "Task Management",
    description: "Organize and track project tasks efficiently.",
  },
];

export default function HomePage() {
  const { contains } = useFilter({ sensitivity: "base" });
  const [carouselApi, setCarouselApi] = React.useState<
    EmblaCarouselType | undefined
  >(undefined);
  const { scrollSnaps, selectedIndex, onDotButtonClick } =
    useDotButton(carouselApi);

  return (
    <main className="py-10 container max-w-4xl space-y-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Component Showcase</h1>
        <ThemeSwitcher />
      </div>

      {/* Section: Forms & Inputs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Forms & Inputs</h2>

        {/* Example: Project Creation Form */}
        <ComponentBox fullWidth title="Project Creation Form">
          <Card>
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <h3 className="text-xl font-semibold col-span-full mb-2">
                Create New Project
              </h3>

              <TextField className="col-span-full" isRequired>
                <Label>Project Name</Label>
                <Input placeholder="Enter a descriptive project name" />
              </TextField>

              <ComboBox className="col-span-full md:col-span-1">
                <Label>Assign Project Manager</Label>
                <ComboBoxTrigger placeholder="Select a user..." />
                <ComboBoxContent>
                  {users.map((user) => (
                    <ComboBoxItem key={user.id} textValue={user.name}>
                      <div className="flex items-center gap-2">
                        <Avatar
                          src={`https://avatar.iran.liara.run/public/${
                            user.id * 5 + 10
                          }`}
                          size="sm"
                        />
                        <span>{user.name}</span>
                        <span className="text-xs text-muted-foreground">
                          ({user.role})
                        </span>
                      </div>
                    </ComboBoxItem>
                  ))}
                </ComboBoxContent>
              </ComboBox>

              <Select
                placeholder="Select initial status"
                className="col-span-full md:col-span-1"
              >
                <Label>Initial Status</Label>
                <SelectTrigger />
                <SelectContent>
                  {projectStatuses.slice(0, 3).map((status) => (
                    <SelectItem
                      key={status.toLowerCase().replace(" ", "-")}
                      textValue={status}
                    >
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <DatePicker
                label="Target Completion Date"
                className="col-span-full md:col-span-1"
                minValue={today(getLocalTimeZone())}
              />

              <NumberField
                label="Estimated Budget ($)"
                className="col-span-full md:col-span-1"
                minValue={0}
                formatOptions={{ style: "currency", currency: "USD" }}
              />

              <CheckboxGroup
                className="col-span-full space-y-2"
                defaultValue={["frontend"]}
              >
                <Label>Project Tags</Label>
                <Checkbox value="frontend">Frontend</Checkbox>
                <Checkbox value="backend">Backend</Checkbox>
                <Checkbox value="design">Design System</Checkbox>
                <Checkbox value="mobile">Mobile App</Checkbox>
              </CheckboxGroup>

              <div className="col-span-full flex justify-end gap-3 mt-4">
                <Button variant="secondary">Cancel</Button>
                <Button type="submit">
                  <RiAddLine className="w-4 h-4 mr-1" /> Create Project
                </Button>
              </div>
            </Form>
          </Card>
        </ComponentBox>

        {/* Example: User Profile Settings */}
        <ComponentBox fullWidth title="User Profile Settings">
          <Form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TextField className="md:col-span-2">
              <Label>Full Name</Label>
              <Input defaultValue="Diana Garcia" />
            </TextField>
            <SearchField
              label="Location"
              className="md:col-span-1"
              inputProps={{ placeholder: "Search city..." }}
            />
           <div>
           <Autocomplete filter={contains}>
              <SearchField
                label="Skills"
                inputProps={{
                  placeholder: "Add skills (e.g., React, Figma)...",
                }}
              />
              <AutocompleteContent className="mt-2 w-[--trigger-width]">
                {skills.map((skill) => (
                  <AutocompleteItem
                    key={skill.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {skill}
                  </AutocompleteItem>
                ))}
              </AutocompleteContent>
            </Autocomplete>
           </div>
            <DateField
              label="Date of Birth"
              className="md:col-span-1"
              shouldForceLeadingZeros
            />
            <div className="md:col-span-2 flex items-end">
              <Switch defaultSelected>Receive Newsletter</Switch>
            </div>
            <div className="md:col-span-3 flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </Form>
        </ComponentBox>

        {/* Example: File Upload & Toggles */}
        <ComponentBox title="File Upload & Toggles">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 space-y-4">
              <Label>Upload Project Assets</Label>
              <FileTrigger allowsMultiple>
                <Button variant="outlined">
                  <RiUploadCloud2Line className="w-4 h-4 mr-1" /> Select Files
                </Button>
              </FileTrigger>
              <p className="text-xs text-muted-foreground">
                Max file size: 50MB. Allowed types: JPG, PNG, PDF, ZIP.
              </p>
            </div>
            <div className="flex-1 space-y-4">
              <Label>Editor Preferences</Label>
              <ToggleButtonGroup
                selectionMode="single"
                defaultSelectedKeys={["left"]}
                aria-label="Text alignment"
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
                        state.selectedKeys.has("right") ? "primary" : "outlined"
                      }
                    >
                      <RiAlignRight />
                    </ToggleButton>
                  </>
                )}
              </ToggleButtonGroup>
              <ToggleButton variant="outlined">
                {({ isSelected }) => (
                  <>
                    {isSelected ? <RiBookmarkFill /> : <RiBookmarkLine />}
                    <span className="ml-1">
                      {isSelected ? "Bookmarked" : "Bookmark"}
                    </span>
                  </>
                )}
              </ToggleButton>
            </div>
          </div>
        </ComponentBox>
      </section>

      {/* Section: Navigation & Interaction */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Navigation & Interaction
        </h2>

        {/* Example: Application Header Menu */}
        <ComponentBox title="Application Header Menu">
          <MenuTrigger>
            <TooltipTrigger>
              <Button
                size="icon-md"
                className="rounded-full"
                aria-label="User Menu"
              >
                <Avatar
                  src="https://avatar.iran.liara.run/public/45"
                  size="sm"
                />
              </Button>
              <Tooltip>Account & Settings</Tooltip>
            </TooltipTrigger>
            <Menu>
              <MenuItem>
                <RiUserLine /> Profile
              </MenuItem>
              <SubmenuTrigger>
                <MenuItem className="flex items-center">
                  <RiSettings3Line className="w-4 h-4 mr-1" />
                  <span className="flex-1 text-left mr-2">Settings</span>
                  <RiArrowRightSLine />
                </MenuItem>
                <Menu popoverProps={{ offset: -2 }}>
                  <MenuItem>General</MenuItem>
                  <MenuItem>Security</MenuItem>
                  <MenuItem>Notifications</MenuItem>
                </Menu>
              </SubmenuTrigger>
              <SubmenuTrigger>
                <MenuItem className="flex items-center">
                  <RiDatabase2Line className="w-4 h-4 mr-1" />
                  <span className="flex-1 text-left mr-2">Billing</span>
                  <RiArrowRightSLine />
                </MenuItem>
                <Menu popoverProps={{ offset: -2 }}>
                  <MenuItem>View Invoices</MenuItem>
                  <MenuItem>Payment Methods</MenuItem>
                  <MenuItem>Current Plan</MenuItem>
                </Menu>
              </SubmenuTrigger>
              <MenuItem isDisabled>
                <RiDatabase2Line /> Data Export (Admin Only)
              </MenuItem>
              <MenuItem className="text-destructive">
                <RiLogoutBoxLine />
                Logout
              </MenuItem>
            </Menu>
          </MenuTrigger>
        </ComponentBox>

        {/* Example: Project Dashboard Tabs */}
        <ComponentBox fullWidth title="Project Dashboard Tabs">
          <Tabs className="space-y-4">
            <TabList aria-label="Project Dashboard Sections">
              <Tab id="tab-overview">Overview</Tab>
              <Tab id="tab-tasks">Tasks</Tab>
              <Tab id="tab-team">Team Members</Tab>
              <Tab id="tab-settings">Settings</Tab>
            </TabList>
            <TabPanel id="tab-overview">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Project Health</h4>
                <Meter
                  label="Overall Progress"
                  value={65}
                  valueLabel="65% Complete"
                />
                <ProgressBar label="Budget Utilization" value={80} />
                <Alert
                  variant="info"
                  icon={<RiInformationLine />}
                  title="Upcoming Deadline"
                  description="Phase 1 due date is approaching in 5 days."
                />
              </div>
            </TabPanel>
            <TabPanel id="tab-tasks">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">Task List</h4>
                  <Button size="sm" variant="secondary">
                    <RiAddLine className="w-4 h-4 mr-1" /> Add Task
                  </Button>
                </div>
                {/* Placeholder for task list */}
                <p className="text-muted-foreground">
                  Task listing component would go here (e.g., using a Table or
                  List).
                </p>
                <TagGroup selectionMode="multiple">
                  <Label>Filter by Label</Label>
                  <TagList>
                    {issueLabels.slice(0, 5).map((label) => (
                      <Tag key={label.toLowerCase()} textValue={label}>
                        {label}
                      </Tag>
                    ))}
                  </TagList>
                </TagGroup>
              </div>
            </TabPanel>
            <TabPanel id="tab-team">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamMembers.map((member) => (
                  <Card key={member.id}>
                    <div className="p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <Avatar src={member.avatar} size="md" />
                        <div>
                          <span className="font-semibold">{member.name}</span>
                          <p className="text-sm text-muted-foreground">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="plain">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outlined">
                          Profile
                        </Button>
                        <Button size="sm">Message</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabPanel>
            <TabPanel id="tab-settings">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Project Settings</h4>
                {/* Placeholder for settings form */}
                <p className="text-muted-foreground">
                  Project settings form component would go here.
                </p>
                <DialogTrigger>
                  <Button variant="destructive">
                    <RiDeleteBinLine className="w-4 h-4 mr-1" /> Delete Project
                  </Button>
                  <DialogContent>
                    {({ close }) => (
                      <div className="grid gap-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">
                            Confirm Deletion
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Are you sure? This action cannot be undone.
                          </p>
                        </div>
                        <div className="flex justify-end gap-2 pt-2">
                          <Button variant="secondary" onPress={close}>
                            Cancel
                          </Button>
                          <Button variant="destructive" onPress={close}>
                            Yes, Delete
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </DialogTrigger>
              </div>
            </TabPanel>
          </Tabs>
        </ComponentBox>
      </section>

      {/* Section: Data Display & Feedback */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Data Display & Feedback
        </h2>

        {/* Example: Product Feature Carousel */}
        <ComponentBox title="Product Feature Carousel" fullWidth>
          <Carousel onEmblaApi={setCarouselApi} gap={16} loop>
            {features.map((feature, index) => (
              <Carousel.Slide key={index}>
                <Card>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-medium mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
          {scrollSnaps.length > 1 && (
            <div className="flex justify-center mt-4">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 mx-1 rounded-full transition-colors",
                    selectedIndex === index ? "bg-primary" : "bg-muted"
                  )}
                  style={{
                    backgroundColor:
                      selectedIndex === index
                        ? "var(--primary)"
                        : "var(--muted)",
                  }}
                  onClick={() => onDotButtonClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </ComponentBox>

        {/* Example: FAQ Accordion */}
        <ComponentBox fullWidth title="Frequently Asked Questions (FAQ)">
          <Accordion allowsMultipleExpanded>
            {faqItems.map((item) => (
              <AccordionItem key={item.id} id={item.id}>
                <AccordionItemTrigger>{item.question}</AccordionItemTrigger>
                <AccordionItemContent>
                  <p>{item.answer}</p>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ComponentBox>

        {/* Example: System Status Alerts */}
        <ComponentBox fullWidth title="System Status Alerts">
          <div className="grid gap-4">
            <Alert
              variant="success"
              icon={<RiCheckLine />}
              title="System Operational"
              description="All systems are running smoothly."
            />
            <Alert
              variant="warning"
              icon={<RiAlertLine />}
              title="Scheduled Maintenance"
              description="Brief maintenance window scheduled for Sunday at 2 AM UTC."
            />
            <Alert
              variant="destructive"
              icon={<RiCloseCircleLine />}
              title="Service Disruption"
              description="We are currently experiencing issues with the reporting service. Our team is investigating."
            />
          </div>
        </ComponentBox>
      </section>

      {/* Section: Date & Time Selection */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Date & Time Selection
        </h2>

        {/* Example: Booking System */}
        <ComponentBox title="Booking System">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form className="space-y-2">
              <Label>Select Appointment Date</Label>
              <Calendar aria-label="Appointment Date" />
            </Form>
            <Form className="space-y-2">
              <Label>Select Vacation Dates</Label>
              <RangeCalendar aria-label="Vacation Dates" />
            </Form>
            <DateRangePicker
              label="Event Duration"
              shouldForceLeadingZeros
              className="md:col-span-1"
            />
            <ListBox
              aria-label="Select Time Slot"
              className="md:col-span-1"
              selectionMode="single"
            >
              <Label>Available Time Slots</Label>
              <ListBoxItem textValue="09:00 AM">09:00 AM</ListBoxItem>
              <ListBoxItem textValue="11:00 AM">11:00 AM</ListBoxItem>
              <ListBoxItem textValue="02:00 PM">02:00 PM</ListBoxItem>
              <ListBoxItem textValue="04:00 PM">04:00 PM</ListBoxItem>
            </ListBox>
          </div>
        </ComponentBox>
      </section>

      {/* Section: Miscellaneous */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Miscellaneous</h2>

        {/* Example: Popovers for Actions */}
        <ComponentBox title="Popovers for Actions">
          <div className="flex flex-wrap gap-4">
            <PopoverTrigger>
              <Button variant="secondary">
                <RiFilter3Line className="w-4 h-4 mr-1" /> Filter Options
              </Button>
              <Popover>
                <Form className="grid gap-4 w-72">
                  <h3 className="text-lg font-semibold">Filter Results</h3>
                  <RadioGroup defaultValue="date">
                    <Label>Sort By</Label>
                    <Radio value="date">Date</Radio>
                    <Radio value="priority">Priority</Radio>
                    <Radio value="assignee">Assignee</Radio>
                  </RadioGroup>
                  <Slider defaultValue={50}>
                    <Label>Confidence Score</Label>
                    <SliderControl />
                  </Slider>
                  <div className="flex justify-end gap-2">
                    <Button variant="secondary" size="sm">
                      Clear
                    </Button>
                    <Button type="submit" size="sm">
                      Apply Filters
                    </Button>
                  </div>
                </Form>
              </Popover>
            </PopoverTrigger>

            <PopoverTrigger>
              <Button>
                <RiSendPlaneLine className="w-4 h-4 mr-1" /> Share
              </Button>
              <Popover>
                <Form className="grid gap-4 w-80">
                  <h3 className="text-lg font-semibold">Share Project</h3>
                  <TextField type="email" isRequired>
                    <Label>Recipient Email</Label>
                    <Input placeholder="Enter email address" />
                  </TextField>
                  <Select placeholder="Select permission level">
                    <Label>Permission Level</Label>
                    <SelectTrigger size="sm" />
                    <SelectContent>
                      <SelectItem textValue="view">View Only</SelectItem>
                      <SelectItem textValue="comment">Comment</SelectItem>
                      <SelectItem textValue="edit">Edit</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex justify-end gap-2">
                    <Button variant="secondary" size="sm">
                      Cancel
                    </Button>
                    <Button type="submit" size="sm">
                      Send Invite
                    </Button>
                  </div>
                </Form>
              </Popover>
            </PopoverTrigger>
          </div>
        </ComponentBox>
      </section>
    </main>
  );
}
