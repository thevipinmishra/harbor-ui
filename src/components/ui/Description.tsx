"use client";

import { cn } from "@/lib/tv.config";
import { Text, TextProps } from "react-aria-components";

const Description = (props: TextProps) => {
  const { className, slot = 'description', ...rest } = props;
  return (
    <Text
      slot={slot}
      className={cn("text-sm text-muted-foreground", className)}
      {...rest}
    />
  );
};

export { Description };
