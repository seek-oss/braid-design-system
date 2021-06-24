import React, { AllHTMLAttributes } from 'react';
import { FieldProps } from '../private/Field/Field';
declare const validTypes: {
    text: string;
    password: string;
    email: string;
    search: string;
    number: string;
    tel: string;
    url: string;
};
declare type InputProps = AllHTMLAttributes<HTMLInputElement>;
export interface TextFieldProps extends Omit<FieldProps, 'labelId' | 'secondaryMessage'> {
    value: NonNullable<InputProps['value']>;
    type?: keyof typeof validTypes;
    onChange: NonNullable<InputProps['onChange']>;
    onBlur?: InputProps['onBlur'];
    onFocus?: InputProps['onFocus'];
    onClear?: () => void;
    placeholder?: InputProps['placeholder'];
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export {};
