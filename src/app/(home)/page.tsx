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

import ComponentBox from "@/components/web/component-box";
import {
  RiHome6Line,
  RiLogoutCircleLine,
  RiQuestionLine,
  RiSettings5Line,
  RiUserSmileLine,
} from "@remixicon/react";
import { useTheme } from "next-themes";

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
        <Button onPress={cycleTheme}>
          {theme === "light"
            ? "🔆 Light"
            : theme === "dark"
            ? "🌙 Dark"
            : "💻 System"}
        </Button>
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
            <p>
              This dialog provides additional information about the selected
              feature. Please review the details carefully.
            </p>
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
            <Tab id="tab-1">Overview</Tab>
            <Tab id="tab-2">Features</Tab>
            <Tab id="tab-3">Pricing</Tab>
          </TabList>
          <TabPanel id="tab-1">
            <p>
              Discover the key highlights and benefits of using these UI
              components for your projects.
            </p>
          </TabPanel>
          <TabPanel id="tab-2">
            <p>
              Explore the wide range of components and tools available to
              enhance your application.
            </p>
          </TabPanel>
          <TabPanel id="tab-3">
            <p>
              Choose a plan that suits your needs and start building your
              application today.
            </p>
          </TabPanel>
        </Tabs>
      </ComponentBox>
    </main>
  );
}
