// Text definitions
interface TextDefinition {
  size: number;
  rows: number;
}
type Breakpoint = 'mobile' | 'desktop';
type HeadingSize = 'level1' | 'level2' | 'level3';
type TextSize = 'standard' | 'large';
type ResponsiveHeading = Record<Breakpoint, TextDefinition> &
  Record<'regular' | 'weak', FontWeightVariants>;
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
  touchableRows: number;
  responsiveBreakpoint: number;
  descenderHeightScale: number;
  heading: Record<HeadingSize, ResponsiveHeading>;
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
  | 'neutral'
  | 'link';
type FillVariants =
  | 'currentColor'
  | 'formAccent'
  | 'formAccentDisabled'
  | 'critical'
  | 'positive'
  | 'secondary'
  | 'white';
type FontFamilyVariants = 'text';
type FontSizeVariant = TextSize | HeadingSize;
export type FontWeightVariants = 'regular' | 'medium' | 'strong';
export type DisplayVariants =
  | 'block'
  | 'inline'
  | 'none'
  | 'inlineBlock'
  | 'flex';
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
export type SizeVariants =
  | 'standardText'
  | 'standardTextInline'
  | 'largeText'
  | 'largeTextInline';
type SpacingVariant =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';
type HorizontalSpacingVariant = SpacingVariant | 'gutter';
type VerticalPaddingVariant = SpacingVariant | 'standardTouchableText';
export type TransformVariant =
  | 'standardText'
  | 'largeText'
  | 'level1Heading'
  | 'level2Heading'
  | 'level3Heading';
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
  fontSize: Record<FontSizeVariant, string>;
  fontWeight: Record<FontWeightVariants, string>;
  height: Record<SizeVariants, string>;
  marginTop: Record<SpacingVariant, string>;
  marginRight: Record<HorizontalSpacingVariant, string>;
  marginBottom: Record<SpacingVariant, string>;
  marginLeft: Record<HorizontalSpacingVariant, string>;
  marginTopDesktop: Record<SpacingVariant, string>;
  marginRightDesktop: Record<HorizontalSpacingVariant, string>;
  marginBottomDesktop: Record<SpacingVariant, string>;
  marginLeftDesktop: Record<HorizontalSpacingVariant, string>;
  paddingTop: Record<VerticalPaddingVariant, string>;
  paddingRight: Record<HorizontalSpacingVariant, string>;
  paddingBottom: Record<VerticalPaddingVariant, string>;
  paddingLeft: Record<HorizontalSpacingVariant, string>;
  paddingTopDesktop: Record<VerticalPaddingVariant, string>;
  paddingRightDesktop: Record<HorizontalSpacingVariant, string>;
  paddingBottomDesktop: Record<VerticalPaddingVariant, string>;
  paddingLeftDesktop: Record<HorizontalSpacingVariant, string>;
  display: Record<DisplayVariants, string>;
  displayDesktop: Record<DisplayVariants, string>;
  transform: Record<TransformVariant, string>;
  transition: Record<TransitionVariants, string>;
  width: Record<SizeVariants, string>;
}

export interface Theme {
  readonly name: string;
  readonly tokens: Tokens;
  readonly atoms: Atoms;
}
