import type { FC } from 'react';

import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';

import { type TilesProps, Tiles as BraidTiles } from './Tiles';

export const Tiles: FC<TilesProps> = ({ space, ...restProps }) => (
  <BraidTiles space={cleanSpaceValue(space) || 'none'} {...restProps} />
);
