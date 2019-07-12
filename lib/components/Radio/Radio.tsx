import React, { forwardRef } from 'react';
import { Omit } from 'utility-types';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

interface RadioProps
  extends Omit<InlineFieldProps, 'message' | 'reserveMessageSpace'> {}

const NamedRadio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => (
  <InlineField
    {...props}
    type="radio"
    message={null}
    reserveMessageSpace={false}
    ref={ref}
  />
));

NamedRadio.displayName = 'Radio';

export const Radio = NamedRadio;
