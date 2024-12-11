"use client";

import { Button } from "@/components/ui/Button";
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
  DialogCloseTrigger,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Switch } from "@/components/ui/Switch";
import { createListCollection } from "@ark-ui/react/select";
import {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
} from "@/components/ui/Splitter";
import Link from "next/link";
import { SpeakerHigh, SpeakerX, X } from "@phosphor-icons/react";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
} from "@/components/ui/RadioGroup";
import {
  Slider,
  SliderContext,
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
  AccordionContext,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/Accordion";
import { MenuItem } from "@ark-ui/react";
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
import { Flex } from "@/components/ui/Flex";
import { Badge } from "@/components/ui/Badge";

export default function HomePage() {
  const collection = createListCollection({ items: ["React", "Solid", "Vue"] });

  return (
    <main>
      <div className=" border border-border rounded-md divide-y divide-border *:flex *:items-center *:*:w-full *:min-h-24 *:p-5">
        <div>
          <div className="flex gap-4 flex-wrap">
            <Button>Default</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="plain">Plain</Button>
          </div>
        </div>
        <div>
          <div className="grid gap-5">
            <Textfield placeholder="Username" />
            <Textfield label="Account number" />
            <Textfield
              label="Account number"
              helperText="Should be 16 digits max."
            />
            <Textfield
              label="Last name"
              helperText="Should be 16 digits max."
              errorMessage="Invalid last name"
              invalid
            />
          </div>
        </div>

        <div>
          <div className="grid gap-5">
            <Checkbox label="I agree to the terms and conditions" />

            <Checkbox label="Remember me" helperText="Sample helper text" />
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
          <PinInput>
            <PinInputLabel>Enter OTP</PinInputLabel>
            <PinInputControl>
              {[1, 2, 3, 4, 5].map((id, index) => (
                <PinInputField key={id} index={index} />
              ))}
            </PinInputControl>
          </PinInput>
        </div>

        <div>
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
        </div>

        <div>
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
        </div>

        <div>
          <Slider>
            <div className="flex gap-4 justify-between items-center">
              <SliderLabel>Volume</SliderLabel>
              <SliderValueText />
            </div>
            <SliderControl />
          </Slider>
        </div>

        <div>
          <Switch label="Dark mode" />
        </div>

        <div>
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="self-center">Hover me</Button>
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
                <Button>Click me</Button>
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
           <div className="flex flexflex-wrap items-center gap-4">
            <Badge>Updated</Badge>
            <Badge variant="outlined">Draft</Badge>
            <Badge variant="plain">Due in 30 days</Badge>
            <Badge variant="destructive">Due in 18 mins.</Badge>
           </div>
        </div>
      </div>
    </main>
  );
}
