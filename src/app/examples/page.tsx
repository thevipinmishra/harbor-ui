"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { Textfield } from "@/components/ui/Textfield";
import { useForm } from "@mantine/form";
import { ArrowRight } from "@phosphor-icons/react";

export default function Examples() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="container space-y-10 py-10">
      <Card>
        <CardBody className="space-y-4">
          <Text weight="bold" size="xl">
            Login
          </Text>

          <form
            className="space-y-3"
            onSubmit={form.onSubmit((values) => console.log(values))}
          >
            <Textfield
              label="Email"
              placeholder="Enter your email"
              {...form.getInputProps("email")}
            />
            <Textfield
              label="Password"
              placeholder="Enter your password"
              type="password"
              {...form.getInputProps("password")}
            />
            <Button type="submit" fullWidth>
              Login <ArrowRight />
            </Button>
          </form>
        </CardBody>
      </Card>

      <pre>{JSON.stringify(form.getValues(), null, 2)}</pre>
    </div>
  );
}
