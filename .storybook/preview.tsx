import type { Preview } from "@storybook/react";
import '../src/app/globals.css';
import React from 'react';
import { Toaster } from "../src/components/ui/Toast";

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
