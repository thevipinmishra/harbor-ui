import { Card } from "@/components/ui/Card";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";

export default function Examples() {
  return (
    <div className="container flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <Card.Body className="space-y-6">
          <div>
            <h3 className="text-xl font-extrabold">Sign Up</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Create your account to get started
            </p>
          </div>
          <form className="space-y-4">
            <Field>
              <Label>First Name</Label>
              <Input placeholder="John" />
            </Field>
            <Field>
              <Label>Last Name</Label>
              <Input placeholder="Doe" />
            </Field>
            <Field>
              <Label>Email Address</Label>
              <Input type="email" placeholder="john.doe@example.com" />
            </Field>
            <Field>
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••" />
            </Field>
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
          <div className="text-center text-sm">
            Already have an account? <a href="#">Log in</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}