import React from 'react';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import { Columns as BraidColumns, ColumnsProps } from './Columns';

export const Columns = ({
  space,
  align,
  alignY,
  ...restProps
}: ColumnsProps) => (
  <BraidColumns
    space={cleanSpaceValue(space)}
    align={typeof align !== 'boolean' ? align : undefined}
    alignY={typeof alignY !== 'boolean' ? alignY : undefined}
    {...restProps}
  />
);
