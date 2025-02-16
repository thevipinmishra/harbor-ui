import type { Meta, StoryObj } from "@storybook/react";
import { toaster } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";

const meta: Meta = {
  title: "Components/Toast",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button
      onClick={() =>
        toaster.create({
          id: "default-toast",
          title: "Default Toast",
          description: "This is a basic toast notification",
        })
      }
    >
      Show Toast
    </Button>
  ),
};

export const SuccessNotification: Story = {
  render: () => (
    <Button
      variant="filled"
      onClick={() =>
        toaster.create({
          id: "success-toast",
          title: "Successfully saved!",
          description: "Your changes have been saved to the database.",
        })
      }
    >
      Save Changes
    </Button>
  ),
};

export const ErrorNotification: Story = {
  render: () => (
    <Button
      variant="destructive"
      onClick={() =>
        toaster.create({
          id: "error-toast",
          title: "Error occurred",
          description: "Unable to connect to the server. Please try again later.",
        })
      }
    >
      Trigger Error
    </Button>
  ),
};




