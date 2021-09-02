import { createContext } from 'react';
import { TextProps } from '../Text/Text';

export const validTones = ['neutral', 'secondary'] as const;

export interface AccordionContextValue {
  size?: TextProps['size'];
  tone?: typeof validTones[number];
}

export const AccordionContext = createContext<AccordionContextValue | null>(
  null,
);
