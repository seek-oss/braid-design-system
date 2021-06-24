import React from 'react';
import { InlineFieldProps } from '../private/InlineField/InlineField';
import { CheckboxChecked } from '../private/InlineField/StyledInput';
export interface CheckboxProps extends Omit<InlineFieldProps, 'checked'> {
  checked: CheckboxChecked | Array<boolean>;
}
export declare const Checkbox: React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLInputElement>
>;
