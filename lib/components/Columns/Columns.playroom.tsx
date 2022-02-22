import React from 'react';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import { Columns as BraidColumns, ColumnsProps } from './Columns';
import { validColumnsComponents } from './ColumnsContext';

export const Columns = ({
  space,
  align,
  alignY,
  component,
  ...restProps
}: ColumnsProps) => (
  <BraidColumns
    space={cleanSpaceValue(space)}
    align={typeof align !== 'boolean' ? align : undefined}
    alignY={typeof alignY !== 'boolean' ? alignY : undefined}
    component={
      component && validColumnsComponents.indexOf(component) > -1
        ? component
        : undefined
    }
    {...restProps}
  />
);
