"use client";

import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { Card, CardBody, CardSection } from "@/components/ui/Card";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { ArrowRight } from "@phosphor-icons/react";

export default function HomePage() {
  return (
    <main className="py-10">
      <div className="p-6">
        <Calendar />
      </div>

      <div className="p-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Hey there!</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="p-6">
        <Card className="max-w-md mx-auto">
          <CardBody>
         
            <h3 className="font-semibold">Login to continue</h3>

            <form className="space-y-4 my-5">
              <Field>
                <Label>Username</Label>
                <Input />
              </Field>
              <Field>
                <Label>Password</Label>
                <Input type="password" />
              </Field>
              <Button type="submit" fullWidth>Login</Button>
            </form>
            <CardSection className="border-t border-border">
                <p className="text-sm text-cyan-950 lg:flex lg:flex-row lg:justify-between gap-2 font-medium">
                    <span className="text-muted-foreground">Don't have an account?</span> <a href="#" className="inline-flex items-center gap-1">Sign Up <ArrowRight /></a>
                </p>
            </CardSection>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
