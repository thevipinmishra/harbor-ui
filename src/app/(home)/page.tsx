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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/Select";
import { createListCollection } from "@ark-ui/react";
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

export default function HomePage() {
  const collection = createListCollection({
    items: [
      "React and solid and vue and angular and lit and something else i dont even know",
      "Solid",
      "Vue",
      "Angular",
      "Lit",
      "jQuery",
      "Alpine",
      "Astro",
      "Remix",
      "Tanstack Start",
      "Solid Start",
    ],
  });
  const frameworks = [
    "React and solid and vue and angular and lit and something else i dont even know",
    "Solid",
    "Vue",
  ];
  return (
    <main>
      <div className="py-8 ">
        <div className="container space-y-10">
          <div>
            <Checkbox label="I agree to agree with all the terms and policies mentioned in the group and know the consequences of providing the forged documents and details" />
          </div>

          <div>
            <CheckboxGroup name="something">
              <Checkbox label="I agree to sell my privacy." />
              <Checkbox label="I agree to sell my privacy." />
              <Checkbox label="I agree to sell my privacy." />
            </CheckboxGroup>
          </div>

          <div>
            <Tooltip>
              <TooltipTrigger>Tooltip</TooltipTrigger>
              <TooltipContent>
                <div>Tooltip content</div>
              </TooltipContent>
            </Tooltip>
          </div>

          <div>
            <Dialog>
              <DialogTrigger>Open dialog</DialogTrigger>
              <DialogContent className="space-y-4">
                <div className="flex justify-between items-baseline gap-4">
                  <DialogTitle>Login to continue</DialogTitle>
                  <DialogCloseTrigger asChild>
                    <Button size="icon" variant="outlined">
                      <X />
                    </Button>
                  </DialogCloseTrigger>
                </div>
                <form className="space-y-4">
                  <Textfield placeholder="thevipinmishra" label="Username" />
                  <Textfield
                    placeholder="thevipinmishra@gmail.com"
                    label="Email address"
                  />
                  <Textfield
                    placeholder="Password"
                    type="password"
                    helperText="Should contain minimum 8 characters, including a number and a symbol."
                    label="Password"
                  />
                  <Button fullWidth>Submit</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div>
            <Switch label="Airplane mode" />
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
            <Splitter
              className="items-stretch"
              defaultSize={[
                { id: "a", size: 50 },
                { id: "b", size: 50 },
              ]}
            >
              <SplitterPanel id="a">
                <div className="border border-border p-4 h-full rounded-md">
                  Panel 1
                </div>
              </SplitterPanel>
              <SplitterResizeTrigger id="a:b"></SplitterResizeTrigger>
              <SplitterPanel id="b">
                <div className="border border-border p-4 h-full rounded-md">
                  Panel 2
                </div>
              </SplitterPanel>
            </Splitter>
          </div>

          <div>
            <RadioGroup>
              <RadioGroupLabel>Framework</RadioGroupLabel>

              {frameworks.map((framework) => (
                <RadioGroupItem key={framework} value={framework}>
                  {framework}
                </RadioGroupItem>
              ))}
            </RadioGroup>
          </div>

          <div>
            <Slider>
              <SliderLabel>Slider</SliderLabel>
              <SliderControl />
            </Slider>
          </div>
        </div>
      </div>
    </main>
  );
}
