// Text definitions
interface TextDefinition {
  size: number;
  rows: number;
}
type Breakpoint = 'mobile' | 'desktop';
type HeadingSize = 'level1' | 'level2' | 'level3';
type TextSize = 'standard' | 'large';
type ResponsiveHeading = Record<Breakpoint, TextDefinition> &
  Record<'regular' | 'weak', FontWeight>;
type ResponsiveText = Record<Breakpoint, TextDefinition>;

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

// Border definitions
type BorderWidth = 'standard';

export interface Tokens {
  rowHeight: number;
  columnWidth: number;
  touchableRows: number;
  responsiveBreakpoint: number;
  descenderHeightScale: number;
  heading: Record<HeadingSize, ResponsiveHeading>;
  text: Record<TextSize, ResponsiveText>;
  rowSpacing: SpacingToken;
  columnSpacing: SpacingToken | Record<'gutter', number>;
  borderWidth: Record<BorderWidth, number>;
}

type BackgroundColor =
  | 'input'
  | 'inputDisabled'
  | 'formAccent'
  | 'formAccentDisabled'
  | 'selection'
  | 'info'
  | 'card'
  | 'critical';
type BorderColor = 'standard' | 'formAccent' | 'critical';
type BorderRadius = 'standard';
type BorderShadow = 'focus';
export type Color =
  | 'black'
  | 'white'
  | 'critical'
  | 'positive'
  | 'secondary'
  | 'formAccent'
  | 'neutral'
  | 'link';
type Fill =
  | 'currentColor'
  | 'formAccent'
  | 'formAccentDisabled'
  | 'critical'
  | 'positive'
  | 'secondary'
  | 'white';
type FontFamily = 'text';
type FontSize = TextSize | HeadingSize;
export type FontWeight = 'regular' | 'medium' | 'strong';
export type Display = 'block' | 'inline' | 'none' | 'inlineBlock' | 'flex';
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
export type IconSize =
  | 'standardText'
  | 'standardTextInline'
  | 'largeText'
  | 'largeTextInline';
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
export type Transform =
  | 'standardText'
  | 'largeText'
  | 'level1Heading'
  | 'level2Heading'
  | 'level3Heading';
type Transition = 'fast';

export interface Atoms {
  reset: Record<ResetTags, string>;
  backgroundColor: Record<BackgroundColor, string>;
  borderColor: Record<BorderColor, string>;
  borderRadius: Record<BorderRadius, string>;
  borderWidth: Record<BorderWidth, string>;
  boxShadow: Record<BorderShadow, string>;
  color: Record<Color, string>;
  fill: Record<Fill, string>;
  fontFamily: Record<FontFamily, string>;
  fontSize: Record<FontSize, string>;
  fontWeight: Record<FontWeight, string>;
  height: Record<IconSize, string>;
  marginTop: Record<Spacing, string>;
  marginRight: Record<HorizontalSpacing, string>;
  marginBottom: Record<Spacing, string>;
  marginLeft: Record<HorizontalSpacing, string>;
  marginTopDesktop: Record<Spacing, string>;
  marginRightDesktop: Record<HorizontalSpacing, string>;
  marginBottomDesktop: Record<Spacing, string>;
  marginLeftDesktop: Record<HorizontalSpacing, string>;
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
  transform: Record<Transform, string>;
  transition: Record<Transition, string>;
  width: Record<IconSize, string>;
}

export interface Theme {
  readonly name: string;
  readonly tokens: Tokens;
  readonly atoms: Atoms;
}
