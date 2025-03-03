import { createContext } from 'react';

import type { Placement } from './Popover';

export interface PopoverContextValue {
  arrowOffset: number;
  flipPlacement: Placement;
}

export const PopoverContext = createContext<PopoverContextValue | null>(null);
