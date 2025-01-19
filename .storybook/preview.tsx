import type { Preview } from "@storybook/react";
import '../src/app/globals.css';
import React from 'react';
import { Inter } from "next/font/google";

const fontSans = Inter({
    display: "swap",
    variable: "--font-sans",
    subsets: ["latin"],
  });
  

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`font-sans ${fontSans.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
