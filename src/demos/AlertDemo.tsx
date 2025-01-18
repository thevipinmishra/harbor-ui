"use client";

import { Alert } from "@/components/ui/Alert";
import { CheckCircle, Warning, Info, Download, Clock } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { LinearProgress, LinearProgressTrack } from "@/components/ui/LinearProgress";

export function AlertDemo() {
  return (
    <div className="space-y-4">
      <Alert
        variant="success"
        icon={<CheckCircle />}
        title="Deployment Successful"
        description="Your changes have been deployed to production"
      />

      <Alert
        variant="warning"
        icon={<Warning />}
        title="Certificate Expiring"
        description={
          <div className="space-y-2">
            <p>SSL certificate will expire in 7 days</p>
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="outlined">Ignore</Button>
              <Button size="sm">Renew Now</Button>
            </div>
          </div>
        }
      />

      <Alert
        variant="destructive"
        icon={<Clock />}
        title="Session Timeout"
        description={
          <div className="space-y-2">
            <p>Your session will expire in 5 minutes</p>
            <LinearProgress value={25}>
              <LinearProgressTrack />
            </LinearProgress>
            <div className="flex justify-end">
              <Button size="sm" variant="plain">Extend Session</Button>
            </div>
          </div>
        }
      />

      <Alert
        variant="info"
        icon={<Download />}
        title="Downloading Update"
        description={
          <div className="space-y-2">
            <p>System update (v2.0.0) is being downloaded</p>
            <LinearProgress value={65}>
              <LinearProgressTrack />
            </LinearProgress>
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="outlined">Pause</Button>
              <Button size="sm" variant="plain">Cancel</Button>
            </div>
          </div>
        }
      />

      <Alert
        variant="default"
        icon={<Info />}
        title="Beta Feature"
        description="You're previewing a beta feature. Some functionality may be limited."
      />
    </div>
  );
}
