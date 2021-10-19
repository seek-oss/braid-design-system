import React from 'react';
import type { AlertProps } from './Alert';
import { Alert as BraidAlert } from './Alert';

export const Alert = ({ tone, ...restProps }: AlertProps) => (
  <BraidAlert
    tone={typeof tone !== 'boolean' ? tone : undefined}
    {...restProps}
  />
);
