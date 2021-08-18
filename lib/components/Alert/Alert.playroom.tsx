import React from 'react';
import { Alert as BraidAlert, AlertProps } from './Alert';

export const Alert = ({ tone, ...restProps }: AlertProps) => (
  <BraidAlert
    tone={typeof tone !== 'boolean' ? tone : undefined}
    {...restProps}
  />
);
