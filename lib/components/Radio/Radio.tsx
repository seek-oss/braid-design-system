import React, { forwardRef } from 'react';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

export interface RadioProps
  extends Omit<
    InlineFieldProps,
    'message' | 'reserveMessageSpace' | 'required'
  > {}

const NamedRadio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => (
  <InlineField
    {...props}
    type="radio"
    message={null}
    reserveMessageSpace={false}
    required={undefined}
    ref={ref}
  />
));

NamedRadio.displayName = 'Radio';

export const Radio = NamedRadio;
