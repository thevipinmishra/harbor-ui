"use client";

import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
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
import {
  RiHome6Line,
  RiLogoutCircleLine,
  RiQuestionLine,
  RiSettings5Line,
  RiUserSmileLine,
} from "@remixicon/react";
import { useTheme } from "next-themes";
import { Slider, SliderControl } from "@/components/ui/Slider";
import { Input, TextField } from "@/components/ui/Input";
import { Form } from "react-aria-components";
import { Calendar } from "@/components/ui/Calendar";
import { DatePicker } from "@/components/ui/Datepicker";
import { Radio, RadioGroup } from "@/components/ui/RadioGroup";

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <main className="py-10 container max-w-3xl space-y-10">
      <div className="flex justify-end mb-6">
        <ThemeSwitcher />
      </div>

      {/* Basic Elements */}
      <ComponentBox title="Button">
        <div className="flex flex-wrap gap-5">
          <Button>Primary</Button>
          <Button isLoading>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="plain">Plain</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" isLoading>
            Outlined
          </Button>
          <Button variant="destructive">Secondary</Button>
        </div>
      </ComponentBox>

      <ComponentBox title="Popover">
        <PopoverTrigger>
          <Button>Open</Button>
          <Popover>
            <h3 className="text-lg font-semibold">Popover Title</h3>
            <p className="text-sm text-muted-foreground">
              This is a simple popover example.
            </p>
          </Popover>
        </PopoverTrigger>
      </ComponentBox>

      <ComponentBox fullWidth title="Accordion">
        <Accordion>
          <AccordionItem id="personal">
            <AccordionItemTrigger>Personal Information</AccordionItemTrigger>
            <AccordionItemContent>
              <p>
                Please provide your full name, email address, and phone number.
              </p>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem id="billing">
            <AccordionItemTrigger>Billing Address</AccordionItemTrigger>
            <AccordionItemContent>
              <p>
                Enter your billing details, including street address, city, and
                postal code.
              </p>
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
      </ComponentBox>

      <ComponentBox title="Tooltip">
        <TooltipTrigger>
          <Button>Learn More</Button>
          <Tooltip>
            <p>Click to get more details about this feature.</p>
          </Tooltip>
        </TooltipTrigger>
      </ComponentBox>

      <ComponentBox title="Dialog">
        <DialogTrigger>
          <Button>Open Dialog</Button>
          <DialogContent>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Sign Up</h3>
              <Form className="grid gap-4">
                <TextField>
                  <Label>Username</Label>
                  <Input />
                </TextField>
                <TextField>
                  <Label>Password</Label>
                  <Input type="password" />
                </TextField>
                <Select>
                  <Label>Account Type</Label>
                  <SelectTrigger />
                  <SelectContent>
                    <SelectItem textValue="personal">Personal</SelectItem>
                    <SelectItem textValue="business">Business</SelectItem>
                    <SelectItem textValue="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
                <Checkbox>I agree to the terms and conditions.</Checkbox>
                <div className="flex justify-end">
                  <Button>Sign Up</Button>
                </div>
              </Form>
            </div>
          </DialogContent>
        </DialogTrigger>
      </ComponentBox>

      <ComponentBox title="Checkbox">
        <Checkbox>
          I agree to the terms and conditions of using this application.
        </Checkbox>
      </ComponentBox>

      <ComponentBox title="Select">
        <Select className={"w-[200px]"}>
          <Label>Favorite Animal</Label>
          <SelectTrigger />
          <SelectContent>
            <SelectItem textValue="aardvark">Aardvark</SelectItem>
            <SelectItem textValue="cat">Cat</SelectItem>
            <SelectItem textValue="dog">Dog</SelectItem>
            <SelectItem textValue="kangaroo">Kangaroo</SelectItem>
            <SelectItem textValue="panda">Panda</SelectItem>
            <SelectItem textValue="snake">Snake</SelectItem>
          </SelectContent>
        </Select>
      </ComponentBox>

      <ComponentBox title="Listbox">
        <ListBox
          aria-label="Favorite animal"
          className="w-[200px]"
          selectionMode="single"
        >
          <ListBoxItem textValue="aardvark">Aardvark</ListBoxItem>
          <ListBoxItem textValue="cat">Cat</ListBoxItem>
          <ListBoxItem textValue="dog">Dog</ListBoxItem>
          <ListBoxItem textValue="kangaroo">Kangaroo</ListBoxItem>
          <ListBoxItem textValue="panda">Panda</ListBoxItem>
          <ListBoxItem textValue="snake">Snake</ListBoxItem>
        </ListBox>
      </ComponentBox>

      <ComponentBox title="Menu">
        <MenuTrigger>
          <Button>Options</Button>
          <Menu>
            <MenuItem>
              <RiHome6Line /> Dashboard
            </MenuItem>
            <MenuItem>
              <RiUserSmileLine /> Profile
            </MenuItem>
            <MenuItem>
              <RiSettings5Line /> Settings
            </MenuItem>
            <MenuItem>
              <RiQuestionLine /> Support
            </MenuItem>
            <MenuItem isDisabled>
              <RiLogoutCircleLine /> Sign Out
            </MenuItem>
          </Menu>
        </MenuTrigger>
      </ComponentBox>

      <ComponentBox fullWidth title="Tabs">
        <Tabs>
          <TabList>
            <Tab id="tab-1">Profile</Tab>
            <Tab id="tab-2">Account</Tab>
            <Tab id="tab-3">Notifications</Tab>
          </TabList>
          <TabPanel id="tab-1">
            <p>
              Update your personal details like name, email, and profile
              picture.
            </p>
          </TabPanel>
          <TabPanel id="tab-2">
            <p>Manage your subscription, billing information, and password.</p>
          </TabPanel>
          <TabPanel id="tab-3">
            <p>
              Configure your notification preferences for email and in-app
              alerts.
            </p>
          </TabPanel>
        </Tabs>
      </ComponentBox>

      <ComponentBox fullWidth title="Slider">
        <Slider>
          <Label>Volume</Label>
          <SliderControl />
        </Slider>
      </ComponentBox>

      <ComponentBox fullWidth title="Calendar">
        <Calendar />
      </ComponentBox>

      <ComponentBox fullWidth title="TextField">
        <TextField>
          <Label>Username</Label>
          <Input />
        </TextField>
      </ComponentBox>

      <ComponentBox fullWidth title="DatePicker">
        <DatePicker label="Select a date" />
      </ComponentBox>

      <ComponentBox fullWidth title="RadioGroup">
        <RadioGroup>
          <Label>Favorite pet</Label>
          <Radio value="dogs">Dog</Radio>
          <Radio value="cats">Cat</Radio>
          <Radio value="dragon">Dragon</Radio>
        </RadioGroup>
      </ComponentBox>
    </main>
  );
}
