import { tv } from "@/lib/tv.config";
import { ark, type HTMLArkProps } from "@ark-ui/react";

const cardVariants = tv({
  slots: {
    card: ["bg-card text-card-foreground rounded-md border border-border shadow-xs"],
    cardSection: ["-mx-5 px-5 first:-mt-5 py-3 first:rounded-t-[inherit] last:-mb-5 last:rounded-b-[inherit]"],
    cardBody: ["p-5 rounded-[inherit]"],
  },
});

const Card = (props: HTMLArkProps<"div">) => {
  const { className, ...rest } = props;
  return (
    <ark.div
      className={cardVariants().card({
        className,
      })}
      {...rest}
    />
  );
};

const CardSection = (props: HTMLArkProps<"div">) => {
  const { className, ...rest } = props;
  return (
    <ark.div
      className={cardVariants().cardSection({
        className,
      })}
      {...rest}
    />
  );
};

const CardBody = (props: HTMLArkProps<"div">) => {
  const { className, ...rest } = props;
  return (
    <ark.div
      className={cardVariants().cardBody({
        className,
      })}
      {...rest}
    />
  );
};

export { Card, CardSection, CardBody };
