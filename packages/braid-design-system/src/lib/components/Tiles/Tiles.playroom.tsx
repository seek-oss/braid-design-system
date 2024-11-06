import React from 'react';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import { type TilesProps, Tiles as BraidTiles } from './Tiles';

export const Tiles = ({ space, ...restProps }: TilesProps) => (
  <BraidTiles space={cleanSpaceValue(space) || 'none'} {...restProps} />
);
