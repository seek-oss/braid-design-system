import React, { forwardRef } from 'react';
import { Omit } from 'utility-types';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

interface RadioProps
  extends Omit<InlineFieldProps, 'message' | 'reserveMessageSpace'> {}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (props: RadioProps, ref) => (
    <InlineField
      {...props}
      type="radio"
      message={null}
      reserveMessageSpace={false}
      ref={ref}
    />
  ),
);
