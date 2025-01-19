"use client";

import { TabsDemo } from "@/demos/TabsDemo";
import { FormDemo } from "@/demos/FormDemo";
import { DialogDemo } from "@/demos/DialogDemo";
import { AlertDemo } from "@/demos/AlertDemo";
import { ButtonDemo } from "@/demos/ButtonDemo";
import { DatePicker } from "@/components/ui/Datepicker";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleContext,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import { Button } from "@/components/ui/Button";
import { toaster } from "@/components/ui/Toast";
import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderValueText,
} from "@/components/ui/Slider";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadPreview,
  FileUploadTrigger,
} from "@/components/ui/FileUpload";
import { Upload } from "@phosphor-icons/react";
import { Field } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";

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

        <section className="border border-border space-y-8 rounded-lg p-6">
          <Field>
            <Label>Default datepicker</Label>
            <DatePicker locale="en-IN" />
          </Field>

          <Field>
            <Label>Multiple</Label>
            <DatePicker selectionMode="multiple" locale="en-IN" />
          </Field>

          <Field>
            <Label>Range</Label>
            <DatePicker selectionMode="range" locale="en-IN" />
          </Field>
        </section>

        <section className="border border-border rounded-lg p-6">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button>
                <CollapsibleContext>
                  {({ open }) => (
                    <span>{open ? "Close" : "Open"} Project Information</span>
                  )}
                </CollapsibleContext>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 space-y-4 border rounded-lg mt-2">
                <h3 className="font-semibold text-lg">Project Information</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    Harbor UI is a modern React component library built with:
                  </p>
                  <ul className="list-disc list-inside pl-4">
                    <li>TypeScript for type safety</li>
                    <li>Tailwind CSS for styling</li>
                    <li>Radix UI primitives</li>
                    <li>Modern React patterns</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    Version 1.0.0 - Last updated: 2024
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </section>

        <section className="border border-border rounded-lg p-6">
          <Button
            onClick={() =>
              toaster.create({
                title: "Toast",
                description: "Your toast is ready!",
                type: "error",
              })
            }
          >
            Cook a toast
          </Button>
        </section>

        <section className="border border-border rounded-lg p-6 space-y-8">
          <Slider>
            <div className="flex gap-4 justify-between">
              <SliderLabel className="flex-1">Volume</SliderLabel>
              <SliderValueText />
            </div>
            <SliderControl />
          </Slider>

          <Slider defaultValue={[5, 10]}>
            <div className="flex gap-4 justify-between">
              <SliderLabel className="flex-1">Volume</SliderLabel>
              <SliderValueText />
            </div>
            <SliderControl />
          </Slider>
        </section>

        <section className="container space-y-8 p-6">
          <FileUpload>
            <FileUploadTrigger asChild>
              <Button fullWidth>
                Upload File <Upload />
              </Button>
            </FileUploadTrigger>
            <FileUploadPreview />
          </FileUpload>

          <FileUpload>
            <FileUploadDropzone>
              <FileUploadTrigger asChild>
                <Button>
                  Upload File <Upload />
                </Button>
              </FileUploadTrigger>
            </FileUploadDropzone>
            <FileUploadPreview />
          </FileUpload>
        </section>
      </div>
    </main>
  );
}
