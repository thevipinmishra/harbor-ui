import { tv } from "@/lib/tv.config";
import { HTMLAttributes } from "react";

const cardVariants = tv({
  slots: {
    card: [
      "bg-card text-card-foreground rounded-md border border-border p-5",
    ],
  },
});

const Card = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cardVariants().card({
        className,
      })}
      {...rest}
    />
  );
};

Card.displayName = "Card";

export { Card };
