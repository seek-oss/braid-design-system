import {
  createVar,
  globalStyle,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { atoms, responsiveStyle } from 'braid-design-system/css';
import { palette } from 'braid-src/lib/color/palette';
import { colorModeStyle } from 'braid-src/lib/css/colorModeStyle';
import { vars } from 'braid-src/lib/themes/vars.css';

const transitionTiming = '250ms ease';

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

const cardBorder = createVar();
const cardBorderHover = createVar();
export const card = style([
  atoms({
    position: 'relative',
  }),
  colorModeStyle({
    lightMode: {
      vars: {
        [cardBorder]: vars.borderColor.neutralLight,
        [cardBorderHover]: vars.borderColor.neutral,
      },
    },
    darkMode: {
      vars: {
        [cardBorder]: vars.borderColor.neutral,
        [cardBorderHover]: vars.borderColor.neutralLight,
      },
    },
  }),
  {
    '::after': {
      content: '',
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      pointerEvents: 'none',
      boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${cardBorder}`,
      transition: 'box-shadow 150ms ease',
    },
    selectors: {
      [`${linkOverlay}:hover + &::after`]: {
        boxShadow: `inset 0 0 0 ${vars.borderWidth.large} ${cardBorderHover}`,
      },
    },
  },
]);

const mediaSlot = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'full',
    overflow: 'hidden',
  }),
  {},
]);

export const media = style([
  mediaSlot,
  {
    aspectRatio: '16/9',
  },
]);

export const compactLayout = style([
  atoms({
    display: 'flex',
    flexDirection: { mobile: 'column', tablet: 'row' },
    height: 'full',
  }),
]);

export const mediaCompact = style([
  mediaSlot,
  responsiveStyle({
    mobile: {
      aspectRatio: '4 / 1',
    },
    tablet: {
      width: 'auto',
      aspectRatio: 'unset',
      flex: '0 0 30%',
      minWidth: 104,
      maxWidth: 160,
      alignSelf: 'stretch',
    },
  }),
]);

const canvasRestVar = createVar();
const canvasHighlightVar = createVar();
export const canvasHighlight = style([
  colorModeStyle({
    lightMode: {
      vars: {
        [canvasRestVar]: palette.grey['100'],
        [canvasHighlightVar]: palette.seekPink['50'],
      },
    },
    darkMode: {
      vars: {
        [canvasRestVar]: palette.grey['800'],
        [canvasHighlightVar]: palette.grey['700'],
      },
    },
  }),
  {
    transition: `background-color ${transitionTiming}`,
    backgroundColor: canvasRestVar,
    selectors: {
      [`${linkOverlay}:is(:hover, :focus-visible) + ${card} &`]: {
        backgroundColor: canvasHighlightVar,
      },
    },
  },
]);

export const illustration = style({
  width: '80%',
  height: '80%',
});

export const illustrationCompact = style({
  width: '80%',
  height: '80%',
  aspectRatio: '1 / 1',
});

const illustrationFills = {
  accentSoft: {
    light: palette.seekPink['300'],
    dark: palette.seekPink['400'],
  },
  accent: {
    light: palette.seekPink['500'],
    dark: palette.seekPink['300'],
  },
  neutral: {
    light: palette.seekBlue['700'],
    dark: palette.seekBlueLight['300'],
  },
} as const;
export const fills = styleVariants(illustrationFills, ({ light, dark }) => [
  colorModeStyle({
    lightMode: {
      fill: light,
    },
    darkMode: {
      fill: dark,
    },
  }),
  {
    transition: `transform ${transitionTiming}, opacity ${transitionTiming}`,
    transformOrigin: 'center',
    selectors: {
      [`${linkOverlay}:not(:hover, :focus-visible) + ${card} ${mediaSlot} &`]: {
        opacity: 0.7,
        transform: 'scale(.85)',
      },
    },
  },
]);

export const destinationIcon = style([
  canvasHighlight,
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'large',
    padding: 'small',
  }),
  {
    width: 56,
    height: 56,
  },
]);

globalStyle(
  `${linkOverlay}:not(:hover, :focus-visible) + ${card} ${destinationIcon} svg`,
  {
    transform: 'scale(.85)',
  },
);

globalStyle(`${destinationIcon} svg`, {
  transition: `fill ${transitionTiming}, transform ${transitionTiming}`,
});
