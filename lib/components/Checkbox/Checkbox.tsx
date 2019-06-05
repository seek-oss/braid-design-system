import React, { forwardRef } from 'react';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

export const Checkbox = forwardRef<HTMLInputElement, InlineFieldProps>(
  (props: InlineFieldProps, ref) => (
    <InlineField
      reserveMessageSpace={true}
      {...props}
      type="checkbox"
      ref={ref}
    />
  ),
);
