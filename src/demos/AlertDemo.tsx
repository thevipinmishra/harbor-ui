"use client";

import { Alert } from "@/components/ui/Alert";
import { CheckCircle, Warning, Info, X, Clock, Star, Lock } from "@phosphor-icons/react";

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
    </div>
  );
}
