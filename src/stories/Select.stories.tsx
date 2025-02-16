import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectTrigger,
} from "@/components/ui/Select";
import { createListCollection } from "@ark-ui/react";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A select component allows users to choose a single option from a dropdown list.

## Features
- Keyboard navigation support
- Screen reader accessible
- Support for disabled options
- Support for grouped options
- Customizable trigger and dropdown styling
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const fruits = createListCollection({
  items: ["Apple", "Banana", "Orange", "Mango", "Pineapple"],
});

export const Basic: Story = {
  args: {},
  render: () => (
    <Select collection={fruits} className="w-full w-[200px]">
      <SelectTrigger />
      <SelectContent>
        {fruits.items.map((fruit) => (
          <SelectItem key={fruit} item={fruit}>
            {fruit}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
};

const groupedItems = createListCollection({
  items: [
    { value: "react", label: "React", group: "Frontend" },
    { value: "vue", label: "Vue", group: "Frontend" },
    { value: "angular", label: "Angular", group: "Frontend" },
    { value: "node", label: "Node.js", group: "Backend" },
    { value: "python", label: "Python", group: "Backend" },
    { value: "java", label: "Java", group: "Backend" },
  ],
});

export const Grouped: Story = {
  args: {},
  render: () => (
    <Select collection={groupedItems} className="w-full max-w-[200px]">
      <SelectTrigger placeholder="Select framework" />
      <SelectContent>
        <SelectItemGroup>
          <SelectItemGroupLabel>Frontend</SelectItemGroupLabel>
          {groupedItems.items
            .filter((item) => item.group === "Frontend")
            .map((item) => (
              <SelectItem key={item.value} item={item}>
                {item.label}
              </SelectItem>
            ))}
        </SelectItemGroup>
        <SelectItemGroup>
          <SelectItemGroupLabel>Backend</SelectItemGroupLabel>
          {groupedItems.items
            .filter((item) => item.group === "Backend")
            .map((item) => (
              <SelectItem key={item.value} item={item}>
                {item.label}
              </SelectItem>
            ))}
        </SelectItemGroup>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  args: {},
  render: () => (
    <Select collection={fruits} className="w-full max-w-[200px]" disabled>
      <SelectTrigger />
      <SelectContent>
        {fruits.items.map((fruit) => (
          <SelectItem key={fruit} item={fruit}>
            {fruit}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
};

const fruitsWithDisabled = createListCollection({
  items: [
    { value: "Apple", label: "Apple" },
    { value: "Banana", label: "Banana", disabled: true },
    { value: "Orange", label: "Orange" },
    { value: "Mango", label: "Mango", disabled: true },
    { value: "Pineapple", label: "Pineapple" },
  ],
});

export const WithDisabledItems: Story = {
  args: {},
  render: () => (
    <Select collection={fruitsWithDisabled} className="w-full max-w-[200px]">
      <SelectTrigger />
      <SelectContent>
        {fruitsWithDisabled.items.map((fruit) => (
          <SelectItem key={fruit.value} item={fruit}>
            {fruit.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
};
