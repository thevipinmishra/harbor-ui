import type { Meta, StoryObj } from "@storybook/react";
import { SegmentGroup, SegmentGroupItem } from "@/components/ui/SegmentGroup";
import {
  CurrencyDollar,
  Gear,
  List,
  GridFour,
  User,
  Bell,
  Shield,
} from "@phosphor-icons/react";

const meta: Meta<typeof SegmentGroup> = {
  title: "Components/SegmentGroup",
  component: SegmentGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SegmentGroup>;

export const Basic: Story = {
  render: () => (
    <SegmentGroup defaultValue="list">
      <SegmentGroupItem value="list">
        <List /> List View
      </SegmentGroupItem>
      <SegmentGroupItem value="grid">
        <GridFour /> Grid View
      </SegmentGroupItem>
    </SegmentGroup>
  ),
};

export const AccountSettings: Story = {
  render: () => (
    <SegmentGroup defaultValue="profile">
      <SegmentGroupItem value="profile">
        <User /> Profile
      </SegmentGroupItem>
      <SegmentGroupItem value="notifications">
        <Bell /> Notifications
      </SegmentGroupItem>
      <SegmentGroupItem value="security">
        <Shield /> Security
      </SegmentGroupItem>
    </SegmentGroup>
  ),
};

export const PaymentOptions: Story = {
  render: () => (
    <SegmentGroup defaultValue="monthly">
      <SegmentGroupItem value="monthly">Monthly</SegmentGroupItem>
      <SegmentGroupItem value="annual">Annual (Save 20%)</SegmentGroupItem>
    </SegmentGroup>
  ),
};
