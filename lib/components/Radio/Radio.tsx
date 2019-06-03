import React from 'react';
import { Omit } from 'utility-types';
import {
  InlineField,
  InlineFieldProps,
} from '../private/InlineField/InlineField';

const validTones = ['neutral', 'critical'] as const;

interface RadioProps
  extends Omit<InlineFieldProps, 'message' | 'reserveMessageSpace'> {
  tone?: typeof validTones[number];
}

export const Radio = ({ tone, ...restProps }: RadioProps) => {
  if (tone && validTones.indexOf(tone) === -1) {
    throw new Error(`Invalid tone: ${tone}`);
  }

  return (
    <InlineField
      {...restProps}
      type="radio"
      message={null}
      reserveMessageSpace={false}
      tone={tone}
    />
  );
};
