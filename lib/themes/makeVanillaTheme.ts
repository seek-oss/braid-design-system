import { darken, lighten } from 'polished';
import mapValues from 'lodash/mapValues';
import { FontMetrics, getCapHeight } from 'capsize';

import { getAccessibleVariant, getLightVariant, isLight } from '../utils';
import { BraidTokens, TextDefinition } from './tokenType';

const px = (v: string | number) => `${v}px`;

const getActiveColor = (x: string) =>
  isLight(x) ? darken(0.1, x) : darken(0.05, x);

const getHoverColor = (x: string) =>
  isLight(x) ? darken(0.05, x) : lighten(0.05, x);

const fontSizeToCapHeight = (
  grid: number,
  definition: TextDefinition,
  fontMetrics: FontMetrics,
) => {
  const { mobile, tablet } = definition;
  const mobileLeading = mobile.rows * grid;
  const tabletLeading = tablet.rows * grid;

  const mobileCapHeight = getCapHeight({
    fontSize: mobile.fontSize,
    fontMetrics,
  });

  const tabletCapHeight = getCapHeight({
    fontSize: tablet.fontSize,
    fontMetrics,
  });

  return {
    mobile: {
      fontSize: String(mobile.fontSize),
      leading: String(mobileLeading),
      capHeight: String(mobileCapHeight),
      capHeightFloored: String(Math.floor(mobileCapHeight)),
    },
    tablet: {
      fontSize: String(tablet.fontSize),
      leading: String(tabletLeading),
      capHeight: String(tabletCapHeight),
      capHeightFloored: String(Math.floor(tabletCapHeight)),
    },
  };
};

export default (braidTokens: BraidTokens) => {
  const { name, displayName, breakpoint, ...tokens } = braidTokens;
  const { webFont, ...typography } = tokens.typography;

  const getInlineFieldSize = (size: 'standard' | 'small') => {
    const scale = (typography.text[size].mobile.rows * tokens.grid) / 42;
    return px(tokens.grid * Math.round(tokens.touchableSize * scale));
  };

  const resolvedTokens = {
    space: mapValues(tokens.space, (sp) => px(sp * tokens.grid)),
    touchableSize: px(tokens.touchableSize * tokens.grid),
    grid: px(tokens.grid),
    borderRadius: tokens.border.radius,
    borderColor: tokens.border.color,
    borderWidth: mapValues(tokens.border.width, px),
    contentWidth: mapValues(tokens.contentWidth, px),
    foregroundColor: tokens.color.foreground,
    backgroundColor: {
      ...tokens.color.background,
      formAccentActive: getActiveColor(tokens.color.background.formAccent),
      formAccentHover: getHoverColor(tokens.color.background.formAccent),
      brandAccentActive: getActiveColor(tokens.color.background.brandAccent),
      brandAccentHover: getHoverColor(tokens.color.background.brandAccent),
      criticalActive: getActiveColor(tokens.color.background.critical),
      criticalHover: getHoverColor(tokens.color.background.critical),
      infoLight: getLightVariant(tokens.color.background.info),
      promoteLight: getLightVariant(tokens.color.background.promote),
      criticalLight: getLightVariant(tokens.color.background.critical),
      positiveLight: getLightVariant(tokens.color.background.positive),
      cautionLight: getLightVariant(tokens.color.background.caution),
      neutralLight: getLightVariant(tokens.color.background.neutral),
    },
    fontFamily: typography.fontFamily,
    fontMetrics: mapValues(typography.fontMetrics, String),
    textSize: mapValues(tokens.typography.text, (definition) =>
      fontSizeToCapHeight(tokens.grid, definition, typography.fontMetrics),
    ),
    textWeight: mapValues(typography.fontWeight, String),
    headingLevel: mapValues(tokens.typography.heading.level, (definition) =>
      fontSizeToCapHeight(tokens.grid, definition, typography.fontMetrics),
    ),
    headingWeight: {
      weak: String(
        tokens.typography.fontWeight[tokens.typography.heading.weight.weak],
      ),
      regular: String(
        tokens.typography.fontWeight[tokens.typography.heading.weight.regular],
      ),
    },
    inlineFieldSize: {
      standard: getInlineFieldSize('standard'),
      small: getInlineFieldSize('small'),
    },
    transition: tokens.transitions,
    transform: tokens.transforms,
    shadow: tokens.shadows,
    accessibleForegroundColors: {
      critical4_51: getAccessibleVariant(tokens.color.foreground.critical),
      critical3_1: getAccessibleVariant(tokens.color.foreground.critical, {
        nonText: true,
      }),
      caution4_51: getAccessibleVariant(tokens.color.foreground.caution),
      caution3_1: getAccessibleVariant(tokens.color.foreground.caution, {
        nonText: true,
      }),
      positive4_51: getAccessibleVariant(tokens.color.foreground.positive),
      positive3_1: getAccessibleVariant(tokens.color.foreground.positive, {
        nonText: true,
      }),
      info4_51: getAccessibleVariant(tokens.color.foreground.info),
      info3_1: getAccessibleVariant(tokens.color.foreground.info, {
        nonText: true,
      }),
      promote4_51: getAccessibleVariant(tokens.color.foreground.promote),
      promote3_1: getAccessibleVariant(tokens.color.foreground.promote, {
        nonText: true,
      }),
    },
  } as const;

  return resolvedTokens;
};
