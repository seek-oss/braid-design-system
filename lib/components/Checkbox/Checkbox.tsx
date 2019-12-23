import React, { forwardRef } from 'react';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

export type CheckboxProps = InlineFieldProps;

const NamedCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => (
    <InlineField
      reserveMessageSpace={true}
      {...props}
      type="checkbox"
      ref={ref}
    />
  ),
);

NamedCheckbox.displayName = 'Checkbox';

export const Checkbox = NamedCheckbox;
