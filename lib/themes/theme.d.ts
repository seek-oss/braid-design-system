// Text definitions
interface TextDefinition {
  size: number;
  rows: number;
}
type Breakpoint = 'mobile' | 'desktop';
type TextSize = 'standard' | 'large';
type ResponsiveText = Record<Breakpoint, TextDefinition>;

// Spacing definitions
interface Spacing {
  xxsmall: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
}

// Border definitions
type BorderWidthVariants = 'standard';

export interface Tokens {
  rowHeight: number;
  columnWidth: number;
  interactionRows: number;
  responsiveBreakpoint: number;
  descenderHeightScale: number;
  text: Record<TextSize, ResponsiveText>;
  rowSpacing: Spacing;
  columnSpacing: Spacing | Record<'gutter', number>;
  borderWidth: Record<BorderWidthVariants, number>;
}

type BackgroundColorVariants =
  | 'input'
  | 'inputDisabled'
  | 'formAccent'
  | 'formAccentDisabled'
  | 'selection'
  | 'info'
  | 'card'
  | 'critical';
type BorderColorVariants = 'standard' | 'formAccent' | 'critical';
type BorderRadiusVariants = 'standard';
type BorderShadowVariants = 'focus';
export type ColorVariants =
  | 'black'
  | 'white'
  | 'critical'
  | 'positive'
  | 'secondary'
  | 'formAccent'
  | 'neutral';
type FillVariants =
  | 'currentColor'
  | 'formAccent'
  | 'formAccentDisabled'
  | 'critical'
  | 'positive'
  | 'secondary'
  | 'white';
type FontFamilyVariants = 'text';
export type FontSizeVariants = 'standard' | 'interaction' | 'large';
export type FontWeightVariants = 'regular' | 'strong';
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
type SizeVariants =
  | 'standardText'
  | 'standardTextInline'
  | 'largeText'
  | 'largeTextInline';
type SpacingVariants =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';
type HorizontalSpacingVariants = SpacingVariants | 'gutter';
type TransitionVariants = 'fast';

export interface Atoms {
  reset: Record<ResetTags, string>;
  backgroundColor: Record<BackgroundColorVariants, string>;
  borderColor: Record<BorderColorVariants, string>;
  borderRadius: Record<BorderRadiusVariants, string>;
  borderWidth: Record<BorderWidthVariants, string>;
  boxShadow: Record<BorderShadowVariants, string>;
  color: Record<ColorVariants, string>;
  fill: Record<FillVariants, string>;
  fontFamily: Record<FontFamilyVariants, string>;
  fontSize: Record<FontSizeVariants | 'centered', string>;
  fontWeight: Record<FontWeightVariants, string>;
  height: Record<SizeVariants, string>;
  marginTop: Record<SpacingVariants, string>;
  marginRight: Record<HorizontalSpacingVariants, string>;
  marginBottom: Record<SpacingVariants, string>;
  marginLeft: Record<HorizontalSpacingVariants, string>;
  paddingTop: Record<SpacingVariants, string>;
  paddingRight: Record<HorizontalSpacingVariants, string>;
  paddingBottom: Record<SpacingVariants, string>;
  paddingLeft: Record<HorizontalSpacingVariants, string>;
  transition: Record<TransitionVariants, string>;
  width: Record<SizeVariants, string>;
}

export interface Theme {
  readonly name: string;
  readonly tokens: Tokens;
  readonly atoms: Atoms;
}
