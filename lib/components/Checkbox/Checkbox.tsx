import React, { forwardRef } from 'react';
import {
  CheckboxChecked,
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

export const resolveCheckedGroup = (values: Array<CheckboxChecked>) =>
  values.reduce((acc, val, index) => {
    if (acc === 'mixed') {
      return 'mixed';
    }

    if (acc === true) {
      return val || 'mixed';
    }

    if (acc === false && index > 0) {
      return val ? 'mixed' : false;
    }

    return val;
  }, false);

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
