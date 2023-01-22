import mapValues from 'lodash/mapValues';
import values from 'lodash/values';

import { isLight } from '../utils';
import type { BraidTokens } from './tokenType';

const makeWebFonts = ({ webFont, fontWeight }: BraidTokens['typography']) => {
  if (!webFont) {
    return [];
  }

  const weights = values(fontWeight);
  const linkTag = `<link href="https://fonts.googleapis.com/css?family=${encodeURIComponent(
    `${webFont}:${weights.sort().join(',')}`,
  )}" rel="stylesheet" />`;

  return [{ linkTag }];
};

export const makeRuntimeTokens = (tokens: BraidTokens) => ({
  name: tokens.name,
  displayName: tokens.displayName,
  background: {
    lightMode: tokens.color.background.body,
    darkMode: tokens.color.background.bodyDark,
  },
  webFonts: makeWebFonts(tokens.typography),
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
