import React, { forwardRef } from 'react';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';
import { CheckboxChecked } from '../private/InlineField/StyledInput';
import { resolveCheckedGroup } from './resolveCheckedGroup';

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
