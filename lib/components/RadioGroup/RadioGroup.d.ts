import { FormEvent, ReactElement } from 'react';
import { FieldGroupProps } from '../private/FieldGroup/FieldGroup';
import { RadioItemProps } from '../RadioGroup/RadioItem';
import { InlineFieldProps } from '../private/InlineField/InlineField';
export interface RadioGroupProps<Value = NonNullable<string | number>> extends FieldGroupProps {
    children: ReactElement<RadioItemProps>[];
    value: Value;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    name?: string;
    size?: InlineFieldProps['size'];
}
declare const RadioGroup: {
    ({ children, id, value, name, onChange, disabled, tone, size, ...props }: RadioGroupProps): JSX.Element;
    displayName: string;
};
export { RadioGroup };
