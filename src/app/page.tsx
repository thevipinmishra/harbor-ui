"use client";

import { Button } from "@/components/ui/Button";
import { Textfield } from "@/components/ui/Textfield";
import * as React from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { Checkbox, CheckboxGroup } from "@/components/ui/Checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import { Switch } from "@/components/ui/Switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/Select";
import { createListCollection } from "@ark-ui/react";

export default function Home() {
  const { register, control } = useForm({
    defaultValues: {
      input: "",
    },
  });

  const collection = createListCollection({ items: ["React", "Solid", "Vue"] });
  return (
    <div className="py-8 ">
      <div className="container space-y-10">
        <div className="flex flex-wrap gap-2">
          <Button size="md" variant="plain">
            Hello world
          </Button>
          <Textfield
            {...register("input")}
            label="First name"
            helperText="Please enter your first name."
          />
        </div>

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
            <DialogContent>
              <div>Dialog content</div>
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
                  <SelectItemText>{item}</SelectItemText>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <DevTool control={control} placement="bottom-right" />
    </div>
  );
}
