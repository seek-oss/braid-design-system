import { createContext } from 'react';
import type { TextProps } from '../Text/Text';
import type { RequiredResponsiveValue } from '../../css/atoms/sprinkles.css';
import type { validSpaceValues } from './Accordion';

export const validTones = ['neutral', 'secondary'] as const;

export interface AccordionContextValue {
  dividers?: boolean;
  size?: TextProps['size'];
  tone?: (typeof validTones)[number];
  weight?: TextProps['weight'];
  space?: RequiredResponsiveValue<(typeof validSpaceValues)[number]>;
}

export const AccordionContext = createContext<AccordionContextValue | null>(
  null,
);
