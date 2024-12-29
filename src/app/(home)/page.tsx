"use client";

import { Button, ButtonGroup } from "@/components/ui/Button";
import { Textfield } from "@/components/ui/Textfield";
import * as React from "react";
import { Checkbox, CheckboxGroup } from "@/components/ui/Checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Switch } from "@/components/ui/Switch";
import { createListCollection } from "@ark-ui/react/select";
import {
  DotsThree,
  Gear,
  SignOut,
  SpeakerHigh,
  SpeakerX,
  User,
  Warning,
  Cherries,
  Avocado,
  Orange,
  Info,
} from "@phosphor-icons/react";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
} from "@/components/ui/RadioGroup";
import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderValueText,
} from "@/components/ui/Slider";
import {
  PinInput,
  PinInputControl,
  PinInputField,
  PinInputLabel,
} from "@/components/ui/PinInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/Select";
import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/Accordion";
import { Avatar } from "@/components/ui/Avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { Text } from "@/components/ui/Text";
import {
  NumberInput,
  NumberInputField,
  NumberInputLabel,
} from "@/components/ui/NumberInput";
import { Calendar } from "@/components/ui/Calendar";
import {
  LinearProgress,
  LinearProgressLabel,
  LinearProgressTrack,
  LinearProgressValue,
} from "@/components/ui/LinearProgress";
import { Toggle, ToggleContext } from "@/components/ui/Toggle";
import { Badge } from "@/components/ui/Badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard";
import {
  CircularProgress,
  CircularProgressCircle,
  CircularProgressLabel,
  CircularProgressValue,
} from "@/components/ui/CircularProgress";
import {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
} from "@/components/ui/Splitter";
import { SegmentGroup, SegmentGroupItem } from "@/components/ui/SegmentGroup";
import {
  Pagination,
  PaginationControls,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/Pagination";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/Menu";
import { Chip } from "@/components/ui/Chip";
import { ChipGroup, ChipGroupItem } from "@/components/ui/ChipGroup";
import { Label } from "@/components/ui/Label";
import { Alert } from "@/components/ui/Alert";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";

export default function HomePage() {
  const collection = createListCollection({
    items: [
      "React",
      "Solid",
      "Vue",
      "Angular",
      "Lit",
      "Alpine",
      "Svelte",
      "Ember",
      "Backbone",
      "Meteor",
      "Knockout",
      "Polymer",
      "Aurelia",
      "Mithril",
      "Preact",
      "Marko",
      "Inferno",
    ],
  });

  const newCollection = createListCollection({
    items: [
      { label: "React", value: "react", disabled: false },
      { label: "Solid", value: "solid", disabled: false },
      { label: "Vue", value: "vue", disabled: false },
      { label: "Angular", value: "angular", disabled: false },
      { label: "Lit", value: "lit", disabled: false },
      { label: "Alpine", value: "alpine", disabled: true },
      { label: "Svelte", value: "svelte", disabled: true },
    ],
  });

  return (
    <main className="py-10">
      <div className="max-w-md mx-auto border border-border rounded-md divide-y divide-border *:flex *:items-center *:*:w-full *:min-h-24 *:p-5">
        <div>
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-3">
              <Button size="sm">Default</Button>
              <Button size="sm" variant="outlined">
                Outlined
              </Button>
              <Button size="sm" variant="plain">
                Plain
              </Button>
              <Button size="sm" variant="destructive">
                Destructive
              </Button>
            </div>

            <div className="flex items-start gap-3">
              <Button size="md">Default</Button>
              <Button size="md" variant="outlined">
                Outlined
              </Button>
              <Button size="md" variant="plain">
                Plain
              </Button>
            </div>

            <div className="flex items-start gap-3">
              <Button size="lg">Default</Button>
              <Button size="lg" variant="outlined">
                Outlined
              </Button>
              <Button size="lg" variant="plain">
                Plain
              </Button>
            </div>

            <div className="flex items-start gap-3">
              <Button variant="filled" disabled>
                Default
              </Button>
              <Button variant="outlined" disabled>
                Outlined
              </Button>
              <Button variant="plain" disabled>
                Plain
              </Button>
            </div>

            <div className="flex items-start gap-3">
              <Button size="md" loading>
                Default
              </Button>
              <Button size="md" variant="outlined" loading>
                Outlined
              </Button>
              <Button size="md" variant="plain" loading>
                Plain
              </Button>
            </div>

            <div>
              <ButtonGroup>
                <Button variant="filled">Default</Button>
                <Button variant="outlined">Outlined</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
        <div>
          <div className="grid gap-5">
            <Textfield
              size="sm"
              label="Last name"
              placeholder="Enter your last name"
              helperText="Should be 16 digits max."
            />

            <Textfield
              size="md"
              label="Last name"
              helperText="Should be 16 digits max."
            />

            <Textfield
              size="lg"
              label={
                <div className="flex gap-2">
                  <Label>Label with tooltip</Label>
                  <Tooltip openDelay={100} closeDelay={100}>
                    <TooltipTrigger className="text-muted-foreground hover:text-foreground transition-colors">
                      <Info />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Something important about the input.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              }
              helperText="Should be 16 digits max."
            />

            <Textfield
              invalid
              size="md"
              label="Last name"
              helperText="Should be 16 digits max."
              errorMessage="This field is required."
            />

            <Textfield
              readOnly
              size="md"
              label="Last name"
              placeholder="Read only"
            />

            <Textfield
              disabled
              size="md"
              label="Last name"
              placeholder="Disabled"
            />
          </div>
        </div>

        <div>
          <div className="grid gap-5">
            <Checkbox label="I agree to sell my privacy" />

            <Checkbox
              invalid
              label="I agree to sell my privacy"
              errorMessage="No, you can't agree to that."
            />

            <Checkbox disabled label="I'm disabled" />

            <Checkbox checked="indeterminate" label="Indeterminate checkbox" />

            <Checkbox readOnly label="Read only checkbox" />

            <Checkbox label="Remember me" helperText="Sample helper text" />
            <CheckboxGroup>
              <Checkbox label="React" value="react" />
              <Checkbox label="Vue" value="vue" />
              <Checkbox label="Solid" value="solid" />
              <Checkbox label="Angular" value="angular" />
              <Checkbox label="Lit" value="lit" />
              <Checkbox label="Something else" value="something else" />
            </CheckboxGroup>
          </div>
        </div>

        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="space-y-6">
              <DialogTitle>Dialog Title</DialogTitle>
              <form className="space-y-4">
                <Textfield label="Username" />
                <Textfield label="Password" type="password" />
                <Button fullWidth>Submit</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div>
          <div className="grid gap-4">
            <PinInput>
              <PinInputLabel>Enter OTP</PinInputLabel>
              <PinInputControl>
                {[1, 2, 3, 4, 5].map((id, index) => (
                  <PinInputField key={id} index={index} />
                ))}
              </PinInputControl>
            </PinInput>

            <PinInput invalid errorMessage="Invalid OTP">
              <PinInputLabel>Enter passcode to continue</PinInputLabel>
              <PinInputControl>
                {[1, 2, 3, 4].map((id, index) => (
                  <PinInputField key={id} index={index} />
                ))}
              </PinInputControl>
            </PinInput>

            <PinInput helperText="Sample helper text" mask>
              <PinInputLabel>Enter passcode with input mask</PinInputLabel>
              <PinInputControl>
                {[1, 2, 3, 4].map((id, index) => (
                  <PinInputField key={id} index={index} />
                ))}
              </PinInputControl>
            </PinInput>

            <PinInput disabled>
              <PinInputLabel>Disabled pin input</PinInputLabel>
              <PinInputControl>
                {[1, 2, 3, 4].map((id, index) => (
                  <PinInputField key={id} index={index} />
                ))}
              </PinInputControl>
            </PinInput>

            <PinInput readOnly>
              <PinInputLabel>Read only pin input</PinInputLabel>
              <PinInputControl>
                {[1, 2, 3, 4].map((id, index) => (
                  <PinInputField key={id} index={index} />
                ))}
              </PinInputControl>
            </PinInput>
          </div>
        </div>

        <div>
          <div className="grid gap-5">
            <RadioGroup>
              <RadioGroupLabel>Choose your favorite framework</RadioGroupLabel>
              <RadioGroupItem value="react">React</RadioGroupItem>
              <RadioGroupItem value="solid">Solid</RadioGroupItem>
              <RadioGroupItem value="vue">Vue</RadioGroupItem>
              <RadioGroupItem value="angular">Angular</RadioGroupItem>
              <RadioGroupItem value="lit">Lit</RadioGroupItem>
              <RadioGroupItem value="something else">
                Something else
              </RadioGroupItem>
            </RadioGroup>

            <RadioGroup>
              <RadioGroupLabel>Favourite fruit</RadioGroupLabel>
              <RadioGroupItem value="apple">Apple</RadioGroupItem>
              <RadioGroupItem value="banana">Banana</RadioGroupItem>
              <RadioGroupItem value="orange">Orange</RadioGroupItem>
              <RadioGroupItem value="grape">Grape</RadioGroupItem>
              <RadioGroupItem value="mango">Mango</RadioGroupItem>
              <RadioGroupItem value="watermelon" disabled>
                Watermelon
              </RadioGroupItem>
            </RadioGroup>

            <RadioGroup disabled>
              <RadioGroupLabel>Favourite fruit</RadioGroupLabel>
              <RadioGroupItem value="apple">Apple</RadioGroupItem>
              <RadioGroupItem value="banana">Banana</RadioGroupItem>
              <RadioGroupItem value="orange">Orange</RadioGroupItem>
              <RadioGroupItem value="grape">Grape</RadioGroupItem>
              <RadioGroupItem value="mango">Mango</RadioGroupItem>
              <RadioGroupItem value="watermelon" disabled>
                Watermelon
              </RadioGroupItem>
            </RadioGroup>
          </div>
        </div>

        <div>
          <div className="grid gap-5">
            <Select collection={collection}>
              <SelectLabel>Select a framework</SelectLabel>
              <SelectTrigger />
              <SelectContent>
                {collection.items.map((item) => (
                  <SelectItem item={item} key={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              invalid
              errorMessage="Invalid choice"
              collection={collection}
            >
              <SelectLabel>Select a framework</SelectLabel>
              <SelectTrigger />
              <SelectContent>
                {collection.items.map((item) => (
                  <SelectItem item={item} key={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              disabled
              helperText="Please try again later"
              collection={collection}
            >
              <SelectLabel>Disabled select</SelectLabel>
              <SelectTrigger />
              <SelectContent>
                {collection.items.map((item) => (
                  <SelectItem item={item} key={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select collection={newCollection}>
              <SelectLabel>Select a new framework</SelectLabel>
              <SelectTrigger />
              <SelectContent>
                {newCollection.items.map((item) => (
                  <SelectItem item={item} key={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <div className="grid gap-5">
            <Slider>
              <div className="flex gap-4 justify-between items-center">
                <SliderLabel>Volume</SliderLabel>
                <SliderValueText />
              </div>
              <SliderControl />
            </Slider>

            <Slider invalid>
              <div className="flex gap-4 justify-between items-center">
                <SliderLabel>Volume</SliderLabel>
                <SliderValueText />
              </div>
              <SliderControl />
            </Slider>
          </div>
        </div>

        <div>
          <Switch label="Dark mode" />
        </div>

        <div>
          <div className="grid gap-5 justify-start">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outlined" className="self-center">
                  Hover me
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tooltip content</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip
              positioning={{
                placement: "top",
              }}
            >
              <TooltipTrigger asChild>
                <Button variant="outlined" className="self-center">
                  Top tooltip
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tooltip content</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div>
          <Accordion collapsible>
            <AccordionItem value="item-1">
              <AccordionItemTrigger>
                What is React and why is it so awesome to use?
              </AccordionItemTrigger>
              <AccordionItemContent>
                React is a JavaScript library for building user interfaces.
              </AccordionItemContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionItemTrigger>What is Solid?</AccordionItemTrigger>
              <AccordionItemContent>
                Solid is a declarative JavaScript library for building user
                interfaces.
              </AccordionItemContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionItemTrigger>What is Vue?</AccordionItemTrigger>
              <AccordionItemContent>
                Vue is a progressive framework for building user interfaces.
              </AccordionItemContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionItemTrigger>What is Angular?</AccordionItemTrigger>
              <AccordionItemContent>
                Angular is a platform for building mobile and desktop web
                applications.
              </AccordionItemContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <div className="flex gap-5">
            <Avatar
              fallback="VM"
              src="https://avatars.githubusercontent.com/u/54212400?v=4"
            />

            <Avatar
              className="size-16"
              fallback="V"
              src="https://avatar.iran.liara.run/public/39"
            />
          </div>
        </div>

        <div>
          <Tabs defaultValue={"react"}>
            <TabsList>
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="vue">Vue</TabsTrigger>
              <TabsTrigger value="solid">Solid</TabsTrigger>
            </TabsList>
            <TabsContent value="react">React Content</TabsContent>
            <TabsContent value="vue">Vue Content</TabsContent>
            <TabsContent value="solid">Solid Content</TabsContent>
          </Tabs>
        </div>

        <div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button>Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="space-y-2">
                <Text>
                  This is a popover message providing additional information.
                </Text>
                <Button variant="outlined">Learn more</Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div>
          <div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button>Hover card</Button>
              </HoverCardTrigger>
              <HoverCardContent className="space-y-2">
                <Text>This is a message providing additional information.</Text>
                <Button variant="outlined">Learn more</Button>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        <div>
          <NumberInput min={0} max={50}>
            <NumberInputLabel>Quantity</NumberInputLabel>
            <NumberInputField placeholder="Enter 0-50" />
          </NumberInput>
        </div>

        <div>
          <div>
            <Calendar />
          </div>
        </div>

        <div>
          <LinearProgress>
            <div className="flex gap-6 items-baseline justify-between">
              <LinearProgressLabel>Progress</LinearProgressLabel>
              <LinearProgressValue />
            </div>
            <LinearProgressTrack />
          </LinearProgress>
        </div>

        <div>
          <CircularProgress>
            <CircularProgressLabel>Progress</CircularProgressLabel>
            <CircularProgressCircle />
            <CircularProgressValue />
          </CircularProgress>
        </div>

        <div>
          <Splitter
            defaultSize={[
              { id: "a", size: 50 },
              { id: "b", size: 50 },
            ]}
          >
            <SplitterPanel
              id="a"
              className="bg-muted text-muted-foreground p-4"
            >
              A
            </SplitterPanel>
            <SplitterResizeTrigger id="a:b" />
            <SplitterPanel
              id="b"
              className="bg-muted text-muted-foreground p-4"
            >
              B
            </SplitterPanel>
          </Splitter>
        </div>

        <div>
          <div className="flex justify-center">
            <Toggle asChild>
              <Button size="icon-lg">
                <ToggleContext>
                  {(context) =>
                    context.pressed ? <SpeakerHigh /> : <SpeakerX />
                  }
                </ToggleContext>
              </Button>
            </Toggle>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-4">
            <Badge>Updated</Badge>
            <Badge variant="outlined">Draft</Badge>
            <Badge variant="plain">Due in 30 days</Badge>
            <Badge variant="destructive">Due in 18 mins.</Badge>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <SegmentGroup defaultValue="Cherry">
              {[
                { name: "Cherry", icon: <Cherries size={20} /> },
                { name: "Avocado", icon: <Avocado size={20} /> },
                { name: "Orange", icon: <Orange size={20} /> },
              ].map((item) => (
                <SegmentGroupItem value={item.name} key={item.name}>
                  {item.icon}
                  {item.name}
                </SegmentGroupItem>
              ))}
            </SegmentGroup>
          </div>
        </div>

        <div>
          <div>
            <Pagination count={90}>
              <PaginationPrevTrigger />
              <PaginationControls />
              <PaginationNextTrigger />
            </Pagination>
          </div>
        </div>

        <div>
          <div>
            <Menu>
              <MenuTrigger asChild>
                <Button>Menu</Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="profile">
                  <User /> Profile
                </MenuItem>
                <MenuItem value="settings">
                  <Gear /> Settings
                </MenuItem>
                <MenuSeparator />
                <MenuItem value="logout">
                  <SignOut /> Logout
                </MenuItem>
              </MenuContent>
            </Menu>
          </div>

          <div>
            <ButtonGroup>
              <Button>Button</Button>
              <Menu>
                <MenuTrigger asChild>
                  <Button variant="outlined">
                    <DotsThree />
                  </Button>
                </MenuTrigger>
                <MenuContent>
                  <MenuItem value="profile">
                    <User /> Profile
                  </MenuItem>
                  <MenuItem value="settings">
                    <Gear /> Settings
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem value="logout">
                    <SignOut /> Logout
                  </MenuItem>
                </MenuContent>
              </Menu>
            </ButtonGroup>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-4">
            <Chip>Chip</Chip>
            <Chip variant="outlined">Chip</Chip>
          </div>
        </div>

        <div>
          <ChipGroup>
            <ChipGroupItem value="a">Chip A</ChipGroupItem>
            <ChipGroupItem value="b">Chip B</ChipGroupItem>
            <ChipGroupItem value="c">Chip C</ChipGroupItem>
          </ChipGroup>
        </div>
        <div>
          <ChipGroup multiple>
            <ChipGroupItem value="a">Chip A</ChipGroupItem>
            <ChipGroupItem value="b">Chip B</ChipGroupItem>
            <ChipGroupItem value="c">Chip C</ChipGroupItem>
          </ChipGroup>
        </div>
        <div>
          <div className="grid gap-5">
            <Alert title="Alert" description="This is an alert message." />
            <Alert
              icon={<Warning />}
              variant="destructive"
              title="Heads up!"
              description="This is an alert message."
            />
          </div>
        </div>

        <div>
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button>Toggle</Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet tortor nec odio fermentum ultrices. Donec nec sollicitudin
                metus. Nullam nec nisi at orci tincidunt fermentum. Nullam nec
                nisi at orci tincidunt fermentum. Nullam nec nisi at orci
                tincidunt
              </Text>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </main>
  );
}
