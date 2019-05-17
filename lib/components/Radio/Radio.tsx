import React from 'react';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

export const Radio = (props: InlineFieldProps) => (
  <InlineField {...props} type="radio" />
);
