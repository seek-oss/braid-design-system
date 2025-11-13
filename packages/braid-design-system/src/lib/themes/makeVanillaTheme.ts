import { getCapHeight, precomputeValues } from '@capsizecss/core';

import { mapValues } from '../utils/mapValues';
import { px } from '../utils/px';

import type { BraidTokens, TextDefinition } from './tokenType';

const fontSizeToCapHeight = (
  grid: number,
  definition: TextDefinition,
  fontMetrics: BraidTokens['typography']['fontMetrics'],
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

  const mobileConfig =
    'lineGap' in mobile
      ? {
          fontSize: mobile.fontSize,
          lineGap: mobile.lineGap,
        }
      : {
          fontSize: mobile.fontSize,
          leading: mobile.rows * grid,
        };
  const tabletConfig =
    'lineGap' in tablet
      ? {
          fontSize: tablet.fontSize,
          lineGap: tablet.lineGap,
        }
      : {
          fontSize: tablet.fontSize,
          leading: tablet.rows * grid,
        };

  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    ...mobileTrims
  } = precomputeValues({
    ...mobileConfig,
    fontMetrics,
  });

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    ...tabletTrims
  } = precomputeValues({
    ...tabletConfig,
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

export const makeVanillaTheme = (braidTokens: BraidTokens) => {
  const { name, displayName, ...tokens } = braidTokens;
  const { webFont, ...typography } = tokens.typography;
  const { foreground, background } = tokens.color;
  const textSize = mapValues(tokens.typography.text, (definition) =>
    fontSizeToCapHeight(tokens.grid, definition, typography.fontMetrics),
  );

  const getInlineFieldSize = (size: 'standard' | 'small') => {
    const scale =
      parseInt(textSize[size].mobile.lineHeight, 10) /
      (tokens.touchableSize * tokens.grid);
    return px(tokens.grid * Math.round(tokens.touchableSize * scale));
  };

  const resolvedTokens = {
    space: mapValues(tokens.space, (sp) => px(sp * tokens.grid)),
    touchableSize: px(tokens.touchableSize * tokens.grid),
    grid: px(tokens.grid),
    borderRadius: tokens.border.radius,
    borderColor: tokens.border.color,
    borderWidth: mapValues(tokens.border.width, px),
    focusRingSize: px(tokens.focusRingSize),
    contentWidth: mapValues(tokens.contentWidth, px),
    foregroundColor: foreground,
    backgroundColor: background,
    fontFamily: typography.fontFamily,
    fontMetrics: mapValues(typography.fontMetrics, String),
    textSize,
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
    linkDecoration: 'underline',
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
