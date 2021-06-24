import React, { AllHTMLAttributes } from 'react';
import { FieldProps } from '../private/Field/Field';
declare type NativeTextareaProps = AllHTMLAttributes<HTMLTextAreaElement>;
export interface TextareaProps extends Omit<FieldProps, 'labelId' | 'secondaryMessage' | 'icon' | 'prefix'> {
    value: NonNullable<NativeTextareaProps['value']>;
    onChange: NonNullable<NativeTextareaProps['onChange']>;
    onBlur?: NativeTextareaProps['onBlur'];
    onFocus?: NativeTextareaProps['onFocus'];
    onPaste?: NativeTextareaProps['onPaste'];
    placeholder?: NativeTextareaProps['placeholder'];
    highlightRanges?: Array<{
        start: number;
        end?: number;
    }>;
    characterLimit?: number;
    lines?: number;
    lineLimit?: number;
    grow?: boolean;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export {};
