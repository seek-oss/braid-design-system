import { createContext } from 'react';

import type { Placement } from './BasePopover';

export interface BasePopoverContextValue {
  arrowOffset: number;
  flipPlacement: Placement;
}

export const BasePopoverContext = createContext<BasePopoverContextValue | null>(
  null,
);
