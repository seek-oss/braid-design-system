import React from 'react';
import { Columns as BraidColumns, ColumnsProps } from './Columns';

export const Columns = ({
  space,
  align,
  alignY,
  ...restProps
}: ColumnsProps) => (
  <BraidColumns
    space={typeof space !== 'boolean' ? space : 'none'}
    align={typeof align !== 'boolean' ? align : undefined}
    alignY={typeof alignY !== 'boolean' ? alignY : undefined}
    {...restProps}
  />
);
