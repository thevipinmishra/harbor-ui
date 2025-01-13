"use client";

import { Button, ButtonGroup } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Warning } from "@phosphor-icons/react";
import { Input } from "@/components/ui/Input";
import { Field } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";
import { Description } from "@/components/ui/Description";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { Badge } from "@/components/ui/Badge";
import { NumberInput, NumberInputField, NumberInputLabel } from "@/components/ui/NumberInput";

export default function HomePage() {
  return (
    <main className="py-10">
      <div className="max-w-md mx-auto border border-border rounded-md divide-y divide-border *:flex *:items-center *:*:w-full *:min-h-24 *:p-5">
        <div>
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-3">
              <Button size="sm">Default</Button>
              <Button size="sm" variant="outlined">
                Outlined
              </Button>
              <Button size="sm" variant="plain">
                Plain
              </Button>
              <Button size="sm" variant="destructive">
                Destructive
              </Button>
            </div>

            <div className="flex items-start gap-3">
              <Button size="md">Default</Button>
              <Button size="md" variant="outlined">
                Outlined
              </Button>
              <Button size="md" variant="plain">
                Plain
              </Button>
            </div>

            <div className="flex items-start gap-3">
              <Button size="lg">Default</Button>
              <Button size="lg" variant="outlined">
                Outlined
              </Button>
              <Button size="lg" variant="plain">
                Plain
              </Button>
            </div>

            <div className="flex items-start gap-3">
              <Button variant="filled" disabled>
                Default
              </Button>
              <Button variant="outlined" disabled>
                Outlined
              </Button>
              <Button variant="plain" disabled>
                Plain
              </Button>
            </div>

            <div className="flex items-start gap-3">
              <Button size="md" loading>
                Default
              </Button>
              <Button size="md" variant="outlined" loading>
                Outlined
              </Button>
              <Button size="md" variant="plain" loading>
                Plain
              </Button>
            </div>

            <div>
              <ButtonGroup>
                <Button variant="filled">Default</Button>
                <Button variant="outlined">Outlined</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>

        <div>
          <div className="grid gap-5">
            <Alert title="Alert" description="This is an alert message." />
            <Alert
              icon={<Warning />}
              variant="destructive"
              title="Heads up!"
              description="This is an alert message."
            />
          </div>
        </div>

        <div>
          <ScrollArea className="h-44 bg-secondary p-2 rounded-lg">
            <div className="space-y-3 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet tortor nec odio fermentum ultrices. Donec nec sollicitudin
                metus. Nullam nec nisi at orci tincidunt fermentum. Nullam nec
                nisi at orci tincidunt fermentum. Nullam nec nisi at orci
                tincidunt
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet tortor nec odio fermentum ultrices. Donec nec sollicitudin
                metus. Nullam nec nisi at orci tincidunt fermentum. Nullam nec
                nisi at orci tincidunt fermentum. Nullam nec nisi at orci
                tincidunt
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet tortor nec odio fermentum ultrices. Donec nec sollicitudin
                metus. Nullam nec nisi at orci tincidunt fermentum. Nullam nec
                nisi at orci tincidunt fermentum. Nullam nec nisi at orci
                tincidunt
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet tortor nec odio fermentum ultrices. Donec nec sollicitudin
                metus. Nullam nec nisi at orci tincidunt fermentum. Nullam nec
                nisi at orci tincidunt fermentum. Nullam nec nisi at orci
                tincidunt
              </p>
            </div>
          </ScrollArea>
        </div>

        <div>
          <Field invalid>
            <Label>Label</Label>
            <Description>
                Description of the input
            </Description>
            <Input placeholder="First name" />
            
            <ErrorMessage>Something went wrong</ErrorMessage>
          </Field>
        </div>

        <div>
            <div className="flex gap-2 flex-wrap">
            <Badge>Badge</Badge>
            <Badge variant="outlined">Badge</Badge>
            <Badge variant="plain">Badge</Badge>
            <Badge variant="destructive">Badge</Badge>
            </div>
        </div>

        <div>
            <Field invalid>
            <NumberInput>
                <NumberInputLabel>
                    Number
                </NumberInputLabel>
                <NumberInputField />
            </NumberInput>
            <Description>
                Description of the input
            </Description>
            <ErrorMessage>Something went wrong</ErrorMessage>
            </Field>
           
        </div>
        
      
      </div>
    </main>
  );
}
