"use client";

import { SegmentGroup, SegmentGroupItem } from "@/components/ui/SegmentGroup";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/Select";
import { createListCollection } from "@ark-ui/react";
import {
  List,
  GridFour,
  User,
  Bell,
  Shield,
} from "@phosphor-icons/react";

export default function HomePage() {
    const collection = createListCollection({ items: ['React', 'Solid', 'Vue'] })
  return (
    <main className="py-10">

        <Select collection={collection}>
<SelectLabel>Choose a framework</SelectLabel>
<SelectTrigger />
<SelectContent>
{collection.items.map((item) => (
                <SelectItem key={item} item={item}>
                {item}
                </SelectItem>
              ))}
</SelectContent>
        </Select>
      <div className="space-y-8 p-6">
        {/* View Toggle Example */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">View Toggle</h3>
          <SegmentGroup defaultValue="list">
            <SegmentGroupItem value="list">
              <List /> List
            </SegmentGroupItem>
            <SegmentGroupItem value="grid">
              <GridFour /> Grid
            </SegmentGroupItem>
          </SegmentGroup>
        </div>

        {/* Account Settings Example */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Account Settings</h3>
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
        </div>

        {/* Subscription Plan Example */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Subscription Plan</h3>
          <SegmentGroup defaultValue="monthly">
            <SegmentGroupItem value="monthly">Monthly</SegmentGroupItem>
            <SegmentGroupItem value="annual">Annual (Save 20%)</SegmentGroupItem>
          </SegmentGroup>
        </div>
      </div>
    </main>
  );
}
