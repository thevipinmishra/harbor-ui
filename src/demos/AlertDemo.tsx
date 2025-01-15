"use client";

import { Alert } from "@/components/ui/Alert";

export function AlertDemo() {
  return (
    <div className="space-y-4">
      <Alert
        title="Deployment Successful"
        description="Your changes have been deployed to production"
      />

      <Alert
        variant="destructive"
        title="Failed to Deploy"
        description="An error occurred during deployment. Check logs for details."
      />

      <Alert
        title="Certificate Expiring"
        description="SSL certificate will expire in 7 days"
      />

      {/* With actions */}
      <Alert
        title="Update Available"
        description="A new version (2.0.0) is available. Update now to get the latest features."
      />

      <Alert
        title="Storage Warning"
        description="You have used 90% of your storage quota"
      />

      <Alert
        title="Payment Received"
        description="Payment of $299.00 was successfully processed"
      />

      <Alert
        title="Beta Feature"
        description="You're previewing a beta feature. Some functionality may be limited."
      />
    </div>
  );
}
