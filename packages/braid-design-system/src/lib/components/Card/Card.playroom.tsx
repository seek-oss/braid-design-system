import type { FC } from 'react';

import { type CardProps, Card as BraidCard, validCardComponents } from './Card';

export const Card: FC<CardProps> = ({ component, ...restProps }) => (
  <BraidCard
    component={
      component && validCardComponents.indexOf(component) > -1
        ? component
        : undefined
    }
    {...restProps}
  />
);
