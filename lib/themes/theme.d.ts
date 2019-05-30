import { ThemeRef } from 'sku/treat';

// Text definitions
interface TextDefinition {
  size: number;
  rows: number;
}
type FontWeight = 'regular' | 'medium' | 'strong';
type Breakpoint = 'mobile' | 'desktop';
type ResponsiveHeading = Record<Breakpoint, TextDefinition> &
  Record<'regular' | 'weak', FontWeight>;
export type FieldTone = 'neutral' | 'critical' | 'positive';

export interface Tokens {
  heading: Record<'level1' | 'level2' | 'level3', ResponsiveHeading>;
}

export interface Theme {
  readonly name: string;
  readonly tokens: Tokens;
  readonly treatTheme: ThemeRef;
}
