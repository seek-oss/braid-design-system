import React from 'react';
import { buttonVariants } from '../ButtonRenderer/ButtonRenderer';
import { Button as BraidButton, ButtonProps } from './Button';

export const Button = ({ variant, ...restProps }: ButtonProps) => (
  <BraidButton
    variant={
      variant && buttonVariants.indexOf(variant) > -1 ? variant : 'solid'
    }
    {...restProps}
  />
);
