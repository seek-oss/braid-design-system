import React from 'react';
import { InlineFieldProps } from '../private/InlineField/InlineField';
export interface RadioItemProps extends Omit<InlineFieldProps, 'name' | 'message' | 'reserveMessageSpace' | 'required' | 'onChange' | 'id' | 'disabled' | 'tone' | 'size'> {
    value: NonNullable<InlineFieldProps['value']>;
}
export declare const RadioItem: React.ForwardRefExoticComponent<RadioItemProps & React.RefAttributes<HTMLInputElement>>;
