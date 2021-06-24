import React from 'react';
import { Tiles as BraidTiles, TilesProps } from './Tiles';

export const Tiles = ({ space, columns, ...restProps }: TilesProps) => (
  <BraidTiles
    space={typeof space !== 'boolean' ? space : 'none'}
    columns={typeof columns === 'boolean' || !columns ? 1 : columns}
    {...restProps}
  />
);
