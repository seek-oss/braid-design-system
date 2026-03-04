import type { ComponentProps, FC } from 'react';

import { HiddenVisually as BraidHiddenVisually } from './HiddenVisually';

export const HiddenVisually: FC<ComponentProps<typeof BraidHiddenVisually>> = ({
  ...restProps
}) => <BraidHiddenVisually {...restProps} />;

// @ts-expect-error Used for debugging Stack space in Playroom
HiddenVisually.__isHiddenVisually__ = true;
