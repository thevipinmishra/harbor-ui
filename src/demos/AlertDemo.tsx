"use client";

import { Alert } from "@/components/ui/Alert";
import { CheckCircle, Warning, Info, X } from "@phosphor-icons/react";

export function AlertDemo() {
  return (
    <div className="space-y-4 w-full max-w-3xl mx-auto">
      <Alert
        variant="success"
        icon={<CheckCircle />}
        title="Success"
        description="Operation completed successfully"
      />

      <Alert
        variant="warning"
        icon={<Warning />}
        title="Warning"
        description="Please review your information before continuing"
      />

      <Alert
        variant="destructive"
        icon={<X />}
        title="Error"
        description="An error occurred while processing your request"
      />

      <Alert
        variant="info"
        icon={<Info />}
        title="Information"
        description="Here's some helpful information for you"
      />

      <Alert
        variant="default"
        title="Note"
        description="This is a simple notification message"
      />
    </div>
  );
}
