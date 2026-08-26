import { style, styleVariants } from '@vanilla-extract/css';
import { atoms } from 'braid-design-system/css';
import { palette } from 'braid-src/lib/color/palette';
import { colorModeStyle } from 'braid-src/lib/css/colorModeStyle';
import { vars } from 'braid-src/lib/themes/vars.css';
import { darken } from 'polished';

const colorTransition = '250ms ease';

const restFills = {
  light: palette.indigo['400'],
  accent: palette.indigo['500'],
  navy: palette.grey['900'],
  navyMid: palette.grey['800'],
} as const;

const hoverFills = {
  light: palette.seekPink['300'],
  accent: palette.seekPink['500'],
  navy: palette.seekBlue['700'],
  navyMid: palette.seekBlue['600'],
} as const;

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

export const mediaBackground = styleVariants({
  brandAccent: {
    backgroundColor: palette.grey['200'],
    transition: `background-color ${colorTransition}`,
    selectors: {
      [hoveredMedia]: {
        backgroundColor: palette.seekBlue['700'],
      },
    },
  },
  brandAccentSoftActive: {
    backgroundColor: darken(0.025, palette.grey['100']),
    transition: `background-color ${colorTransition}`,
    selectors: {
      [hoveredMedia]: {
        backgroundColor: darken(0.05, palette.seekPink['50']),
      },
    },
  },
  formAccent: {
    backgroundColor: palette.indigo['600'],
    transition: `background-color ${colorTransition}`,
    selectors: {
      [hoveredMedia]: {
        backgroundColor: palette.seekBlueLight['700'],
      },
    },
  },
});

export const illustration = style({
  width: '80%',
  height: '80%',
});

const hoveredFill = `${linkOverlay}:hover + ${card} ${media} &, ${linkOverlay}:focus-visible + ${card} ${media} &`;

export const fillLight = style({
  fill: restFills.light,
  transition: `fill ${colorTransition}`,
  selectors: {
    [hoveredFill]: {
      fill: hoverFills.light,
    },
  },
});

export const fillAccent = style({
  fill: restFills.accent,
  transition: `fill ${colorTransition}`,
  selectors: {
    [hoveredFill]: {
      fill: hoverFills.accent,
    },
  },
});

export const fillNavy = style({
  fill: restFills.navy,
  transition: `fill ${colorTransition}`,
  selectors: {
    [hoveredFill]: {
      fill: hoverFills.navy,
    },
  },
});

export const fillNavyMid = style({
  fill: restFills.navyMid,
  transition: `fill ${colorTransition}`,
  selectors: {
    [hoveredFill]: {
      fill: hoverFills.navyMid,
    },
  },
});

export const fillFormAccent = style({
  fill: restFills.navy,
  transition: `fill ${colorTransition}`,
  selectors: {
    [hoveredFill]: {
      fill: palette.seekBlueLight['700'],
    },
  },
});
