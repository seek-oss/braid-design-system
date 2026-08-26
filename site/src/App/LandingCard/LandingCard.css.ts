import { style, styleVariants } from '@vanilla-extract/css';
import { atoms } from 'braid-design-system/css';
import { colorModeStyle } from 'braid-src/lib/css/colorModeStyle';
import { vars } from 'braid-src/lib/themes/vars.css';

import {
  illustrationFills,
  illustrationThemes,
} from './illustrationPalette';

const colorTransition = '250ms ease';

export const linkOverlay = style([
  atoms({
    reset: 'a',
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    display: 'block',
    borderRadius: 'large',
  }),
  {
    outlineOffset: vars.space.xxsmall,
  },
]);

export const card = style([
  atoms({
    position: 'relative',
  }),
  {
    '::after': {
      content: '',
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      pointerEvents: 'none',
      boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.neutralLight}`,
      transition: 'box-shadow 150ms ease',
    },
    selectors: {
      [`${linkOverlay}:hover + &::after, ${linkOverlay}:focus-visible + &::after`]:
        {
          boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.neutral}`,
        },
    },
  },
]);

export const media = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'full',
    overflow: 'hidden',
  }),
  {
    aspectRatio: '16/9',
  },
]);

const hoveredMedia = `${linkOverlay}:hover + ${card} &, ${linkOverlay}:focus-visible + ${card} &`;

export const mediaCanvas = style(
  colorModeStyle({
    lightMode: {
      backgroundColor: vars.backgroundColor.neutralSoft,
    },
    darkMode: {
      backgroundColor: vars.backgroundColor.neutral,
    },
  }),
);

export const illustrationTheme = styleVariants(
  illustrationThemes,
  ({ rest, hover }) => ({
    backgroundColor: rest,
    transition: `background-color ${colorTransition}`,
    selectors: {
      [hoveredMedia]: {
        backgroundColor: hover,
      },
    },
  }),
);

export const illustration = style({
  width: '80%',
  height: '80%',
});

const hoveredFill = `${linkOverlay}:hover + ${card} ${media} &, ${linkOverlay}:focus-visible + ${card} ${media} &`;

export const fills = styleVariants(illustrationFills, ({ rest, hover }) => ({
  fill: rest,
  transition: `fill ${colorTransition}`,
  selectors: {
    [hoveredFill]: {
      fill: hover,
    },
  },
}));
