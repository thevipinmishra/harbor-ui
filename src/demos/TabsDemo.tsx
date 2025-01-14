"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { CircularProgress, CircularProgressCircle } from "@/components/ui/CircularProgress";
import { LinearProgress, LinearProgressTrack } from "@/components/ui/LinearProgress";
import { Label } from "@/components/ui/Label";

export function TabsDemo() {
  return (
    <Tabs defaultValue="metrics">
      <TabsList>
        <TabsTrigger value="metrics">Metrics</TabsTrigger>
        <TabsTrigger value="usage">Resource Usage</TabsTrigger>
      </TabsList>

      <TabsContent value="metrics">
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="text-center">
            <CircularProgress value={85}>
              <CircularProgressCircle />
            </CircularProgress>
            <Label className="mt-2">Uptime</Label>
          </div>
          <div className="text-center">
            <CircularProgress value={92}>
              <CircularProgressCircle className="text-success" />
            </CircularProgress>
            <Label className="mt-2">Success Rate</Label>
          </div>
          <div className="text-center">
            <CircularProgress value={23}>
              <CircularProgressCircle className="text-destructive" />
            </CircularProgress>
            <Label className="mt-2">Error Rate</Label>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="usage">
        <div className="space-y-4 p-4">
          <div>
            <Label>CPU Usage</Label>
            <LinearProgress value={65}>
              <LinearProgressTrack />
            </LinearProgress>
          </div>
          <div>
            <Label>Memory Usage</Label>
            <LinearProgress value={45}>
              <LinearProgressTrack />
            </LinearProgress>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
