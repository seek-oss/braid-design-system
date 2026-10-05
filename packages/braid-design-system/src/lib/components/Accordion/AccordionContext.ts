import { createContext } from 'react';

import type { TextProps } from '../Text/Text';

export const validTones = ['neutral', 'secondary'] as const;

export interface AccordionContextValue {
  size?: TextProps['size'];
  tone?: (typeof validTones)[number];
  weight?: TextProps['weight'];
  /**
   * True when Accordion owns the open items via `multiple={false}`,
   * `value`, `defaultValue`, or `onChange`.
   */
  managed: boolean;
  openValues: readonly string[];
  toggleValue: (value: string) => void;
}

export const AccordionContext = createContext<AccordionContextValue | null>(
  null,
);
