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
import { Slider, SliderControl } from "@/components/ui/Slider";
import { Input, TextField } from "@/components/ui/Input";
import { FileTrigger, Form, useFilter } from "react-aria-components";
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

export default function HomePage() {
  const animals = ["Aardvark", "Cat", "Dog", "Kangaroo", "Panda", "Snake"];
  const categories = ["Electronics", "Clothing", "Home Goods", "Books"];
  const commands = [
    "Create New File",
    "Open Settings",
    "Search Documentation",
    "Deploy Project",
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
          <Button>Submit</Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="outlined">Learn More</Button>
          <Button variant="destructive">Delete</Button>
          <Button isLoading>Loading...</Button>
          <Button isDisabled>Disabled</Button>
        </div>
      </ComponentBox>
      <ComponentBox title="FileTrigger">
        <FileTrigger>
          <Button variant="outlined">Upload Profile Picture</Button>
        </FileTrigger>
      </ComponentBox>

      <ComponentBox title="Popover">
        <PopoverTrigger>
          <Button>Feedback</Button>
          <Popover>
            <Form className="grid gap-4 w-64">
              <TextField isRequired>
                <Label>Your Feedback</Label>
                <Input placeholder="Enter your feedback" />
              </TextField>
              <div className="flex justify-end gap-2">
                <Button variant="secondary" size="sm">
                  Cancel
                </Button>
                <Button type="submit" size="sm">
                  Submit
                </Button>
              </div>
            </Form>
          </Popover>
        </PopoverTrigger>
      </ComponentBox>

      <ComponentBox fullWidth title="Accordion">
        <Accordion>
          <AccordionItem id="faq-1">
            <AccordionItemTrigger>
              What is the return policy?
            </AccordionItemTrigger>
            <AccordionItemContent>
              <p>
                Our return policy allows returns within 30 days of purchase.
                Items must be unused and in original packaging.
              </p>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="faq-2">
            <AccordionItemTrigger>
              How do I track my order?
            </AccordionItemTrigger>
            <AccordionItemContent>
              <p>
                You can track your order using the tracking link sent to your
                email after shipment.
              </p>
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
      </ComponentBox>

      <ComponentBox title="Tooltip">
        <TooltipTrigger>
          <Button size="icon-md" variant="primary" aria-label="Information">
            <RiInformationLine />
          </Button>
          <Tooltip>
            <p>Additional information about this setting.</p>
          </Tooltip>
        </TooltipTrigger>
      </ComponentBox>

      <ComponentBox title="Dialog">
        <DialogTrigger>
          <Button variant="destructive">Delete Account</Button>
          <DialogContent>
            {({ close }) => (
              <div className="grid gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Confirm Deletion</h3>
                  <p className="text-sm text-muted-foreground">
                    Are you sure you want to delete your account? This action
                    cannot be undone.
                  </p>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <Button variant="secondary" onPress={close}>
                    Cancel
                  </Button>
                  <Button variant="destructive" onPress={close}>
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </DialogTrigger>
      </ComponentBox>

      <ComponentBox title="Checkbox">
        <Checkbox>Enable email notifications</Checkbox>
      </ComponentBox>

      <ComponentBox title="CheckboxGroup">
        <CheckboxGroup>
          <Label>Notification Preferences</Label>
          <Checkbox value="newsletter">Newsletter</Checkbox>
          <Checkbox value="promotions">Promotions</Checkbox>
          <Checkbox value="updates">Product Updates</Checkbox>
        </CheckboxGroup>
      </ComponentBox>

      <ComponentBox title="Select">
        <Select placeholder="Select criteria" className={"w-[200px]"}>
          <Label>Sort By</Label>
          <SelectTrigger size="sm" />
          <SelectContent>
            <SelectItem textValue="price-asc">Price: Low to High</SelectItem>
            <SelectItem textValue="price-desc">Price: High to Low</SelectItem>
            <SelectItem textValue="newest">Newest Arrivals</SelectItem>
          </SelectContent>
        </Select>
      </ComponentBox>

      <ComponentBox title="ComboBox">
        <ComboBox className={"w-[200px]"}>
          <Label>Select Category</Label>
          <ComboBoxTrigger size="sm" placeholder="Search category" />
          <ComboBoxContent>
            {categories.map((category) => (
              <ComboBoxItem key={category.toLowerCase()} textValue={category}>
                {category}
              </ComboBoxItem>
            ))}
          </ComboBoxContent>
        </ComboBox>
      </ComponentBox>

      <ComponentBox title="Listbox">
        <ListBox
          aria-label="Select Template"
          className="w-[200px]"
          selectionMode="single"
        >
          <ListBoxItem textValue="blank">Blank Template</ListBoxItem>
          <ListBoxItem textValue="report">Report Template</ListBoxItem>
          <ListBoxItem textValue="invoice">Invoice Template</ListBoxItem>
        </ListBox>
      </ComponentBox>

      <ComponentBox title="Menu">
        <MenuTrigger>
          <Button>File</Button>
          <Menu>
            <MenuItem>New</MenuItem>
            <MenuItem>Open</MenuItem>
            <MenuItem>Save As...</MenuItem>
            <MenuItem isDisabled>Print</MenuItem>
          </Menu>
        </MenuTrigger>
      </ComponentBox>

      <ComponentBox fullWidth title="Tabs">
        <Tabs>
          <TabList aria-label="Task Status">
            <Tab id="tab-all">All Tasks</Tab>
            <Tab id="tab-active">Active</Tab>
            <Tab id="tab-completed">Completed</Tab>
          </TabList>
          <TabPanel id="tab-all">
            <p className="p-4">Showing all tasks.</p>
          </TabPanel>
          <TabPanel id="tab-active">
            <p className="p-4">Showing only active tasks.</p>
          </TabPanel>
          <TabPanel id="tab-completed">
            <p className="p-4">Showing completed tasks.</p>
          </TabPanel>
        </Tabs>
      </ComponentBox>

      <ComponentBox title="Switch">
        <Switch>
            Dark mode
        </Switch>
      </ComponentBox>

      <ComponentBox fullWidth title="Slider">
        <Slider defaultValue={60}>
          <Label>Brightness</Label>
          <SliderControl />
        </Slider>
      </ComponentBox>

      <ComponentBox title="Calendar">
        <Calendar />
      </ComponentBox>

      <ComponentBox title="RangeCalendar">
       <RangeCalendar />
      </ComponentBox>

      <ComponentBox title="TextField">
        <TextField className="w-[250px]">
          <Label>Email Address</Label>
          <Input type="email" placeholder="you@example.com" />
        </TextField>
      </ComponentBox>

      <ComponentBox title="NumberField">
        <NumberField label="Quantity" defaultValue={1} minValue={1} />
      </ComponentBox>

      <ComponentBox title="SearchField">
        <SearchField
        className={'w-[200px]'}
          label="Search Products"
          inputProps={{
            placeholder: "Enter keywords",
          }}
        />
      </ComponentBox>

      <ComponentBox title="DateField">
        <DateField shouldForceLeadingZeros label="Event Date" />
      </ComponentBox>

      <ComponentBox title="DatePicker">
        <DatePicker shouldForceLeadingZeros label="Select Appointment Date" />
      </ComponentBox>

      <ComponentBox title="RadioGroup">
        <RadioGroup>
          <Label>Subscription Plan</Label>
          <Radio value="free">Free Tier</Radio>
          <Radio value="pro">Pro Tier</Radio>
          <Radio value="enterprise">Enterprise</Radio>
        </RadioGroup>
      </ComponentBox>

      <ComponentBox title="ToggleButton">
        <ToggleButton variant="outlined">
          {({ isSelected }) => (
            <>
              {isSelected ? <RiBookmarkFill /> : <RiBookmarkLine />}
              <span className="ml-1">{isSelected ? "Saved" : "Save"}</span>
            </>
          )}
        </ToggleButton>
      </ComponentBox>

      <ComponentBox title="ToggleButtonGroup">
        <ToggleButtonGroup selectionMode="single" defaultSelectedKeys={['center']}>
          {({ state }) => (
            <>
              <ToggleButton
                id="left"
                aria-label="Align Left"
                variant={state.selectedKeys.has("left") ? "primary" : "outlined"}
              >
                <RiAlignLeft />
              </ToggleButton>
              <ToggleButton
                id="center"
                aria-label="Align Center"
                variant={state.selectedKeys.has("center") ? "primary" : "outlined"}
              >
                <RiAlignCenter />
              </ToggleButton>
              <ToggleButton
                id="right"
                aria-label="Align Right"
                variant={state.selectedKeys.has("right") ? "primary" : "outlined"}
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
            label="Command Palette"
            inputProps={{
              placeholder: "Type a command...",
            }}
          />
          <AutocompleteContent className="mt-2 w-[--trigger-width]">
            {commands.map((cmd) => (
              <AutocompleteItem key={cmd.toLowerCase().replace(/\s+/g, "-")}>
                {cmd}
              </AutocompleteItem>
            ))}
          </AutocompleteContent>
        </Autocomplete>
      </ComponentBox>

      <ComponentBox fullWidth title="Meter">
        <Meter label="Password Strength" value={75} />
      </ComponentBox>

      <ComponentBox fullWidth title="ProgressBar">
        <ProgressBar label="Uploading files..." value={60} />
      </ComponentBox>

      <ComponentBox fullWidth title="TagGroup">
        <TagGroup selectionMode="multiple">
          <Label>Filter by Tags</Label>
          <TagList>
            <Tag>Feature Request</Tag>
            <Tag>Bug Report</Tag>
            <Tag>Documentation</Tag>
            <Tag>UI/UX</Tag>
          </TagList>
        </TagGroup>
      </ComponentBox>
    </main>
  );
}
