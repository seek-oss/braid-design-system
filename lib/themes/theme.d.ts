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

// Border definitions
type BorderWidth = 'standard' | 'large';

export interface Tokens {
  rowHeight: number;
  columnWidth: number;
  touchableRows: number;
  responsiveBreakpoint: number;
  descenderHeightScale: number;
  heading: Record<HeadingSize, ResponsiveHeading>;
  text: Record<TextSize, ResponsiveText>;
  rowSpacing: SpacingToken;
  columnSpacing: ColumnSpacingToken;
  borderWidth: Record<BorderWidth, number>;
}

type BackgroundColor =
  | 'input'
  | 'inputDisabled'
  | 'brandAccent'
  | 'brandAccentActive'
  | 'brandAccentHover'
  | 'formAccent'
  | 'formAccentActive'
  | 'formAccentHover'
  | 'formAccentDisabled'
  | 'selection'
  | 'info'
  | 'infoLight'
  | 'card'
  | 'critical'
  | 'criticalLight'
  | 'positive'
  | 'positiveLight';
type BorderRadius = 'standard';
export type BoxShadow =
  | 'outlineFocus'
  | 'borderStandard'
  | 'borderCritical'
  | 'borderFormAccent'
  | 'borderFormAccentLarge';
export type Color =
  | 'black'
  | 'white'
  | 'critical'
  | 'criticalContrast'
  | 'positive'
  | 'positiveContrast'
  | 'secondary'
  | 'info'
  | 'infoContrast'
  | 'brandAccentForeground'
  | 'formAccent'
  | 'neutral'
  | 'link';
type FontSize = TextSize | HeadingSize;
export type Display = 'block' | 'inline' | 'none' | 'inlineBlock' | 'flex';
export type FlexDirection = 'row' | 'column';
export type Width = 'full';
type Spacing =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';
type HorizontalSpacing = Spacing | 'gutter';
type VerticalPadding = Spacing | 'standardTouchableText';

export interface Atoms {
  backgroundColor: Record<BackgroundColor, string>;
  borderRadius: Record<BorderRadius, string>;
  boxShadow: Record<BoxShadow, string>;
  color: Record<Color, string>;
  paddingTop: Record<VerticalPadding, string>;
  paddingRight: Record<HorizontalSpacing, string>;
  paddingBottom: Record<VerticalPadding, string>;
  paddingLeft: Record<HorizontalSpacing, string>;
  paddingTopDesktop: Record<VerticalPadding, string>;
  paddingRightDesktop: Record<HorizontalSpacing, string>;
  paddingBottomDesktop: Record<VerticalPadding, string>;
  paddingLeftDesktop: Record<HorizontalSpacing, string>;
  display: Record<Display, string>;
  displayDesktop: Record<Display, string>;
  flexDirection: Record<FlexDirection, string>;
  flexDirectionDesktop: Record<FlexDirection, string>;
  width: Record<Width, string>;
}

export interface Theme {
  readonly name: string;
  readonly tokens: Tokens;
  readonly atoms: Atoms;
  readonly treatTheme: ThemeRef;
}
