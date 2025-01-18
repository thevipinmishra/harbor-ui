"use client";

import { Alert } from "@/components/ui/Alert";
import { CheckCircle, Warning, Info, X, Clock, Star, Lock, Download } from "@phosphor-icons/react";
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
        variant="destructive"
        icon={<X />}
        title="Failed to Deploy"
        description="An error occurred during deployment. Check logs for details."
      />

      <Alert
        variant="warning"
        icon={<Warning />}
        title="Certificate Expiring"
        description="SSL certificate will expire in 7 days"
      />

      <Alert
        variant="info"
        icon={<Info />}
        title="Update Available"
        description="A new version (2.0.0) is available. Update now to get the latest features."
      />

      <Alert
        variant="warning"
        icon={<Warning />}
        title="Storage Warning"
        description="You have used 90% of your storage quota"
      />

      <Alert
        variant="success"
        icon={<CheckCircle />}
        title="Payment Received"
        description="Payment of $299.00 was successfully processed"
      />

      <Alert
        variant="info"
        icon={<Star />}
        title="Beta Feature"
        description="You're previewing a beta feature. Some functionality may be limited."
      />

      {/* New Examples */}
      <Alert
        variant="default"
        icon={<Clock />}
        title="Scheduled Maintenance"
        description="System maintenance scheduled for 2:00 AM UTC"
      />

      <Alert
        variant="info"
        icon={<Lock />}
        title="Security Update"
        description="Multi-factor authentication is now enabled for your account"
      />

      <Alert
        variant="info"
        icon={<Download />}
        title="Downloading Update"
        description={
          <div className="space-y-2">
            <p>System update is being downloaded</p>
            <LinearProgress value={65}>
              <LinearProgressTrack />
            </LinearProgress>
            <div className="flex justify-end">
              <Button size="sm" variant="plain">Cancel</Button>
            </div>
          </div>
        }
      />

      <Alert
        variant="warning"
        icon={<Warning />}
        title="Session Expiring"
        description={
          <div className="space-y-2">
            <p>Your session will expire in 5 minutes</p>
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="outlined">Logout</Button>
              <Button size="sm">Extend Session</Button>
            </div>
          </div>
        }
      />
    </div>
  );
}
