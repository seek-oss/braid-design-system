// / <reference types="react" />
import { TextProps } from '../Text/Text';
export declare const validTones: readonly ['neutral', 'secondary'];
export interface AccordionContextValue {
  size?: TextProps['size'];
  tone?: typeof validTones[number];
}
export declare const AccordionContext: import('react').Context<AccordionContextValue | null>;
