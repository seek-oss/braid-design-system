import React, { AllHTMLAttributes } from 'react';
import { FieldProps } from '../private/Field/Field';
declare type InputProps = AllHTMLAttributes<HTMLInputElement>;
export interface PasswordFieldProps extends Omit<FieldProps, 'labelId' | 'secondaryMessage' | 'icon' | 'prefix'> {
    value: NonNullable<InputProps['value']>;
    onChange: NonNullable<InputProps['onChange']>;
    onBlur?: InputProps['onBlur'];
    onFocus?: InputProps['onFocus'];
    placeholder?: InputProps['placeholder'];
    onVisibilityToggle?: (visible: boolean) => void;
    visibilityToggleLabel?: string;
}
export declare const PasswordField: React.ForwardRefExoticComponent<PasswordFieldProps & React.RefAttributes<HTMLInputElement>>;
export {};
