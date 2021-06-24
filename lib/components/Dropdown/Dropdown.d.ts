import React, { AllHTMLAttributes } from 'react';
import { FieldProps } from '../private/Field/Field';
declare type ValidDropdownChildren = AllHTMLAttributes<HTMLOptionElement | HTMLOptGroupElement>;
declare type SelectProps = AllHTMLAttributes<HTMLSelectElement>;
export interface DropdownProps extends Omit<FieldProps, 'labelId' | 'secondaryMessage' | 'prefix'> {
    children: ValidDropdownChildren[] | ValidDropdownChildren;
    value: NonNullable<SelectProps['value']>;
    onChange: NonNullable<SelectProps['onChange']>;
    onBlur?: SelectProps['onBlur'];
    onFocus?: SelectProps['onFocus'];
    placeholder?: string;
}
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLSelectElement>>;
export {};
