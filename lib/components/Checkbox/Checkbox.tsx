import React, { forwardRef } from 'react';
import {
  CheckboxChecked,
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

const resolveCheckedGroup = (values: Array<CheckboxChecked>) =>
  values.some((value) => value !== values[0]) ? 'mixed' : values[0] ?? false;

export interface CheckboxProps extends Omit<InlineFieldProps, 'checked'> {
  checked: CheckboxChecked | Array<boolean>;
}

const NamedCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, ...restProps }, ref) => {
    const calculatedChecked = Array.isArray(checked)
      ? resolveCheckedGroup(checked)
      : checked;

    return (
      <InlineField
        {...restProps}
        checked={calculatedChecked}
        type="checkbox"
        ref={ref}
      />
    );
  },
);

NamedCheckbox.displayName = 'Checkbox';

export const Checkbox = NamedCheckbox;
