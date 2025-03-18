"use client";

import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/Accordion";
import { Alert } from "@/components/ui/Alert";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { Card, CardBody } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Chip } from "@/components/ui/Chip";
import { ChipGroup, ChipGroupItem } from "@/components/ui/ChipGroup";
import {
  CircularProgress,
  CircularProgressCircle,
} from "@/components/ui/CircularProgress";
import { DatePicker } from "@/components/ui/Datepicker";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Field } from "@/components/ui/Field";
import { HelperText } from "@/components/ui/HelperText";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  LinearProgress,
  LinearProgressLabel,
  LinearProgressTrack,
  LinearProgressValue,
} from "@/components/ui/LinearProgress";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@/components/ui/Menu";
import {
  NumberInput,
  NumberInputField,
  NumberInputLabel,
} from "@/components/ui/NumberInput";
import {
  Pagination,
  PaginationControls,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/Pagination";
import {
  PinInput,
  PinInputControl,
  PinInputField,
} from "@/components/ui/PinInput";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { SegmentGroup, SegmentGroupItem } from "@/components/ui/SegmentGroup";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/Select";
import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderValueText,
} from "@/components/ui/Slider";
import { Switch } from "@/components/ui/Switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Toggle, ToggleContext } from "@/components/ui/Toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import ComponentBox from "@/components/web/component-box";
import { createListCollection } from "@ark-ui/react";
import {
  Bell,
  CreditCard,
  SignOut,
  User,
  Microphone,
  MicrophoneSlash,
} from "@phosphor-icons/react";
import { GearFine } from "@phosphor-icons/react/dist/ssr";

export default function HomePage() {
  const countries = createListCollection({
    items: [
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
      "Germany",
    ],
  });
  const frameworks = createListCollection({
    items: ["React", "Vue", "Angular", "Svelte"],
  });

  return (
    <main className="py-10 container space-y-10">
      {/* Basic Elements */}
      <ComponentBox title="Button">
        <div className="flex flex-wrap gap-3">
          <Button variant="filled">Save Changes</Button>
          <Button variant="outlined">Cancel</Button>
          <Button variant="plain">View Details</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="filled" disabled>
            Disabled
          </Button>
          <Button variant="filled" size="sm">
            <User className="size-3 mr-1" /> Profile
          </Button>
          <Button variant="outlined" size="icon-lg">
            <Bell />
          </Button>
        </div>
      </ComponentBox>

      <ComponentBox title="Badge">
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="outlined">Outlined</Badge>
          <Badge variant="destructive">Error</Badge>
          <Badge variant="plain">Plain</Badge>
          <Badge variant="outlined" className="rounded-full px-2">
            New
          </Badge>
        </div>
      </ComponentBox>

      <ComponentBox title="Avatar">
        <div className="flex items-center gap-3">
          <Avatar fallback="JD" src="https://avatar.iran.liara.run/public/29" />
          <Avatar fallback="TS" src="https://avatar.iran.liara.run/public/42" />
          <div className="flex -space-x-2">
            <Avatar
              fallback="AB"
              src="https://avatar.iran.liara.run/public/45"
              className="border-2 border-white"
            />
            <Avatar
              fallback="CD"
              src="https://avatar.iran.liara.run/public/22"
              className="border-2 border-white"
            />
            <Avatar
              fallback="EF"
              src="https://avatar.iran.liara.run/public/56"
              className="border-2 border-white"
            />
            <div className="flex items-center justify-center size-12 rounded-full bg-gray-200 border-2 border-white text-xs font-medium">
              +3
            </div>
          </div>
        </div>
      </ComponentBox>

      <ComponentBox title="Chip">
        <div className="flex gap-2">
          <Chip>React</Chip>
          <Chip variant="outlined">TypeScript</Chip>
          <Chip>
            <User className="size-3 mr-1" />
            User
          </Chip>
          <Chip variant="outlined" color="primary">
            Pro Plan
          </Chip>
        </div>
      </ComponentBox>

      <ComponentBox title="Alert" fullWidth>
        <div className="space-y-3">
          <Alert
            variant="success"
            title="Success"
            description="Your changes have been saved successfully"
          />
          <Alert
            variant="destructive"
            title="Error"
            description="There was a problem processing your request"
          />
          <Alert
            variant="info"
            title="Information"
            description="Your account will be updated within 24 hours"
          />
          <Alert
            variant="warning"
            title="Warning"
            description="Your subscription expires in 3 days"
          />
        </div>
      </ComponentBox>

      <ComponentBox title="Tooltip">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Profile Settings</Button>
          </TooltipTrigger>
          <TooltipContent>Manage your profile preferences</TooltipContent>
        </Tooltip>
      </ComponentBox>

      {/* Form Elements */}
      <ComponentBox fullWidth title="Input Field">
        <div className="space-y-4">
          <Field>
            <Label>Email Address</Label>
            <Input placeholder="john.doe@example.com" />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password" />
            <HelperText>Must be at least 8 characters</HelperText>
          </Field>
          <Field>
            <Label>Username</Label>
            <Input placeholder="username" className="border-red-500" />
            <HelperText className="text-red-500">
              Username already taken
            </HelperText>
          </Field>
          <Field>
            <Label>Bio</Label>
            <Input placeholder="Tell us about yourself" disabled />
            <HelperText>Only available for premium users</HelperText>
          </Field>
        </div>
      </ComponentBox>

      <ComponentBox title="Checkbox">
        <div className="space-y-2">
          <Checkbox label="I agree to the Terms of Service" />
          <Checkbox label="Subscribe to newsletter" defaultChecked />
        </div>
      </ComponentBox>

      <ComponentBox title="Switch">
        <div className="space-y-3">
          <Switch label="Dark Mode" />
          <Switch label="Email Notifications" defaultChecked />
        </div>
      </ComponentBox>

      <ComponentBox title="RadioGroup">
        <RadioGroup defaultValue="monthly">
          <p className="text-sm mb-2 font-medium">Subscription Plan</p>
          <RadioGroupItem value="monthly">Monthly ($9.99/mo)</RadioGroupItem>
          <RadioGroupItem value="yearly">Yearly ($99.99/yr)</RadioGroupItem>
          <RadioGroupItem value="lifetime">Lifetime ($299)</RadioGroupItem>
        </RadioGroup>
      </ComponentBox>

      <ComponentBox fullWidth title="Select">
        <Select collection={countries}>
          <SelectLabel>Country</SelectLabel>
          <SelectTrigger />
          <SelectContent>
            {countries.items.map((country) => (
              <SelectItem key={country} item={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </ComponentBox>

      <ComponentBox fullWidth title="NumberInput">
        <NumberInput defaultValue={"1"}>
          <NumberInputLabel>Quantity</NumberInputLabel>
          <NumberInputField />
        </NumberInput>
      </ComponentBox>

      <ComponentBox fullWidth title="Slider">
        <Slider defaultValue={[50]} max={100}>
          <div className="flex gap-4 items-center justify-between">
            <SliderLabel>Volume</SliderLabel>
            <SliderValueText />
          </div>
          <SliderControl />
        </Slider>
      </ComponentBox>

      {/* Date Elements */}
      <ComponentBox fullWidth title="Datepicker">
        <DatePicker placeholder="Select delivery date" />
      </ComponentBox>

      <ComponentBox fullWidth title="Calendar">
        <div className="max-w-sm">
          <Calendar />
        </div>
      </ComponentBox>

      {/* Group/Collection Elements */}
      <ComponentBox title="Chip Group" fullWidth>
        <div>
          <p className="text-sm mb-2 font-medium">Filter by technology:</p>
          <ChipGroup>
            <ChipGroupItem value="react">React</ChipGroupItem>
            <ChipGroupItem value="typescript">TypeScript</ChipGroupItem>
            <ChipGroupItem value="node">Node.js</ChipGroupItem>
          </ChipGroup>
        </div>
      </ComponentBox>

      <ComponentBox title="Segment Group">
        <div>
          <p className="text-sm mb-2 font-medium">View mode:</p>
          <SegmentGroup defaultValue="grid">
            <SegmentGroupItem value="list">List</SegmentGroupItem>
            <SegmentGroupItem value="grid">Grid</SegmentGroupItem>
            <SegmentGroupItem value="gallery">Gallery</SegmentGroupItem>
          </SegmentGroup>
        </div>
      </ComponentBox>

      <ComponentBox title="Tabs" fullWidth>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="pt-4 space-y-4">
            <Field>
              <Label>Display Name</Label>
              <Input placeholder="John Doe" defaultValue="John Doe" />
            </Field>
            <Field>
              <Label>Email Address</Label>
              <Input
                placeholder="john.doe@example.com"
                defaultValue="john.doe@example.com"
              />
            </Field>
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </TabsContent>
          <TabsContent value="password" className="pt-4 space-y-4">
            <Field>
              <Label>Current Password</Label>
              <Input type="password" placeholder="••••••••" />
            </Field>
            <Field>
              <Label>New Password</Label>
              <Input type="password" placeholder="••••••••" />
            </Field>
            <Field>
              <Label>Confirm Password</Label>
              <Input type="password" placeholder="••••••••" />
            </Field>
            <div className="flex justify-end">
              <Button>Update Password</Button>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="pt-4">
            <div className="space-y-3">
              <Switch label="Email notifications" defaultChecked />
              <Switch label="Push notifications" defaultChecked />
              <Switch label="Monthly newsletter" />
              <Switch label="Product updates" defaultChecked />
            </div>
          </TabsContent>
        </Tabs>
      </ComponentBox>

      {/* Progress Elements */}
      <ComponentBox title="Circular Progress">
        <div className="flex items-center gap-6">
          <CircularProgress value={25}>
            <CircularProgressCircle />
          </CircularProgress>
          <CircularProgress value={75}>
            <CircularProgressCircle />
          </CircularProgress>
        </div>
      </ComponentBox>

      <ComponentBox fullWidth title="Linear Progress">
        <div className="space-y-3">
          <LinearProgress value={35}>
            <div className="flex items-center gap-1">
              <LinearProgressLabel>Uploading file</LinearProgressLabel>
              <span>
                (<LinearProgressValue />)
              </span>
            </div>
            <LinearProgressTrack />
          </LinearProgress>
        </div>
      </ComponentBox>

      {/* Interactive Elements */}
      <ComponentBox title="Toggle">
        <Toggle asChild>
          <Button variant="outlined" size="icon-lg">
            <ToggleContext>
              {(api) =>
                api.pressed ? (
                  <Microphone size={20} />
                ) : (
                  <MicrophoneSlash size={20} />
                )
              }
            </ToggleContext>
          </Button>
        </Toggle>
      </ComponentBox>

      <ComponentBox title="Menu">
        <Menu>
          <MenuTrigger asChild>
            <Button>Account Menu</Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="profile">
              <User className="size-4" /> Profile
            </MenuItem>
            <MenuItem value="billing">
              <CreditCard className="size-4" /> Billing
            </MenuItem>
            <MenuItem value="notifications">
              <Bell className="size-4" /> Notifications
              <Badge className="ml-2">3</Badge>
            </MenuItem>
            <MenuItem value="settings">
              <GearFine className="size-4" /> Settings
            </MenuItem>
            <div className="h-px bg-gray-200 my-1"></div>
            <MenuItem value="logout" className="text-red-500">
              <SignOut className="size-4" /> Logout
            </MenuItem>
          </MenuContent>
        </Menu>
      </ComponentBox>

      <ComponentBox title="Popover">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outlined">Notifications</Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <h3 className="font-medium">Recent Notifications</h3>
            <div className="mt-2 space-y-2">
              <p className="text-sm">New comment on your post</p>
              <p className="text-sm">Someone mentioned you in a thread</p>
            </div>
          </PopoverContent>
        </Popover>
      </ComponentBox>

      <ComponentBox title="Dialog">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Project</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Project</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <Field>
                <Label>Project Name</Label>
                <Input placeholder="My Awesome Project" />
              </Field>

              <Field>
                <Label>Description</Label>
                <Input placeholder="Describe your project" />
              </Field>

              <Select collection={frameworks}>
                <SelectLabel>Framework</SelectLabel>
                <SelectTrigger />
                <SelectContent
                  portalProps={{
                    disabled: true,
                  }}
                >
                  {frameworks.items.map((framework) => (
                    <SelectItem key={framework} item={framework}>
                      {framework}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="space-y-2">
                <p className="text-sm font-medium">Project Visibility</p>
                <RadioGroup defaultValue="private">
                  <RadioGroupItem value="public">
                    Public - Anyone can view
                  </RadioGroupItem>
                  <RadioGroupItem value="private">
                    Private - Only team members
                  </RadioGroupItem>
                </RadioGroup>
              </div>

              <Checkbox label="Initialize with README.md" defaultChecked />

              <div className="flex justify-end gap-3">
                <Button variant="outlined">Cancel</Button>
                <Button>Create</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </ComponentBox>

      {/* Content Organization */}
      <ComponentBox title="Accordion" fullWidth>
        <Accordion>
          <AccordionItem value="1">
            <AccordionItemTrigger>
              Ancient Egyptian Pyramids
            </AccordionItemTrigger>
            <AccordionItemContent>
              <p>
                The Great Pyramid of Giza was built around 2560 BCE and remained
                the tallest man-made structure in the world for over 3,800
                years. The ancient Egyptians built the pyramids as tombs for
                their pharaohs and queens.
              </p>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionItemTrigger>The Renaissance Period</AccordionItemTrigger>
            <AccordionItemContent>
              <p>
                The Renaissance was a period of European cultural, artistic,
                political and scientific "rebirth" that spanned from the 14th to
                the 17th centuries. Leonardo da Vinci, Michelangelo, and Raphael
                are among the most famous artists from this transformative era.
              </p>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionItemTrigger>
              The Industrial Revolution
            </AccordionItemTrigger>
            <AccordionItemContent>
              <p>
                Beginning in Britain around 1760, the Industrial Revolution
                marked a transition from hand production methods to machine
                manufacturing. This period fundamentally changed economic
                systems and led to unprecedented sustained growth in population
                and per capita income.
              </p>
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
      </ComponentBox>

      <ComponentBox title="Card" fullWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardBody className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Login to your account</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Enter your credentials to access your account
                </p>
              </div>

              <form className="space-y-4">
                <Field>
                  <Label>Email Address</Label>
                  <Input placeholder="john.doe@example.com" />
                </Field>

                <Field>
                  <Label>Password</Label>
                  <Input type="password" placeholder="••••••••" />
                  <HelperText>
                    Min 8 characters with mixed case, numbers & symbols
                  </HelperText>
                </Field>

                <div className="flex items-center justify-between">
                  <Checkbox label="Remember me" />
                  <Button variant="plain" size="sm">
                    Forgot password?
                  </Button>
                </div>

                <Button className="w-full">Sign in</Button>
              </form>

              <div className="text-center text-sm">
                Don't have an account? <a href="#">Sign up</a>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Project Status</h3>
                  <p className="text-sm text-gray-500">
                    Harbor UI Design System
                  </p>
                </div>
                <Badge>Active</Badge>
              </div>

              <div className="mb-6">
                <p className="text-sm font-medium mb-1">Project Completion</p>
                <LinearProgress value={68}>
                  <LinearProgressTrack />
                </LinearProgress>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Started: May 15</span>
                  <span>68% complete</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Team Members</p>
                <div className="flex -space-x-2">
                  <Avatar
                    fallback="JD"
                    src="https://avatar.iran.liara.run/public/29"
                    className="border-2 border-white"
                  />
                  <Avatar
                    fallback="TS"
                    src="https://avatar.iran.liara.run/public/42"
                    className="border-2 border-white"
                  />
                  <Avatar
                    fallback="MK"
                    src="https://avatar.iran.liara.run/public/33"
                    className="border-2 border-white"
                  />
                  <div className="flex items-center justify-center size-12 rounded-full bg-gray-200 border-2 border-white text-xs font-medium">
                    +2
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t flex justify-between">
                <Button variant="outlined" size="sm">
                  View Details
                </Button>
                <Button size="sm">Update Status</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </ComponentBox>

      <ComponentBox title="Pin Input">
        <PinInput>
          <PinInputControl>
            {[0, 1, 2, 3].map((id, index) => (
              <PinInputField key={id} index={index} />
            ))}
          </PinInputControl>
        </PinInput>
      </ComponentBox>

      <ComponentBox title="Pagination">
        <Pagination count={300} pageSize={10} siblingCount={1}>
          <PaginationPrevTrigger />
          <PaginationControls />
          <PaginationNextTrigger />
        </Pagination>
      </ComponentBox>
    </main>
  );
}
