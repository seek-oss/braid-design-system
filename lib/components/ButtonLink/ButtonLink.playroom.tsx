import React from 'react';
import {
  buttonVariants,
  buttonWeights,
} from '../ButtonRenderer/ButtonRenderer';
import { ButtonLink as BraidButtonLink, ButtonLinkProps } from './ButtonLink';

export const ButtonLink = ({
  href,
  onClick,
  variant,
  weight,
  ...restProps
}: ButtonLinkProps) => {
  const isValidWeight = weight && buttonWeights.indexOf(weight) > -1;
  const isValidVariant = variant && buttonVariants.indexOf(variant) > -1;

  return (
    <BraidButtonLink
      href={href ?? ''}
      onClick={onClick ? onClick : (event) => event?.preventDefault()}
      variant={isValidVariant ? variant : undefined}
      weight={isValidWeight ? weight : undefined}
      {...restProps}
    />
  );
};
