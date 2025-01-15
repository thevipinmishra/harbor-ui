"use client";

import { TabsDemo } from "@/demos/TabsDemo";
import { FormDemo } from "@/demos/FormDemo";
import { DialogDemo } from "@/demos/DialogDemo";
import { AlertDemo } from "@/demos/AlertDemo";
import { ButtonDemo } from "@/demos/ButtonDemo";

export default function HomePage() {
  return (
    <main className="py-10">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Button Components */}
        <section className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Buttons</h2>
          <ButtonDemo />
        </section>

        {/* Form Components */}
        <section className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Form</h2>
          <FormDemo />
        </section>

        {/* Dialog Components */}
        <section className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Dialog</h2>
          <DialogDemo />
        </section>

        {/* Tabs and Progress Components */}
        <section className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Tabs and Progress</h2>
          <TabsDemo />
        </section>

        {/* Alert Components */}
        <section className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Alerts</h2>
          <AlertDemo />
        </section>

       
      </div>
    </main>
  );
}
