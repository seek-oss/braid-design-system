import './treatTheme.d';
import { createTheme } from 'sku/treat';
import mapValues from 'lodash/mapValues';
import values from 'lodash/values';
import { FontMetrics, getCapHeight } from '@capsizecss/core';

import { breakpoints } from '../css/breakpoints';
import { makeThemeUtils } from './themeUtils';
import { isLight } from '../utils';
import { BraidTokens, TextDefinition } from './tokenType';

const fontSizeToCapHeight = (
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
          fontSizeToCapHeight(definition, fontMetrics),
        ),
      },
    },
    text: {
      ...text,
      ...mapValues(text, (definition) =>
        fontSizeToCapHeight(definition, fontMetrics),
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

const makeRuntimeTokens = (tokens: TreatTheme) => ({
  name: tokens.name,
  displayName: tokens.displayName,
  background: {
    lightMode: tokens.color.background.body,
    darkMode: tokens.color.background.bodyDark,
  },
  webFonts: makeWebFonts(tokens),
  space: {
    grid: tokens.grid,
    space: tokens.space,
  },
  color: tokens.color,
  backgroundLightness: mapValues(
    tokens.color.background,
    (background, name) => {
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
});

export function makeBraidTheme(braidTokens: BraidTokens) {
  const decoratedTokens = decorateTokens(braidTokens);

  return {
    treatTheme: createTheme(decoratedTokens),
    ...makeRuntimeTokens(decoratedTokens),
  };
}

export type BraidTheme = ReturnType<typeof makeBraidTheme>;
