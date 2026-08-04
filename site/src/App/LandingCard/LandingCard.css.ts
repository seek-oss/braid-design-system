import { style } from '@vanilla-extract/css';
import { atoms } from 'braid-design-system/css';
import { colorModeStyle } from 'braid-src/lib/css/colorModeStyle';
import { vars } from 'braid-src/lib/themes/vars.css';

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

export const card = style({
  transition: 'box-shadow 150ms ease',
});

export const media = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'full',
    overflow: 'hidden',
    borderRadius: 'standard',
  }),
  {
    aspectRatio: '960 / 542',
  },
  colorModeStyle({
    lightMode: {
      backgroundColor: vars.backgroundColor.neutralSoft,
    },
    darkMode: {
      backgroundColor: vars.backgroundColor.neutral,
    },
  }),
]);
