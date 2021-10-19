import React, { forwardRef } from 'react';
import type { InlineFieldProps } from '../private/InlineField/InlineField';
import { InlineField } from '../private/InlineField/InlineField';
import type { CheckboxChecked } from '../private/InlineField/StyledInput';
import { resolveCheckedGroup } from './resolveCheckedGroup';

export interface CheckboxProps extends Omit<InlineFieldProps, 'checked'> {
  checked: CheckboxChecked | Array<boolean>;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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

Checkbox.displayName = 'Checkbox';
