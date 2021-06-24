import React, { AllHTMLAttributes } from 'react';
import { DataAttributeMap } from '../buildDataAttributes';
import type { Size } from './InlineField.css';
declare const tones: readonly ["neutral", "critical"];
export declare type InlineFieldTone = typeof tones[number];
export declare type CheckboxChecked = NonNullable<InputElementProps['checked']> | 'mixed';
declare type InputElementProps = AllHTMLAttributes<HTMLInputElement>;
export declare type StyledInputProps = {
    id: NonNullable<InputElementProps['id']>;
    onChange: NonNullable<InputElementProps['onChange']>;
    value?: InputElementProps['value'];
    name?: InputElementProps['name'];
    'aria-describedby'?: InputElementProps['aria-describedby'];
    'aria-labelledby'?: InputElementProps['aria-labelledby'];
    'aria-label'?: InputElementProps['aria-label'];
    disabled?: InputElementProps['disabled'];
    tone?: InlineFieldTone;
    data?: DataAttributeMap;
    required?: boolean;
    size?: Size;
};
export declare type PrivateStyledInputProps = StyledInputProps & {
    type: 'radio' | 'checkbox';
    checked: CheckboxChecked;
    tabIndex?: number;
};
export declare const StyledInput: React.ForwardRefExoticComponent<StyledInputProps & {
    type: 'radio' | 'checkbox';
    checked: CheckboxChecked;
    tabIndex?: number | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export {};
