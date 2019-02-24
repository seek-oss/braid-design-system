import { Atoms } from '../themes/theme';
import { CssModuleAtoms } from './types';
import Reset from '../reset/reset.css.js';

export default (atoms: CssModuleAtoms): Atoms => ({
  reset: Reset,
  backgroundColor: {
    card: atoms.backgroundColor_card,
    critical: atoms.backgroundColor_critical,
    formAccent: atoms.backgroundColor_formAccent,
    formAccentDisabled: atoms.backgroundColor_formAccentDisabled,
    info: atoms.backgroundColor_info,
    input: atoms.backgroundColor_input,
    inputDisabled: atoms.backgroundColor_inputDisabled,
    selection: atoms.backgroundColor_selection
  },
  borderColor: {
    critical: atoms.borderColor_critical,
    formAccent: atoms.borderColor_formAccent,
    standard: atoms.borderColor_standard
  },
  borderRadius: {
    standard: atoms.borderRadius_standard
  },
  borderWidth: {
    standard: atoms.borderWidth_standard
  },
  boxShadow: {
    focus: atoms.boxShadow_focus
  },
  color: {
    black: atoms.color_black,
    critical: atoms.color_critical,
    formAccent: atoms.color_formAccent,
    neutral: atoms.color_neutral,
    positive: atoms.color_positive,
    secondary: atoms.color_secondary,
    white: atoms.color_white
  },
  displayDesktop: {
    block: atoms.displayDesktop_block,
    flex: atoms.displayDesktop_flex,
    inline: atoms.displayDesktop_inline,
    inlineBlock: atoms.displayDesktop_inlineBlock,
    none: atoms.displayDesktop_none
  },
  display: {
    block: atoms.display_block,
    flex: atoms.display_flex,
    inline: atoms.display_inline,
    inlineBlock: atoms.display_inlineBlock,
    none: atoms.display_none
  },
  fill: {
    critical: atoms.fill_critical,
    currentColor: atoms.fill_currentColor,
    formAccent: atoms.fill_formAccent,
    formAccentDisabled: atoms.fill_formAccentDisabled,
    positive: atoms.fill_positive,
    secondary: atoms.fill_secondary,
    white: atoms.fill_white
  },
  fontFamily: {
    text: atoms.fontFamily_text
  },
  fontSize: {
    interaction: atoms.fontSize_interaction,
    large: atoms.fontSize_large,
    level1: atoms.fontSize_level1,
    level2: atoms.fontSize_level2,
    level3: atoms.fontSize_level3,
    standard: atoms.fontSize_standard
  },
  fontWeight: {
    medium: atoms.fontWeight_medium,
    regular: atoms.fontWeight_regular,
    strong: atoms.fontWeight_strong
  },
  height: {
    largeText: atoms.height_largeText,
    largeTextInline: atoms.height_largeTextInline,
    standardText: atoms.height_standardText,
    standardTextInline: atoms.height_standardTextInline
  },
  marginBottom: {
    large: atoms.marginBottom_large,
    medium: atoms.marginBottom_medium,
    small: atoms.marginBottom_small,
    xlarge: atoms.marginBottom_xlarge,
    xsmall: atoms.marginBottom_xsmall,
    xxlarge: atoms.marginBottom_xxlarge,
    xxsmall: atoms.marginBottom_xxsmall
  },
  marginTop: {
    large: atoms.marginTop_large,
    medium: atoms.marginTop_medium,
    small: atoms.marginTop_small,
    xlarge: atoms.marginTop_xlarge,
    xsmall: atoms.marginTop_xsmall,
    xxlarge: atoms.marginTop_xxlarge,
    xxsmall: atoms.marginTop_xxsmall
  },
  marginLeft: {
    gutter: atoms.marginLeft_gutter,
    large: atoms.marginLeft_large,
    medium: atoms.marginLeft_medium,
    small: atoms.marginLeft_small,
    xlarge: atoms.marginLeft_xlarge,
    xsmall: atoms.marginLeft_xsmall,
    xxlarge: atoms.marginLeft_xxlarge,
    xxsmall: atoms.marginLeft_xxsmall
  },
  marginRight: {
    gutter: atoms.marginRight_gutter,
    large: atoms.marginRight_large,
    medium: atoms.marginRight_medium,
    small: atoms.marginRight_small,
    xlarge: atoms.marginRight_xlarge,
    xsmall: atoms.marginRight_xsmall,
    xxlarge: atoms.marginRight_xxlarge,
    xxsmall: atoms.marginRight_xxsmall
  },
  marginBottomDesktop: {
    large: atoms.marginBottomDesktop_large,
    medium: atoms.marginBottomDesktop_medium,
    small: atoms.marginBottomDesktop_small,
    xlarge: atoms.marginBottomDesktop_xlarge,
    xsmall: atoms.marginBottomDesktop_xsmall,
    xxlarge: atoms.marginBottomDesktop_xxlarge,
    xxsmall: atoms.marginBottomDesktop_xxsmall
  },
  marginTopDesktop: {
    large: atoms.marginTopDesktop_large,
    medium: atoms.marginTopDesktop_medium,
    small: atoms.marginTopDesktop_small,
    xlarge: atoms.marginTopDesktop_xlarge,
    xsmall: atoms.marginTopDesktop_xsmall,
    xxlarge: atoms.marginTopDesktop_xxlarge,
    xxsmall: atoms.marginTopDesktop_xxsmall
  },
  marginLeftDesktop: {
    gutter: atoms.marginLeftDesktop_gutter,
    large: atoms.marginLeftDesktop_large,
    medium: atoms.marginLeftDesktop_medium,
    small: atoms.marginLeftDesktop_small,
    xlarge: atoms.marginLeftDesktop_xlarge,
    xsmall: atoms.marginLeftDesktop_xsmall,
    xxlarge: atoms.marginLeftDesktop_xxlarge,
    xxsmall: atoms.marginLeftDesktop_xxsmall
  },
  marginRightDesktop: {
    gutter: atoms.marginRightDesktop_gutter,
    large: atoms.marginRightDesktop_large,
    medium: atoms.marginRightDesktop_medium,
    small: atoms.marginRightDesktop_small,
    xlarge: atoms.marginRightDesktop_xlarge,
    xsmall: atoms.marginRightDesktop_xsmall,
    xxlarge: atoms.marginRightDesktop_xxlarge,
    xxsmall: atoms.marginRightDesktop_xxsmall
  },
  paddingBottom: {
    large: atoms.paddingBottom_large,
    medium: atoms.paddingBottom_medium,
    small: atoms.paddingBottom_small,
    xlarge: atoms.paddingBottom_xlarge,
    xsmall: atoms.paddingBottom_xsmall,
    xxlarge: atoms.paddingBottom_xxlarge,
    xxsmall: atoms.paddingBottom_xxsmall
  },
  paddingTop: {
    large: atoms.paddingTop_large,
    medium: atoms.paddingTop_medium,
    small: atoms.paddingTop_small,
    xlarge: atoms.paddingTop_xlarge,
    xsmall: atoms.paddingTop_xsmall,
    xxlarge: atoms.paddingTop_xxlarge,
    xxsmall: atoms.paddingTop_xxsmall
  },
  paddingLeft: {
    gutter: atoms.paddingLeft_gutter,
    large: atoms.paddingLeft_large,
    medium: atoms.paddingLeft_medium,
    small: atoms.paddingLeft_small,
    xlarge: atoms.paddingLeft_xlarge,
    xsmall: atoms.paddingLeft_xsmall,
    xxlarge: atoms.paddingLeft_xxlarge,
    xxsmall: atoms.paddingLeft_xxsmall
  },
  paddingRight: {
    gutter: atoms.paddingRight_gutter,
    large: atoms.paddingRight_large,
    medium: atoms.paddingRight_medium,
    small: atoms.paddingRight_small,
    xlarge: atoms.paddingRight_xlarge,
    xsmall: atoms.paddingRight_xsmall,
    xxlarge: atoms.paddingRight_xxlarge,
    xxsmall: atoms.paddingRight_xxsmall
  },
  paddingBottomDesktop: {
    large: atoms.paddingBottomDesktop_large,
    medium: atoms.paddingBottomDesktop_medium,
    small: atoms.paddingBottomDesktop_small,
    xlarge: atoms.paddingBottomDesktop_xlarge,
    xsmall: atoms.paddingBottomDesktop_xsmall,
    xxlarge: atoms.paddingBottomDesktop_xxlarge,
    xxsmall: atoms.paddingBottomDesktop_xxsmall
  },
  paddingTopDesktop: {
    large: atoms.paddingTopDesktop_large,
    medium: atoms.paddingTopDesktop_medium,
    small: atoms.paddingTopDesktop_small,
    xlarge: atoms.paddingTopDesktop_xlarge,
    xsmall: atoms.paddingTopDesktop_xsmall,
    xxlarge: atoms.paddingTopDesktop_xxlarge,
    xxsmall: atoms.paddingTopDesktop_xxsmall
  },
  paddingLeftDesktop: {
    gutter: atoms.paddingLeftDesktop_gutter,
    large: atoms.paddingLeftDesktop_large,
    medium: atoms.paddingLeftDesktop_medium,
    small: atoms.paddingLeftDesktop_small,
    xlarge: atoms.paddingLeftDesktop_xlarge,
    xsmall: atoms.paddingLeftDesktop_xsmall,
    xxlarge: atoms.paddingLeftDesktop_xxlarge,
    xxsmall: atoms.paddingLeftDesktop_xxsmall
  },
  paddingRightDesktop: {
    gutter: atoms.paddingRightDesktop_gutter,
    large: atoms.paddingRightDesktop_large,
    medium: atoms.paddingRightDesktop_medium,
    small: atoms.paddingRightDesktop_small,
    xlarge: atoms.paddingRightDesktop_xlarge,
    xsmall: atoms.paddingRightDesktop_xsmall,
    xxlarge: atoms.paddingRightDesktop_xxlarge,
    xxsmall: atoms.paddingRightDesktop_xxsmall
  },
  transform: {
    largeText: atoms.transform_largeText,
    level1Heading: atoms.transform_level1Heading,
    level2Heading: atoms.transform_level2Heading,
    level3Heading: atoms.transform_level3Heading,
    standardText: atoms.transform_standardText
  },
  transition: {
    fast: atoms.transition_fast
  },
  width: {
    largeText: atoms.width_largeText,
    largeTextInline: atoms.width_largeTextInline,
    standardText: atoms.width_standardText,
    standardTextInline: atoms.width_standardTextInline
  }
});
