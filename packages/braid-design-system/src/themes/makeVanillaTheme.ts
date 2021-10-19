import mapValues from 'lodash/mapValues';
import values from 'lodash/values';
import { precomputeValues } from '@capsizecss/vanilla-extract';
import type { FontMetrics } from '@capsizecss/core';
import { getCapHeight } from '@capsizecss/core';

import type { BraidTokens, TextDefinition } from './tokenType';
import { breakpoints } from '../css/breakpoints';
import { makeThemeUtils } from './themeUtils';
import { isLight } from '../utils';

const oldFontSizeToCapHeight = (
  definition: TextDefinition,
  fontMetrics: FontMetrics,
) => {
  const { mobile, tablet } = definition;

  return {
    mobile: {
      capHeight: getCapHeight({ fontSize: mobile.fontSize, fontMetrics }),
      rows: mobile.rows,
    },
    tablet: {
      capHeight: getCapHeight({ fontSize: tablet.fontSize, fontMetrics }),
      rows: tablet.rows,
    },
  };
};

const normaliseSizingToCapHeight = (typography: BraidTokens['typography']) => {
  const { heading, text, fontMetrics } = typography;

  return {
    ...typography,
    heading: {
      ...heading,
      level: {
        ...mapValues(heading.level, (definition) =>
          oldFontSizeToCapHeight(definition, fontMetrics),
        ),
      },
    },
    text: {
      ...text,
      ...mapValues(text, (definition) =>
        oldFontSizeToCapHeight(definition, fontMetrics),
      ),
    },
  };
};

const decorateTokens = (braidTokens: BraidTokens) => {
  const {
    border,
    color,
    contentWidth,
    displayName,
    grid,
    name,
    shadows,
    space,
    touchableSize,
    transforms,
    transitions,
    typography,
  } = braidTokens;

  const treatTokens = {
    border,
    breakpoint: breakpoints,
    color,
    contentWidth,
    displayName,
    grid,
    name,
    shadows,
    space,
    touchableSize,
    transforms,
    transitions,
    typography: normaliseSizingToCapHeight(typography),
  };

  return {
    ...treatTokens,
    utils: makeThemeUtils(treatTokens),
  };
};

export type TreatTheme = ReturnType<typeof decorateTokens>;

const makeWebFonts = (tokens: TreatTheme) => {
  const name = tokens.typography.webFont;

  if (!name) {
    return [];
  }

  const weights = values(tokens.typography.fontWeight);
  const linkTag = `<link href="https://fonts.googleapis.com/css?family=${encodeURIComponent(
    `${name}:${weights.sort().join(',')}`,
  )}" rel="stylesheet" />`;

  return [{ linkTag }];
};

const makeRuntimeTokens = (braidTokens: BraidTokens) => {
  const tokens = decorateTokens(braidTokens);

  return {
    name: tokens.name,
    displayName: tokens.displayName,
    background: tokens.color.background.body,
    webFonts: makeWebFonts(tokens),
    space: {
      grid: tokens.grid,
      space: tokens.space,
    },
    color: tokens.color,
    backgroundLightness: mapValues(
      tokens.color.background,
      (background, name) => {
        // Manual override to ensure we use inverted neutral text
        // on JobsDB 'brandAccent' background and its variants.
        if (
          tokens.name === 'jobsDb' &&
          /^brandAccent(Active|Hover|$)/.test(name)
        ) {
          return 'dark';
        }

        // This color map is used to ensure that all "hover" and "active"
        // variants are considered as a single set. If we don't do this,
        // colors might flip from light to dark during user interactions.
        // At the time of writing this, this was true of 'formAccent' in
        // the 'seekBusiness' theme, which went from white text to black
        // for 'formAccentHover'.
        const referenceColorMap = {
          brandAccentActive: 'brandAccent',
          brandAccentHover: 'brandAccent',
          formAccentActive: 'formAccent',
          formAccentHover: 'formAccent',
        } as const;

        const referenceColor =
          name in referenceColorMap
            ? tokens.color.background[
                referenceColorMap[name as keyof typeof referenceColorMap]
              ]
            : background;

        if (!referenceColor) {
          throw new Error(
            `Error resolving background lightness for background "${background}" in "${tokens.name}" theme.`,
          );
        }

        return isLight(referenceColor, tokens.color.foreground.neutral)
          ? 'light'
          : 'dark';
      },
    ),
  };
};

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
  } = precomputeValues({
    fontSize: mobile.fontSize,
    leading: mobile.rows * grid,
    fontMetrics,
  });

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    ...tabletTrims
  } = precomputeValues({
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
    focusRingSize: px(tokens.focusRingSize),
    contentWidth: mapValues(tokens.contentWidth, px),
    foregroundColor: foreground,
    backgroundColor: background,
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

  return {
    resolvedTokens,
    runtimeTokens: makeRuntimeTokens(braidTokens),
  };
};
