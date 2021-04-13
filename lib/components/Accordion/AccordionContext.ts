import { createContext } from 'react';
import { TextProps } from '../Text/Text';

export interface AccordionContextValue {
  size?: TextProps['size'];
  tone?: TextProps['tone'];
}

export const AccordionContext = createContext<AccordionContextValue | null>(
  null,
);
