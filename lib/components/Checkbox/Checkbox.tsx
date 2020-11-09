import React, { forwardRef } from 'react';
import {
  CheckboxChecked,
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

export interface CheckboxProps extends Omit<InlineFieldProps, 'checked'> {
  checked: CheckboxChecked;
}

const NamedCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => <InlineField {...props} type="checkbox" ref={ref} />,
);

NamedCheckbox.displayName = 'Checkbox';

export const Checkbox = NamedCheckbox;
