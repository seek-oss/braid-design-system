import type { FC } from 'react';

import { Hidden as BraidHidden, type HiddenProps } from './Hidden';

export const Hidden: FC<HiddenProps> = ({ ...restProps }) => (
  <BraidHidden {...restProps} />
);

// @ts-expect-error Used for debugging Stack space in Playroom
Hidden.__isHidden__ = true;
