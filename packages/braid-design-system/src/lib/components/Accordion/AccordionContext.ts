import { createContext } from 'react';

import type { TextProps } from '../Text/Text';

export const validTones = ['neutral', 'secondary'] as const;

export interface AccordionContextValue {
  size?: TextProps['size'];
  tone?: (typeof validTones)[number];
  weight?: TextProps['weight'];
}

export const AccordionContext = createContext<AccordionContextValue | null>(
  null,
);
