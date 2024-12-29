import { tv } from "@/lib/tv.config";
import { ark, HTMLArkProps } from "@ark-ui/react";

const cardVariants = tv({
  slots: {
    card: ["bg-card text-card-foreground rounded-md border border-border shadow-sm"],
    cardSection: [""],
    cardBody: ["p-5"],
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