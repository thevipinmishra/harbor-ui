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
import { X } from "@phosphor-icons/react";
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
           <div className='flex gap-4 justify-between items-center'>
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
              <Button className='self-center'>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip content</p>
            </TooltipContent>
          </Tooltip>
         </div>
        </div>
      </div>
    </main>
  );
}
