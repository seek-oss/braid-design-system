import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { colorModeStyle } from '../../../../../lib/css/colorModeStyle';
import { vars } from '../../../../../lib/themes/vars.css';

export const loader = style({
  opacity: 0.3,
  height: 300,
  width: 300,
  maxHeight: 'min(50vw, 50vh)',
  maxWidth: 'min(50vw, 50vh)',
});

const borderColor = createVar();

export const divider = style({
  borderRight: `${vars.borderWidth.standard} solid ${borderColor}`,
  width: 1,
  height: vars.textSize.standard.mobile.lineHeight,
  ...colorModeStyle({
    lightMode: {
      vars: {
        [borderColor]: vars.borderColor.neutralLight,
      },
    },
    darkMode: {
      vars: {
        [borderColor]: vars.borderColor.neutral,
      },
    },
  }),
});

export const grabCursor = style({
  cursor: 'grab',
});

export const delayPanels = style({
  transitionDelay: '1000ms',
});

export const panel = style({
  boxShadow: '0 2px 10px 1px rgba(28,28,28,.1)',
  minHeight: vars.touchableSize,
});

export const panelBackground = style({
  backdropFilter: 'blur(4px)',
  transition: 'opacity .4s ease',
  selectors: {
    [`${panel}:not(:hover) &`]: {
      opacity: 0.85,
    },
  },
});

export const contentWrapper = style({
  backfaceVisibility: 'hidden',
  transformOrigin: '0px 0px',
  willChange: 'transform',
});

export const animationsOnlyOnHover = style({});

globalStyle(`${animationsOnlyOnHover}:not(:hover) *`, {
  animationDelay: '-0.0001s !important',
  animationDuration: '0s !important',
  animationPlayState: 'paused !important',
});
