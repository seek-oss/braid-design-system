import React from 'react';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

export const Checkbox = (props: InlineFieldProps) => (
  <InlineField {...props} type="checkbox" />
);
