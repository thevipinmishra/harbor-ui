"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { CircularProgress, CircularProgressCircle } from "@/components/ui/CircularProgress";
import { LinearProgress, LinearProgressTrack } from "@/components/ui/LinearProgress";
import { Label } from "@/components/ui/Label";
import { Field } from "@/components/ui/Field";

const registryMetrics = [
  {
    label: "Storage Used",
    value: 75,
    color: "text-primary",
    description: "2.3TB of 3TB",
  },
  {
    label: "Image Pull Rate",
    value: 92,
    color: "text-success",
    description: "15.2k pulls/hour",
  },
  {
    label: "Vulnerability Rate",
    value: 8,
    color: "text-warning",
    description: "8% images affected",
  },
];

const popularImages = [
  { name: "nginx:1.25", pulls: 25430, size: "183MB", lastPush: "2h ago" },
  { name: "redis:7.2", pulls: 18920, size: "105MB", lastPush: "5h ago" },
  { name: "postgres:15", pulls: 15670, size: "314MB", lastPush: "1d ago" },
];

const securityIssues = [
  { image: "nginx:1.25", severity: "Critical", count: 2, type: "CVE-2024-1234" },
  { image: "redis:7.2", severity: "High", count: 3, type: "CVE-2024-5678" },
  { image: "postgres:15", severity: "Medium", count: 5, type: "CVE-2024-9012" },
];

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full overflow-x-auto flex-nowrap md:flex-wrap">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="images">Images</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {registryMetrics.map((metric) => (
            <div key={metric.label} className="p-6 border rounded-lg">
              <div className="flex items-center gap-4">
                <CircularProgress value={metric.value}>
                  <CircularProgressCircle className={metric.color} />
                </CircularProgress>
                <div>
                  <Label>{metric.label}</Label>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="images" className="mt-6">
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Pull Count</th>
                <th className="px-4 py-3 text-left">Size</th>
                <th className="px-4 py-3 text-left">Last Push</th>
              </tr>
            </thead>
            <tbody>
              {popularImages.map((img) => (
                <tr key={img.name} className="border-t">
                  <td className="px-4 py-3">{img.name}</td>
                  <td className="px-4 py-3">{img.pulls.toLocaleString()}</td>
                  <td className="px-4 py-3">{img.size}</td>
                  <td className="px-4 py-3">{img.lastPush}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TabsContent>

      <TabsContent value="security" className="mt-6">
        <div className="space-y-4">
          {securityIssues.map((issue) => (
            <Field key={issue.image} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <Label>{issue.image}</Label>
                  <p className="text-sm text-muted-foreground">
                    {issue.type} - {issue.count} vulnerabilities found
                  </p>
                </div>
                <LinearProgress value={issue.count * 20} className="w-24">
                  <LinearProgressTrack 
                    className={
                      issue.severity === "Critical" ? "text-destructive" :
                      issue.severity === "High" ? "text-warning" :
                      "text-primary"
                    }
                  />
                </LinearProgress>
              </div>
            </Field>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
