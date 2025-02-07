import type { Meta, StoryObj } from "@storybook/react";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/components/ui/Menu";
import { Button } from "@/components/ui/Button";
import {
  ArrowUp,
  CreditCard,
  FolderSimple,
  SignOut,
  UserCircle,
  UserPlus,
} from "@phosphor-icons/react";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        height: '300px',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  render: () => (
    <div className="flex min-h-[200px] items-center justify-center p-8">
      <Menu>
        <MenuTrigger asChild>
          <Button>Open Menu</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="item-1">Item 1</MenuItem>
          <MenuItem value="item-2">Item 2</MenuItem>
          <MenuItem value="item-3">Item 3</MenuItem>
        </MenuContent>
      </Menu>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex min-h-[200px] items-center justify-center p-8">
      <Menu>
        <MenuTrigger asChild>
          <Button>Menu with Icons</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="upgrade">
            <ArrowUp className="mr-2 size-4" />
            Upgrade
          </MenuItem>
          <MenuItem value="billing">
            <CreditCard className="mr-2 size-4" />
            Billing
          </MenuItem>
          <MenuSeparator />
          <MenuItem value="settings">
            <UserCircle className="mr-2 size-4" />
            Settings
          </MenuItem>
        </MenuContent>
      </Menu>
    </div>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <div className="flex min-h-[200px] items-center justify-center p-8">
      <Menu>
        <MenuTrigger asChild>
          <Button>Menu with Submenu</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="workspace">
            <FolderSimple className="mr-2 size-4" />
            Workspace
          </MenuItem>
          <Menu positioning={{ placement: "right-start", gutter: -2 }}>
            <MenuSubTrigger>
              <UserPlus className="mr-2 size-4" />
              Invite Users
            </MenuSubTrigger>
            <MenuSubContent>
              <MenuItem value="email">Email Invite</MenuItem>
              <MenuItem value="link">Invite Link</MenuItem>
            </MenuSubContent>
          </Menu>
          <MenuSeparator />
          <MenuItem value="sign-out">
            <SignOut className="mr-2 size-4" />
            Sign Out
          </MenuItem>
        </MenuContent>
      </Menu>
    </div>
  ),
};
