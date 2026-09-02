import { createContext } from 'react';

import type { TextProps } from '../Text/Text';

export const validTones = ['neutral', 'secondary'] as const;

export interface AccordionContextValue {
  size?: TextProps['size'];
  tone?: (typeof validTones)[number];
  weight?: TextProps['weight'];
  exclusive?: boolean;
  openItemId?: string | null;
  onItemToggle?: (itemId: string, expanded: boolean) => void;
  registerItemToggle?: (
    itemId: string,
    onToggle?: (expanded: boolean) => void,
  ) => () => void;
}

export const AccordionContext = createContext<AccordionContextValue | null>(
  null,
);
