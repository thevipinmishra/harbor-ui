import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker, parseDate } from "@/components/ui/Datepicker";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A date picker component that allows users to select dates in various formats.
- Supports single date, multiple dates, and date range selection
- Customizable date format
- Keyboard navigation
- Locale support
- Timezone support
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: "Select date",
  },
};

// export const CustomFormat: Story = {
//   args: {
//     placeholder: "Select date",
//     format: (date) => format(date, "MMMM do, yyyy"),
//   },
// };

export const MultipleSelection: Story = {
  args: {
    placeholder: "Select dates",
    selectionMode: "multiple",
  },
};

export const RangeSelection: Story = {
  args: {
    placeholder: "Select date range",
    selectionMode: "range",
  },
};

export const WithDefaultValue: Story = {
  args: {
    placeholder: "Select date",
    defaultValue: [parseDate(new Date())],
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Select date",
    disabled: true,
  },
};

export const CustomTimeZone: Story = {
  args: {
    placeholder: "Select date",
    timeZone: "America/New_York",
  },
};
