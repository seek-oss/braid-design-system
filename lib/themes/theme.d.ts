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
type ResponsiveText = Record<Breakpoint, TextDefinition>;
export type FieldTone = 'neutral' | 'critical' | 'positive';

// Spacing definitions
interface SpacingToken {
  xxsmall: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
}
interface ColumnSpacingToken extends SpacingToken {
  gutter: number;
}

export interface Tokens {
  rowHeight: number;
  columnWidth: number;
  touchableRows: number;
  responsiveBreakpoint: number;
  descenderHeightScale: number;
  heading: Record<'level1' | 'level2' | 'level3', ResponsiveHeading>;
  text: Record<'small' | 'standard' | 'large', ResponsiveText>;
  rowSpacing: SpacingToken;
  columnSpacing: ColumnSpacingToken;
}

export interface Theme {
  readonly name: string;
  readonly tokens: Tokens;
  readonly treatTheme: ThemeRef;
}
