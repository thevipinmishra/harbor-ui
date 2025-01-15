"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { CircularProgress, CircularProgressCircle } from "@/components/ui/CircularProgress";
import { LinearProgress, LinearProgressTrack } from "@/components/ui/LinearProgress";
import { Label } from "@/components/ui/Label";

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabsList className="w-full">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="performance">Performance</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          <div className="text-center p-6 border rounded-lg">
            <CircularProgress value={99.9}>
              <CircularProgressCircle className="text-success" />
            </CircularProgress>
            <Label className="mt-2">Availability</Label>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <CircularProgress value={78}>
              <CircularProgressCircle />
            </CircularProgress>
            <Label className="mt-2">Performance</Label>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <CircularProgress value={12}>
              <CircularProgressCircle className="text-warning" />
            </CircularProgress>
            <Label className="mt-2">Issues</Label>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="performance">
        <div className="space-y-6 p-4">
          <div className="p-4 border rounded-lg">
            <Label>Response Time</Label>
            <LinearProgress value={82}>
              <LinearProgressTrack className="text-success" />
            </LinearProgress>
            <span className="text-sm text-muted-foreground">82ms avg</span>
          </div>
          <div className="p-4 border rounded-lg">
            <Label>Throughput</Label>
            <LinearProgress value={65}>
              <LinearProgressTrack />
            </LinearProgress>
            <span className="text-sm text-muted-foreground">2.3k req/sec</span>
          </div>
          <div className="p-4 border rounded-lg">
            <Label>Error Rate</Label>
            <LinearProgress value={3}>
              <LinearProgressTrack className="text-destructive" />
            </LinearProgress>
            <span className="text-sm text-muted-foreground">0.3%</span>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="resources">
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

      <TabsContent value="logs">
        {/* Add logs content here */}
      </TabsContent>
    </Tabs>
  );
}
