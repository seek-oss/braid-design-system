import React from 'react';
import { Card as BraidCard, CardProps, validCardComponents } from './Card';

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
