import { createContext } from 'react';
import type { TextProps } from '../Text/Text';
import type { RequiredResponsiveValue } from '../../css/atoms/sprinkles.css';

export type validSizeValues = TextProps['size'];
export const validSpaceValues = ['medium', 'large', 'xlarge'] as const;
export const validTones = ['neutral', 'secondary'] as const;

export interface AccordionContextValue {
  dividers?: boolean;
  size?: validSizeValues;
  tone?: (typeof validTones)[number];
  weight?: TextProps['weight'];
  space?: RequiredResponsiveValue<(typeof validSpaceValues)[number]>;
}

export const AccordionContext = createContext<AccordionContextValue | null>(
  null,
);
