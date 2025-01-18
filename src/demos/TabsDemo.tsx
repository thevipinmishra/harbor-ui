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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 flex gap-4 items-center border rounded-lg">
            <CircularProgress value={99.9}>
              <CircularProgressCircle className="text-success" />
            </CircularProgress>
            <Label className="mt-2">Availability</Label>
          </div>
          <div className="text-center p-6 flex gap-4 items-center border rounded-lg">
            <CircularProgress value={78}>
              <CircularProgressCircle />
            </CircularProgress>
            <Label className="mt-2">Performance</Label>
          </div>
          <div className="text-center p-6 flex gap-4 items-center border rounded-lg">
            <CircularProgress value={12}>
              <CircularProgressCircle className="text-warning" />
            </CircularProgress>
            <Label className="mt-2">Issues</Label>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="performance">
        <div className="space-y-6">
          <div className="p-4 border space-y-3 rounded-lg">
            <Label>Response Time</Label>
            <LinearProgress value={82}>
              <LinearProgressTrack className="text-success" />
            </LinearProgress>
            <p className="text-sm text-muted-foreground">82ms avg</p>
          </div>
          <div className="p-4 space-y-3 border rounded-lg">
            <Label>Throughput</Label>
            <LinearProgress value={65}>
              <LinearProgressTrack />
            </LinearProgress>
            <p className="text-sm text-muted-foreground">2.3k req/sec</p>
          </div>
          <div className="p-4 space-y-3 border rounded-lg">
            <Label>Error Rate</Label>
            <LinearProgress value={3}>
              <LinearProgressTrack className="text-destructive" />
            </LinearProgress>
            <p className="text-sm text-muted-foreground">0.3%</p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="resources">
        <div className="space-y-4">
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
        <div className="space-y-4">
          <div className="p-4 border rounded-lg space-y-3">
            <div className="flex items-center gap-2">
              <CircularProgress value={100}>
                <CircularProgressCircle className="text-success" />
              </CircularProgress>
              <span className="text-sm text-muted-foreground">[2024-02-20 10:15:32]</span>
              <span>Application started successfully</span>
            </div>
            <div className="flex items-center gap-2">
              <CircularProgress value={100}>
                <CircularProgressCircle className="text-warning" />
              </CircularProgress>
              <span className="text-sm text-muted-foreground">[2024-02-20 10:15:30]</span>
              <span>High memory usage detected</span>
            </div>
            <div className="flex items-center gap-2">
              <CircularProgress value={100}>
                <CircularProgressCircle className="text-destructive" />
              </CircularProgress>
              <span className="text-sm text-muted-foreground">[2024-02-20 10:15:28]</span>
              <span>Database connection timeout</span>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
