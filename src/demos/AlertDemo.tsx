"use client";

import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";

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
    </div>
  );
}
