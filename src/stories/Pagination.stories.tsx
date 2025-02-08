import type { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationControls,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/Pagination";
import { useState } from "react";

type PaginationProps = React.ComponentProps<typeof Pagination>;

const meta: Meta<PaginationProps> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A pagination component that helps users navigate through multiple pages of content.",
      },
    },
  },
  argTypes: {
    count: {
      control: "number",
      description: "Total number of items",
    },
    pageSize: {
      control: "number",
      description: "Number of items per page",
    },
    siblingCount: {
      control: "number",
      description: "Number of siblings to show on each side of the current page",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Pagination count={40} pageSize={4} siblingCount={2}>
      
        <PaginationPrevTrigger />
        <PaginationControls />
        <PaginationNextTrigger />
     
    </Pagination>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div className="flex flex-col items-center gap-4">
        <p>Current Page: {page}</p>
        <Pagination
          count={100}
          pageSize={10}
          page={page}
          onPageChange={(e) => setPage(e.page)}
        >
          <div className="flex items-center gap-2">
            <PaginationPrevTrigger />
            <PaginationControls />
            <PaginationNextTrigger />
          </div>
        </Pagination>
      </div>
    );
  },
};

export const CustomSiblings: Story = {
  render: () => (
    <Pagination count={100} pageSize={10} siblingCount={3}>
      <div className="flex items-center gap-2">
        <PaginationPrevTrigger />
        <PaginationControls />
        <PaginationNextTrigger />
      </div>
    </Pagination>
  ),
};

export const RealWorldExample: Story = {
  args: {},
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div className="w-full max-w-3xl">
        <div className="rounded-lg border p-4">
          <div className="space-y-4">
            {/* Simulated content */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-16 rounded-md bg-gray-100" />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing {(page - 1) * 5 + 1} to {Math.min(page * 5, 50)} of 50
              results
            </p>
            <Pagination
              count={50}
              pageSize={5}
              page={page}
              onPageChange={(e: { page: number }) => setPage(e.page)}
            >
              <div className="flex items-center gap-2">
                <PaginationPrevTrigger />
                <PaginationControls />
                <PaginationNextTrigger />
              </div>
            </Pagination>
          </div>
        </div>
      </div>
    );
  },
};
