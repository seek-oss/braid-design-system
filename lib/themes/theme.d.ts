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
  heading: Record<HeadingSize, ResponsiveHeading>;
  text: Record<TextSize, ResponsiveText>;
  rowSpacing: SpacingToken;
  columnSpacing: ColumnSpacingToken;
}

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
type ResetTags =
  | 'html'
  | 'body'
  | 'div'
  | 'span'
  | 'applet'
  | 'object'
  | 'iframe'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'blockquote'
  | 'pre'
  | 'a'
  | 'abbr'
  | 'acronym'
  | 'address'
  | 'big'
  | 'cite'
  | 'code'
  | 'del'
  | 'dfn'
  | 'em'
  | 'img'
  | 'ins'
  | 'kbd'
  | 'q'
  | 's'
  | 'samp'
  | 'small'
  | 'strike'
  | 'strong'
  | 'sub'
  | 'sup'
  | 'tt'
  | 'b'
  | 'u'
  | 'i'
  | 'center'
  | 'dl'
  | 'dt'
  | 'dd'
  | 'ol'
  | 'ul'
  | 'li'
  | 'fieldset'
  | 'form'
  | 'label'
  | 'legend'
  | 'table'
  | 'caption'
  | 'tbody'
  | 'tfoot'
  | 'thead'
  | 'tr'
  | 'th'
  | 'td'
  | 'article'
  | 'aside'
  | 'canvas'
  | 'details'
  | 'embed'
  | 'figure'
  | 'figcaption'
  | 'footer'
  | 'header'
  | 'hgroup'
  | 'menu'
  | 'nav'
  | 'output'
  | 'ruby'
  | 'section'
  | 'summary'
  | 'time'
  | 'mark'
  | 'audio'
  | 'video';
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
  reset: Record<ResetTags, string>;
  color: Record<Color, string>;
  paddingTop: Record<VerticalPadding, string>;
  paddingRight: Record<HorizontalSpacing, string>;
  paddingBottom: Record<VerticalPadding, string>;
  paddingLeft: Record<HorizontalSpacing, string>;
  paddingTopDesktop: Record<VerticalPadding, string>;
  paddingRightDesktop: Record<HorizontalSpacing, string>;
  paddingBottomDesktop: Record<VerticalPadding, string>;
  paddingLeftDesktop: Record<HorizontalSpacing, string>;
}

export interface Theme {
  readonly name: string;
  readonly tokens: Tokens;
  readonly atoms: Atoms;
  readonly treatTheme: ThemeRef;
}
