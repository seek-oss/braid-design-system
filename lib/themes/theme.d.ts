import { ThemeRef } from 'sku/treat';

// Text definitions
export type FieldTone = 'neutral' | 'critical' | 'positive';

export interface Theme {
  readonly name: string;
  readonly treatTheme: ThemeRef;
}
