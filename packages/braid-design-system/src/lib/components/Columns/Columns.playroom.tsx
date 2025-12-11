import type { FC } from 'react';

import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';

import { type ColumnsProps, Columns as BraidColumns } from './Columns';

export const Columns: FC<ColumnsProps> = ({
  space,
  align,
  alignY,
  ...restProps
}) => (
  <BraidColumns
    space={cleanSpaceValue(space) || 'none'}
    align={typeof align !== 'boolean' ? align : undefined}
    alignY={typeof alignY !== 'boolean' ? alignY : undefined}
    {...restProps}
  />
);
