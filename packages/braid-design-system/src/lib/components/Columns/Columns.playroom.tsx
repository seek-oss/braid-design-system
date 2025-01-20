import React from 'react';

import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';

import { type ColumnsProps, Columns as BraidColumns } from './Columns';

export const Columns = ({
  space,
  align,
  alignY,
  ...restProps
}: ColumnsProps) => (
  <BraidColumns
    space={cleanSpaceValue(space) || 'none'}
    align={typeof align !== 'boolean' ? align : undefined}
    alignY={typeof alignY !== 'boolean' ? alignY : undefined}
    {...restProps}
  />
);
