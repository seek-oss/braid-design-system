import React, { forwardRef } from 'react';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

const NamedCheckbox = forwardRef<HTMLInputElement, InlineFieldProps>(
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
