import type { FC } from 'react';

import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';

import { type InlineProps, Inline as BraidInline } from './Inline';

export const Inline: FC<InlineProps> = ({
  space,
  align,
  alignY,
  ...restProps
}) => (
  <BraidInline
    space={cleanSpaceValue(space) || 'none'}
    align={typeof align !== 'boolean' ? align : undefined}
    alignY={typeof alignY !== 'boolean' ? alignY : undefined}
    {...restProps}
  />
);
