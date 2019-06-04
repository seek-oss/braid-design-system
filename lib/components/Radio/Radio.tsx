import React from 'react';
import { Omit } from 'utility-types';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

interface RadioProps
  extends Omit<InlineFieldProps, 'message' | 'reserveMessageSpace'> {}

export const Radio = (props: RadioProps) => (
  <InlineField
    {...props}
    type="radio"
    message={null}
    reserveMessageSpace={false}
  />
);
