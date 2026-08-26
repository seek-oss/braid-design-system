import { style, styleVariants } from '@vanilla-extract/css';
import { atoms, responsiveStyle } from 'braid-design-system/css';
import { colorModeSelectors } from 'braid-src/lib/css/atoms/sprinkles.css';
import { colorModeStyle } from 'braid-src/lib/css/colorModeStyle';
import { vars } from 'braid-src/lib/themes/vars.css';

import {
  type AdaptiveColor,
  illustrationCanvas,
  illustrationFills,
} from './illustrationPalette';

const colorTransition = '250ms ease';

export const inColorMode = {
  light: colorModeSelectors.light.replace(' &', ''),
  dark: colorModeSelectors.dark.replace(' &', ''),
} as const;

const inMode = (mode: keyof typeof inColorMode, selector: string) =>
  `${inColorMode[mode]} ${selector.replaceAll(', ', `, ${inColorMode[mode]} `)}`;

const adaptiveStyle = (
  property: 'backgroundColor' | 'fill' | 'color',
  rest: AdaptiveColor,
  hover: AdaptiveColor,
  hoverSelector: string,
) => {
  const restMode = colorModeStyle({
    lightMode: { [property]: rest.light },
    darkMode: { [property]: rest.dark },
  });

  return {
    ...restMode,
    selectors: {
      ...restMode.selectors,
      [inMode('light', hoverSelector)]: { [property]: hover.light },
      [inMode('dark', hoverSelector)]: { [property]: hover.dark },
    },
  };
};

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
      transition: 'box-shadow 150ms ease',
    },
    selectors: {
      [`${inColorMode.light} &::after`]: {
        boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.neutralLight}`,
      },
      [`${inColorMode.dark} &::after`]: {
        boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.neutral}`,
      },
      [`${inMode('light', `${linkOverlay}:hover + &::after, ${linkOverlay}:focus-visible + &::after`)}`]:
        {
          boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.neutral}`,
        },
      [`${inMode('dark', `${linkOverlay}:hover + &::after, ${linkOverlay}:focus-visible + &::after`)}`]:
        {
          boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.neutralLight}`,
        },
    },
  },
]);

const mediaSlot = style({});

export const media = style([
  mediaSlot,
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

export const compactLayout = style(
  responsiveStyle({
    mobile: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    tablet: {
      flexDirection: 'row',
    },
  }),
);

export const mediaCompact = style([
  mediaSlot,
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }),
  responsiveStyle({
    mobile: {
      width: '100%',
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

const hoveredMedia = `${linkOverlay}:hover + ${card} &, ${linkOverlay}:focus-visible + ${card} &`;

export const mediaCanvas = style({
  transition: `background-color ${colorTransition}`,
  ...adaptiveStyle(
    'backgroundColor',
    illustrationCanvas.rest,
    illustrationCanvas.hover,
    hoveredMedia,
  ),
});

export const illustration = style({
  width: '80%',
  height: '80%',
});

const hoveredFill = `${linkOverlay}:hover + ${card} ${mediaSlot} &, ${linkOverlay}:focus-visible + ${card} ${mediaSlot} &`;

export const fills = styleVariants(illustrationFills, ({ rest, hover }) => ({
  transition: `fill ${colorTransition}`,
  ...adaptiveStyle('fill', rest, hover, hoveredFill),
}));
