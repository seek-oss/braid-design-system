import React from 'react';
import { StyledInputProps } from '../private/InlineField/StyledInput';
import { CheckboxProps } from './Checkbox';
declare type LabelStyle = {
    'aria-labelledby': NonNullable<string>;
} | {
    'aria-label': NonNullable<string>;
};
export declare type CheckboxStandaloneProps = StyledInputProps & LabelStyle & {
    checked: CheckboxProps['checked'];
};
export declare const CheckboxStandalone: React.ForwardRefExoticComponent<CheckboxStandaloneProps & React.RefAttributes<HTMLInputElement>>;
export {};
