import React, { AllHTMLAttributes } from 'react';
import { InlineFieldProps } from '../private/InlineField/InlineField';
declare type InputElementProps = AllHTMLAttributes<HTMLInputElement>;
export interface RadioProps extends Omit<InlineFieldProps, 'message' | 'reserveMessageSpace' | 'required' | 'size'> {
    checked: NonNullable<InputElementProps['checked']>;
}
/** @deprecated Individual `Radio` elements have been deprecated. Use [RadioGroup](https://seek-oss.github.io/braid-design-system/components/RadioGroup) instead. */
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export {};
