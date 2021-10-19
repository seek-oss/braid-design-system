import React from 'react';
import type { CardProps } from './Card';
import { Card as BraidCard, validCardComponents } from './Card';

export const Card = ({ component, ...restProps }: CardProps) => (
  <BraidCard
    component={
      component && validCardComponents.indexOf(component) > -1
        ? component
        : undefined
    }
    {...restProps}
  />
);
