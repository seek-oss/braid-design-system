import mapValues from 'lodash/mapValues';
import { FontMetrics, getCapHeight } from 'capsize';

import { BraidTokens, TextDefinition } from './tokenType';
import { buildValues } from '../hooks/typography/capsize/prebuilt';

const px = (v: string | number) => `${v}px`;

const fontSizeToCapHeight = (
  grid: number,
  definition: TextDefinition,
  fontMetrics: FontMetrics,
) => {
  const { mobile, tablet } = definition;

  const mobileCapHeight = getCapHeight({
    fontSize: mobile.fontSize,
    fontMetrics,
  });

  const tabletCapHeight = getCapHeight({
    fontSize: tablet.fontSize,
    fontMetrics,
  });

  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    ...mobileTrims
  } = buildValues({
    fontSize: mobile.fontSize,
    leading: mobile.rows * grid,
    fontMetrics,
  });

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    ...tabletTrims
  } = buildValues({
    fontSize: tablet.fontSize,
    leading: tablet.rows * grid,
    fontMetrics,
  });

  return {
    mobile: {
      fontSize: mobileFontSize,
      lineHeight: mobileLineHeight,
      capHeight: px(mobileCapHeight),
      capsizeTrims: {
        ...mobileTrims,
      },
    },
    tablet: {
      fontSize: tabletFontSize,
      lineHeight: tabletLineHeight,
      capHeight: px(tabletCapHeight),
      capsizeTrims: {
        ...tabletTrims,
      },
    },
  };
};

export default (braidTokens: BraidTokens) => {
  const { name, displayName, ...tokens } = braidTokens;
  const { webFont, ...typography } = tokens.typography;
  const { foreground, background } = tokens.color;

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
    foregroundColor: foreground,
    backgroundColor: background,
    alertBorderColor: tokens.alertBorderColor,
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
  } as const;

  return resolvedTokens;
};
