"use client";

import {
  Pagination,
  PaginationControls,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/Pagination";

export default function HomePage() {
  return (
    <main className="py-10">
      <div className="p-6">
        <Pagination count={50}>
          <PaginationPrevTrigger />
          <PaginationControls />
          <PaginationNextTrigger />
        </Pagination>
      </div>
    </main>
  );
}
