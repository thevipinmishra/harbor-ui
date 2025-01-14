"use client";

import { Button, ButtonGroup } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Warning } from "@phosphor-icons/react";
import { Input } from "@/components/ui/Input";
import { Field } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";
import { Description } from "@/components/ui/Description";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import {
  Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import {
  NumberInput,
  NumberInputField,
  NumberInputLabel,
} from "@/components/ui/NumberInput";
import { Avatar } from "@/components/ui/Avatar";
import { Calendar } from "@/components/ui/Calendar";
import { Checkbox } from "@/components/ui/Checkbox";
import { Chip } from "@/components/ui/Chip";
import { ChipGroup, ChipGroupItem } from "@/components/ui/ChipGroup";
import {
  CircularProgress,
  CircularProgressCircle,
} from "@/components/ui/CircularProgress";
import {
  LinearProgress,
  LinearProgressTrack,
} from "@/components/ui/LinearProgress";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/HoverCard";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@/components/ui/Menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

export default function HomePage() {
  return (
    <main className="py-10">
      <div className="max-w-md mx-auto border border-border rounded-md divide-y divide-border  *:min-h-24 *:p-5">
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
          <ScrollArea className="h-44 bg-secondary p-2 rounded-lg">
            <div className="space-y-3 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet tortor nec odio fermentum ultrices. Donec nec sollicitudin
                metus. Nullam nec nisi at orci tincidunt fermentum. Nullam nec
                nisi at orci tincidunt fermentum. Nullam nec nisi at orci
                tincidunt
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet tortor nec odio fermentum ultrices. Donec nec sollicitudin
                metus. Nullam nec nisi at orci tincidunt fermentum. Nullam nec
                nisi at orci tincidunt fermentum. Nullam nec nisi at orci
                tincidunt
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet tortor nec odio fermentum ultrices. Donec nec sollicitudin
                metus. Nullam nec nisi at orci tincidunt fermentum. Nullam nec
                nisi at orci tincidunt fermentum. Nullam nec nisi at orci
                tincidunt
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet tortor nec odio fermentum ultrices. Donec nec sollicitudin
                metus. Nullam nec nisi at orci tincidunt fermentum. Nullam nec
                nisi at orci tincidunt fermentum. Nullam nec nisi at orci
                tincidunt
              </p>
            </div>
          </ScrollArea>
        </div>

        <div>
          <Field invalid>
            <Label>Label</Label>
            <Description>Description of the input</Description>
            <Input placeholder="First name" />

            <ErrorMessage>Something went wrong</ErrorMessage>
          </Field>
        </div>

        <div>
          <Field invalid>
            <NumberInput>
              <NumberInputLabel>Number</NumberInputLabel>
              <NumberInputField />
            </NumberInput>
            <Description>Description of the input</Description>
            <ErrorMessage>Something went wrong</ErrorMessage>
          </Field>
        </div>

        <div>
          <Accordion defaultValue={["React"]} collapsible>
            {["React", "Solid", "Vue"].map((item) => (
              <AccordionItem key={item} value={item}>
                <AccordionItemTrigger>What is {item}?</AccordionItemTrigger>
                <AccordionItemContent>
                  {item} is a JavaScript library for building user interfaces.
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <div className="flex">
            <Avatar
              fallback="V"
              src="https://avatar.iran.liara.run/public/10"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge>Badge</Badge>
            <Badge variant="outlined">Badge</Badge>
            <Badge variant="plain">Badge</Badge>
            <Badge variant="destructive">Badge</Badge>
          </div>
        </div>

        <div>
          <Calendar />
        </div>

        <div>
          <Checkbox label="Checkbox" />
        </div>

        <div>
          <div className="flex gap-2 items-center">
            <Chip value={"apple"}>Apple</Chip>
            <Chip value={"banana"}>Banana</Chip>
            <Chip value={"cherry"}>Cherry</Chip>
            <Chip value={"date"}>Date</Chip>
          </div>
        </div>

        <div>
          <ChipGroup>
            <ChipGroupItem value={"apple"}>Apple</ChipGroupItem>
            <ChipGroupItem value={"banana"}>Banana</ChipGroupItem>
            <ChipGroupItem value={"cherry"}>Cherry</ChipGroupItem>
            <ChipGroupItem value={"date"}>Date</ChipGroupItem>
          </ChipGroup>
        </div>

        <div>
          <CircularProgress defaultValue={50}>
            <CircularProgressCircle className="[--thickness:6px]" />
          </CircularProgress>
        </div>

        <div>
          <LinearProgress defaultValue={50}>
            <LinearProgressTrack />
          </LinearProgress>
        </div>

        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae facere maiores hic unde dolor, sapiente fuga repudiandae ipsam alias saepe quisquam laborum incidunt nulla voluptates odit. Libero, veniam reprehenderit!
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>

        <div>
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button>Hover me</Button>
                </HoverCardTrigger>
                <HoverCardContent className="max-w-sm">
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat vitae facere maiores hic unde dolor,
                            sapiente fuga repudiandae ipsam alias saepe
                            quisquam laborum incidunt nulla voluptates odit.
                            Libero, veniam reprehenderit!
                        </p>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>

        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button>Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat vitae facere maiores hic unde dolor,
                            sapiente fuga repudiandae ipsam alias saepe
                            quisquam laborum incidunt nulla voluptates odit.
                            Libero, veniam reprehenderit!
                        </p>
                    </div>
                </PopoverContent>
            </Popover>
        </div>

        <div>
            <Menu>
                <MenuTrigger asChild>
                    <Button>Menu</Button>
                </MenuTrigger>
                <MenuContent>
                    <MenuItem value="item-1">Item 1</MenuItem>
                    <MenuItem value="item-2">Item 2</MenuItem>
                    <MenuItem value="item-3">Item 3</MenuItem>
                </MenuContent>
            </Menu>
        </div>

        <div>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button>Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Tooltip</p>
                </TooltipContent>
            </Tooltip>
        </div>

      
      </div>
    </main>
  );
}
