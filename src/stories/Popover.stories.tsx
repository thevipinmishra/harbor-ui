import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/Select";
import { Switch } from "@/components/ui/Switch";
import { createListCollection } from "@ark-ui/react";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="text-sm">
          <p>This is a basic popover example.</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const QuickForm: Story = {
  render: () => {
    const categoryCollection = createListCollection({ items: ['work', 'personal', 'other'] })
    
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button>Add New Contact</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-4">
            <h3 className="font-medium mb-4">Add Contact</h3>
            <div className="space-y-2">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Select collection={categoryCollection}>
                <SelectLabel>Category</SelectLabel>
                <SelectTrigger />
                <SelectContent>
                  {categoryCollection.items.map((item) => (
                    <SelectItem key={item} item={item}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              <Button size="sm">Save Contact</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const Settings: Story = {
  render: () => {
    const frequencyCollection = createListCollection({ items: ['instant', 'hourly', 'daily'] })
    
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outlined">Notification Settings</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <h3 className="font-medium">Notification Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Email notifications</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Push notifications</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Weekly digest</span>
                <Switch />
              </div>
            </div>
            <Select collection={frequencyCollection}>
              <SelectLabel>Email frequency</SelectLabel>
              <SelectTrigger />
              <SelectContent>
                {frequencyCollection.items.map((item) => (
                  <SelectItem key={item} item={item}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};
