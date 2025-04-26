"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/Accordion";
import { Alert } from "@/components/ui/Alert";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { Card } from "@/components/ui/Card";
import { Checkbox, CheckboxGroup } from "@/components/ui/Checkbox";
import { DateField } from "@/components/ui/DateField";
import { DatePicker } from "@/components/ui/Datepicker";
import { DateRangePicker } from "@/components/ui/DateRangePicker";
import { DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import { FieldError } from "@/components/ui/FieldError";
import { Input, TextField } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
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
import { TimeField } from "@/components/ui/TimeField";
import { ToggleButton } from "@/components/ui/ToggleButton";
import { ToggleButtonGroup } from "@/components/ui/ToggleButtonGroup";
import { Tooltip, TooltipTrigger } from "@/components/ui/Tooltip";
import ComponentBox from "@/components/web/component-box";
import { getLocalTimeZone, today, Time } from "@internationalized/date";
import {
  RiAddLine,
  RiAlertLine,
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
  RiBookmarkFill,
  RiBookmarkLine,
  RiCheckLine,
  RiCloseCircleLine,
  RiDeleteBinLine,
  RiEditLine,
  RiEyeLine,
  RiEyeOffLine,
  RiInformationLine,
  RiLoader4Line,
  RiSearchLine,
  RiSettings3Line,
  RiThumbUpFill,
  RiThumbUpLine,
  RiUserLine,
} from "@remixicon/react";
import { Form } from "react-aria-components";

export default function HomePage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <main className="py-10 container max-w-5xl space-y-12 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-xl font-bold">Component Showcase</h1>
        <ThemeSwitcher />
      </div>

      {/* Section: Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Buttons</h2>
        <ComponentBox title="Variants & Sizes">
          <div className="flex flex-wrap gap-4 items-end">
            {(
              [
                "primary",
                "secondary",
                "destructive",
                "outlined",
                "plain",
              ] as const
            ).map((variant) => (
              <div
                key={variant}
                className="flex flex-col items-start gap-2 flex-grow sm:flex-grow-0"
              >
                <span className="text-sm font-medium capitalize">
                  {variant}
                </span>
                <div className="flex flex-wrap gap-2 items-end">
                  <Button variant={variant} size="sm">
                    Small
                  </Button>
                  <Button variant={variant} size="md">
                    Medium
                  </Button>
                  <Button variant={variant} size="lg">
                    Large
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ComponentBox>
        <ComponentBox title="Icon Buttons">
          <div className="flex flex-wrap gap-4 items-end">
            {(["primary", "secondary", "outlined", "plain"] as const).map(
              (variant) => (
                <div key={variant} className="flex flex-col items-start gap-2">
                  <span className="text-sm font-medium capitalize">
                    {variant}
                  </span>
                  <div className="flex gap-2 items-end">
                    <Button variant={variant} size="icon-md" aria-label="Add">
                      <RiAddLine />
                    </Button>
                    <Button variant={variant} size="icon-md" aria-label="Edit">
                      <RiEditLine />
                    </Button>
                    <Button
                      variant={variant}
                      size="icon-lg"
                      aria-label="Settings"
                    >
                      <RiSettings3Line />
                    </Button>
                  </div>
                </div>
              )
            )}
          </div>
        </ComponentBox>
        <ComponentBox title="States (Disabled & Loading)">
          <div className="flex flex-wrap gap-6 items-start">
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-medium">Disabled</span>
              <div className="flex flex-wrap gap-2 items-end">
                <Button variant="primary" isDisabled>
                  Primary
                </Button>
                <Button variant="secondary" isDisabled>
                  Secondary
                </Button>
                <Button variant="destructive" isDisabled>
                  Destructive
                </Button>
                <Button variant="outlined" isDisabled>
                  Outlined
                </Button>
                <Button variant="plain" isDisabled>
                  Plain
                </Button>
                <Button
                  variant="primary"
                  size="icon-md"
                  isDisabled
                  aria-label="Add Disabled"
                >
                  <RiAddLine />
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-medium">Loading</span>
              <div className="flex flex-wrap gap-2 items-end">
                <Button variant="primary" isLoading>
                  Primary
                </Button>
                <Button variant="secondary" isLoading>
                  Secondary
                </Button>
                <Button variant="destructive" isLoading>
                  Destructive
                </Button>
                <Button variant="outlined" isLoading>
                  Outlined
                </Button>
                <Button variant="plain" isLoading>
                  Plain
                </Button>
              </div>
            </div>
          </div>
        </ComponentBox>
      </section>

      {/* Section: Inputs & Fields */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Inputs & Fields
        </h2>
        <ComponentBox title="TextField States">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField isRequired>
              <Label>Required Field</Label>
              <Input placeholder="Enter value" />
              <FieldError>This field is required.</FieldError>
            </TextField>
            <TextField isInvalid>
              <Label>Invalid Field</Label>
              <Input defaultValue="Incorrect value" />
              <FieldError>Please enter a valid email address.</FieldError>
            </TextField>
            <TextField isDisabled>
              <Label>Disabled Field</Label>
              <Input defaultValue="Cannot edit" />
            </TextField>
            <TextField isReadOnly>
              <Label>Read Only Field</Label>
              <Input defaultValue="View only value" />
            </TextField>
            <TextField>
              <Label>Field with Description</Label>
              <Input placeholder="Username" />
              <p className="text-sm text-muted-foreground mt-1">
                Provide your username.
              </p>
            </TextField>
            <TextField type={showPassword ? "text" : "password"}>
              <Label>Password</Label>
              <div className="relative">
                <Input placeholder="Enter password" className="pr-10" />
                <Button
                  variant="plain"
                  size="icon-md"
                  className="absolute inset-y-px right-px h-auto rounded-l-none rounded-r-md flex items-center justify-center focus-visible:ring-offset-0 focus-visible:ring-inset"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </Button>
              </div>
            </TextField>
          </div>
        </ComponentBox>
        <ComponentBox title="SearchField & NumberField">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SearchField
              label="Search Items"
              inputProps={{ placeholder: "Type to search..." }}
            >
              <RiSearchLine />
            </SearchField>
            <SearchField
              label="Disabled Search"
              isDisabled
              inputProps={{ placeholder: "Cannot search" }}
            />
            <NumberField
              label="Quantity"
              defaultValue={10}
              minValue={0}
              maxValue={100}
              step={5}
            />
            <NumberField
              label="Price"
              defaultValue={99.9}
              formatOptions={{ style: "currency", currency: "USD" }}
              isDisabled
            />
          </div>
        </ComponentBox>
      </section>

      {/* Section: Selection Controls */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Selection Controls
        </h2>
        <ComponentBox title="Checkbox & CheckboxGroup">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label>Single Checkboxes</Label>
              <Checkbox>Default</Checkbox>
              <Checkbox isSelected>Selected</Checkbox>
              <Checkbox isDisabled>Disabled</Checkbox>
              <Checkbox isSelected isDisabled>
                Selected Disabled
              </Checkbox>
              <Checkbox isIndeterminate>Indeterminate</Checkbox>
              <Checkbox isInvalid>Invalid</Checkbox>
            </div>
            <CheckboxGroup defaultValue={["mentions"]} isInvalid>
              <Label>Checkbox Group</Label>
              <Checkbox value="comments">Comments</Checkbox>
              <Checkbox value="mentions">Mentions</Checkbox>
              <Checkbox value="activity" isDisabled>
                Activity (Disabled)
              </Checkbox>
              <FieldError>Please select at least one option.</FieldError>
            </CheckboxGroup>
          </div>
        </ComponentBox>
        <ComponentBox title="RadioGroup">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <RadioGroup defaultValue="dog">
              <Label>Favorite Pet</Label>
              <Radio value="dog">Dog</Radio>
              <Radio value="cat">Cat</Radio>
              <Radio value="dragon">Dragon</Radio>
            </RadioGroup>
            <RadioGroup
              orientation="horizontal"
              isDisabled
              defaultValue="express"
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              <Label className="flex-shrink-0">Shipping Method</Label>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Radio value="standard">Standard</Radio>
                <Radio value="express">Express (Disabled Group)</Radio>
                <Radio value="nextday">Next Day</Radio>
              </div>
            </RadioGroup>
            <RadioGroup isInvalid isReadOnly defaultValue="push">
              <Label>Notification Type</Label>
              <Radio value="email">Email</Radio>
              <Radio value="sms">SMS</Radio>
              <Radio value="push">Push (Readonly & Invalid)</Radio>
              <FieldError>Push notifications are required.</FieldError>
            </RadioGroup>
          </div>
        </ComponentBox>
        <ComponentBox title="Switch">
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            <Switch>Default Off</Switch>
            <Switch defaultSelected>Default On</Switch>
            <Switch isDisabled>Disabled Off</Switch>
            <Switch defaultSelected isDisabled>
              Disabled On
            </Switch>
            <Switch isReadOnly>Readonly Off</Switch>
            <Switch defaultSelected isReadOnly>
              Readonly On
            </Switch>
          </div>
        </ComponentBox>
        <ComponentBox title="Select">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Select placeholder="Select an option">
              <Label>Basic Select</Label>
              <SelectTrigger />
              <SelectContent>
                <SelectItem textValue="Option 1">Option 1</SelectItem>
                <SelectItem textValue="Option 2">Option 2</SelectItem>
                <SelectItem textValue="Option 3">Option 3</SelectItem>
              </SelectContent>
            </Select>
            <Select placeholder="Select an option" isDisabled>
              <Label>Disabled Select</Label>
              <SelectTrigger />
              <SelectContent>
                <SelectItem textValue="Option 1">Option 1</SelectItem>
              </SelectContent>
            </Select>
            <Select placeholder="Select an option" isInvalid>
              <Label>Invalid Select</Label>
              <SelectTrigger />
              <SelectContent>
                <SelectItem textValue="Option 1">Option 1</SelectItem>
              </SelectContent>
              <FieldError>Selection is required.</FieldError>
            </Select>
          </div>
        </ComponentBox>
      </section>

      {/* Section: Data Display */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Data Display</h2>
        <ComponentBox title="Alert Variants">
          <div className="grid gap-4">
            <Alert
              variant="info"
              icon={<RiInformationLine />}
              title="Informational Tip"
              description="You can customize your profile settings."
            />
            <Alert
              variant="success"
              icon={<RiCheckLine />}
              title="Success!"
              description="Your changes have been saved successfully."
            />
            <Alert
              variant="warning"
              icon={<RiAlertLine />}
              title="Warning"
              description="Your session is about to expire."
            />
            <Alert
              variant="destructive"
              icon={<RiCloseCircleLine />}
              title="Error"
              description="Failed to load data. Please try again."
            />
            <Alert
              variant="info"
              title="Info Alert"
              description="Just a description, no title or icon."
            />
          </div>
        </ComponentBox>
        <ComponentBox title="Badge Variants">
          <div className="flex flex-wrap gap-2">
            <Badge variant="filled">Filled</Badge>
            <Badge variant="plain">Plain</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outlined">Outlined</Badge>
          </div>
        </ComponentBox>
        <ComponentBox title="Avatar Sizes & Fallback">
          <div className="flex flex-wrap gap-4 items-center">
            <Avatar src="https://avatar.iran.liara.run/public/45" size="sm" />
            <Avatar src="https://avatar.iran.liara.run/public/37" size="sm" />
            <Avatar src="https://avatar.iran.liara.run/public/15" size="md" />
            <Avatar src="invalid-url" fallback="VK" size="lg" />
            <Avatar src="" size="lg" />
          </div>
        </ComponentBox>
        <ComponentBox title="TagGroup">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TagGroup selectionMode="multiple" defaultSelectedKeys={["react"]}>
              <Label>Selectable Tags</Label>
              <TagList className="flex flex-wrap gap-1.5">
                <Tag id="react">React</Tag>
                <Tag id="vue">Vue</Tag>
                <Tag id="angular">Angular</Tag>
                <Tag id="svelte" isDisabled>
                  Svelte (Disabled)
                </Tag>
              </TagList>
            </TagGroup>
            <TagGroup selectionMode="none">
              <Label>Removable Tags (Functionality TBD)</Label>
              <TagList className="flex flex-wrap gap-1.5">
                <Tag id="bug">Bug</Tag>
                <Tag id="feature">Feature Request</Tag>
                <Tag id="docs">Documentation</Tag>
              </TagList>
            </TagGroup>
          </div>
        </ComponentBox>
      </section>

      {/* Section: Feedback & Overlays */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Feedback & Overlays
        </h2>
        <ComponentBox title="Tooltip">
          <div className="flex flex-wrap gap-4">
            <TooltipTrigger>
              <Button variant="outlined">Hover Me</Button>
              <Tooltip>This is a simple tooltip.</Tooltip>
            </TooltipTrigger>
            <TooltipTrigger delay={0}>
              <Button variant="secondary">Instant Tooltip</Button>
              <Tooltip>Shows immediately.</Tooltip>
            </TooltipTrigger>
            <TooltipTrigger isDisabled>
              <Button variant="plain" isDisabled>
                Disabled Trigger
              </Button>
              <Tooltip>This won't show.</Tooltip>
            </TooltipTrigger>
          </div>
        </ComponentBox>
        <ComponentBox title="Dialog">
          <DialogTrigger>
            <Button>Open Dialog</Button>
            <DialogContent>
              {({ close }) => (
                <div className="grid gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Dialog Title</h3>
                    <p className="text-sm text-muted-foreground">
                      This is the content of the dialog. You can put forms,
                      information, or actions here.
                    </p>
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <Button variant="secondary" onPress={close}>
                      Cancel
                    </Button>
                    <Button onPress={close}>Confirm</Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </DialogTrigger>
        </ComponentBox>
        <ComponentBox title="Popover">
          <PopoverTrigger>
            <Button variant="secondary">Open Popover</Button>
            <Popover placement="bottom start" className="w-64 p-4">
              <div className="grid gap-2">
                <h4 className="font-medium leading-none">Popover Content</h4>
                <p className="text-sm text-muted-foreground">
                  Place any content inside the popover.
                </p>
                <Button size="sm">Action</Button>
              </div>
            </Popover>
          </PopoverTrigger>
        </ComponentBox>
        <ComponentBox fullWidth title="Progress & Meter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label>Progress Bar</Label>
              <ProgressBar value={30} valueLabel="30%" />
              <ProgressBar value={75} valueLabel="75% Complete" />
              <ProgressBar isIndeterminate label="Loading..." />
            </div>
            <div className="space-y-4">
              <Meter label="Storage Used" value={20} valueLabel="20%" />
              <Meter label="Task Completion" value={60} valueLabel="60%" />
              <Meter label="Warning Level" value={85} valueLabel="85%" />
              <Meter label="Critical Usage" value={95} valueLabel="95%" />
            </div>
          </div>
        </ComponentBox>
      </section>

      {/* Section: Navigation & Structure */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Navigation & Structure
        </h2>
        <ComponentBox fullWidth title="Accordion">
          <Accordion allowsMultipleExpanded>
            <AccordionItem id="item-1">
              <AccordionItemTrigger>Accordion Item 1</AccordionItemTrigger>
              <AccordionItemContent>Content for item 1.</AccordionItemContent>
            </AccordionItem>
            <AccordionItem id="item-2">
              <AccordionItemTrigger>Accordion Item 2</AccordionItemTrigger>
              <AccordionItemContent>
                Content for item 2. More detailed content can go here.
              </AccordionItemContent>
            </AccordionItem>
            <AccordionItem id="item-3" isDisabled>
              <AccordionItemTrigger>
                Accordion Item 3 (Disabled)
              </AccordionItemTrigger>
              <AccordionItemContent>
                This content is not reachable.
              </AccordionItemContent>
            </AccordionItem>
          </Accordion>
        </ComponentBox>
        <ComponentBox fullWidth title="Tabs">
          <Tabs>
            <TabList aria-label="Feature Tabs">
              <Tab id="tab-profile">Profile</Tab>
              <Tab id="tab-dashboard">Dashboard</Tab>
              <Tab id="tab-settings" isDisabled>
                Settings (Disabled)
              </Tab>
              <Tab id="tab-billing">Billing</Tab>
            </TabList>
            <TabPanel id="tab-profile" className="py-4">
              Profile content goes here.
            </TabPanel>
            <TabPanel id="tab-dashboard" className="py-4">
              Dashboard overview goes here.
            </TabPanel>
            <TabPanel id="tab-settings" className="py-4">
              Settings form goes here.
            </TabPanel>
            <TabPanel id="tab-billing" className="py-4">
              Billing information goes here.
            </TabPanel>
          </Tabs>
        </ComponentBox>
      </section>

      {/* Section: Date & Time */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Date & Time</h2>
        <ComponentBox title="Calendars">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <Form className="space-y-2">
              <Label>Single Date Calendar</Label>
              <Calendar aria-label="Appointment Date" />
            </Form>
            <Form className="space-y-2">
              <Label>Range Calendar</Label>
              <RangeCalendar aria-label="Vacation Dates" />
            </Form>
          </div>
        </ComponentBox>
        <ComponentBox title="Date/Time Pickers & Fields">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DatePicker
              label="Event Date"
              minValue={today(getLocalTimeZone())}
            />
            <DateRangePicker label="Booking Duration" />
            <DateField label="Date of Birth" />
            <TimeField
              label="Appointment Time"
              defaultValue={new Time(9, 30)}
            />
            <DatePicker label="Disabled Date" isDisabled />
            <TimeField
              label="Readonly Time"
              isReadOnly
              defaultValue={new Time(14, 0)}
            />
          </div>
        </ComponentBox>
      </section>

      {/* Section: Miscellaneous */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Miscellaneous</h2>
        <ComponentBox fullWidth title="Slider">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            <div className="grid gap-1.5">
              <Label>Volume</Label>
              <Slider defaultValue={50}>
                <SliderControl />
                <SliderOutput />
              </Slider>
            </div>
            <div className="grid gap-1.5">
              <Label>Brightness</Label>
              <Slider defaultValue={80} isDisabled>
                <SliderControl />
                <SliderOutput />
              </Slider>
            </div>
            <div className="grid gap-1.5">
              <Label>Range Slider</Label>
              <Slider defaultValue={[25, 75]}>
                <SliderControl />
                <SliderOutput />
              </Slider>
            </div>
          </div>
        </ComponentBox>
        <ComponentBox title="Toggle Buttons">
          <div className="flex flex-wrap gap-x-6 gap-y-8 items-start">
            <ToggleButton>
              {({ isSelected }) => (
                <>
                  <RiThumbUpLine /> {isSelected ? "Liked" : "Like"}
                </>
              )}
            </ToggleButton>
            <ToggleButton defaultSelected isDisabled>
              <RiBookmarkFill /> Saved (Disabled)
            </ToggleButton>
            <ToggleButtonGroup selectionMode="single">
              <Label>Text Alignment</Label>
              <div className="flex mt-1">
                <ToggleButton id="left" aria-label="Align Left">
                  <RiAlignLeft />
                </ToggleButton>
                <ToggleButton id="center" aria-label="Align Center">
                  <RiAlignCenter />
                </ToggleButton>
                <ToggleButton id="right" aria-label="Align Right">
                  <RiAlignRight />
                </ToggleButton>
              </div>
            </ToggleButtonGroup>
            <ToggleButtonGroup selectionMode="multiple" isDisabled>
              <Label>Formatting</Label>
              <div className="flex mt-1">
                <ToggleButton id="bold" aria-label="Bold">
                  B
                </ToggleButton>
                <ToggleButton id="italic" aria-label="Italic">
                  I
                </ToggleButton>
                <ToggleButton id="underline" aria-label="Underline">
                  U
                </ToggleButton>
              </div>
            </ToggleButtonGroup>
          </div>
        </ComponentBox>
      </section>
    </main>
  );
}
