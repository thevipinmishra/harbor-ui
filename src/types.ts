import { FieldRootProps } from "@ark-ui/react/field";


export type FieldProps = {
    disabled?: FieldRootProps["disabled"];
    invalid?: FieldRootProps["invalid"];
    readOnly?: FieldRootProps["readOnly"];
    required?: FieldRootProps["required"];
    errorMessage?: string;
    helperText?: string;
    ids?: FieldRootProps["ids"];
    id?: FieldRootProps['id']
}