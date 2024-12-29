import { tv } from "@/lib/tv.config";
import {
  Field as FieldPrimitive,
  FieldRootProps,
} from "@ark-ui/react/field";

const fieldVariants = tv({
    slots: {
        root: 'flex flex-col gap-1'
    }
})

export interface FieldProps extends Omit<FieldRootProps, "invalid"> {
  error?: string;
}

const Field = (props: FieldProps) => {
  const { className, error } = props;
  return (
    <FieldPrimitive.Root invalid={!!error} className={fieldVariants().root({
        className
    })}>
      <FieldPrimitive.Context>
        {(context) => (
          <>
            {context.invalid ? (
              <FieldPrimitive.ErrorText>{error}</FieldPrimitive.ErrorText>
            ) : null}
          </>
        )}
      </FieldPrimitive.Context>
    </FieldPrimitive.Root>
  );
};

const FieldContext = FieldPrimitive.Context;

export { Field, FieldContext };