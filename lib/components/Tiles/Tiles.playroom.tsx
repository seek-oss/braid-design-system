import React from 'react';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import { Tiles as BraidTiles, TilesProps } from './Tiles';

export const Tiles = ({ space, columns, ...restProps }: TilesProps) => (
  <BraidTiles
    space={cleanSpaceValue(space)}
    columns={typeof columns === 'boolean' || !columns ? 1 : columns}
    {...restProps}
  />
);
