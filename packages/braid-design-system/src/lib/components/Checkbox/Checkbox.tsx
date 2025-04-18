import { forwardRef, useId } from 'react';

import {
  type InlineFieldProps,
  InlineField,
} from '../private/InlineField/InlineField';
import type { CheckboxChecked } from '../private/InlineField/StyledInput';
import { validTabIndexes } from '../private/validateTabIndex';

import { resolveCheckedGroup } from './resolveCheckedGroup';

export interface CheckboxProps
  extends Omit<InlineFieldProps, 'id' | 'checked'> {
  id?: InlineFieldProps['id'];
  checked: CheckboxChecked | boolean[];
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, checked, tabIndex, ...restProps }, ref) => {
    const fallbackId = useId();
    const resolvedId = id || fallbackId;

    const calculatedChecked = Array.isArray(checked)
      ? resolveCheckedGroup(checked)
      : checked;

    return (
      <InlineField
        {...restProps}
        id={resolvedId}
        tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
        checked={calculatedChecked}
        type="checkbox"
        ref={ref}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';
