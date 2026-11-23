import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { colorModeStyle } from '../../css/colorModeStyle';

import { vars } from '../../themes/vars.css';

export const tab = style({
  selectors: {
    '&::-moz-focus-inner': {
      border: 0,
    },
  },
});

export const hoveredTab = style({
  selectors: {
    [`${tab}:hover &`]: {
      opacity: 1,
    },
  },
});

export const nowrap = style({
  whiteSpace: 'nowrap',
});

export const marginAuto = style({
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const tabFocusRing = style({
  outlineOffset: calc.negate(vars.focusRingSize),
});

export const underlineLeft = createVar();
export const underlineWidth = createVar();

const initialUnderlineWidth = 100;
const underlineRadius = createVar();
const underlineScale = createVar();
export const tabUnderline = style({
  vars: {
    [underlineRadius]: calc(vars.borderRadius.small)
      .divide(underlineScale)
      .toString(),
    [underlineScale]: calc(underlineWidth)
      .divide(initialUnderlineWidth)
      .toString(),
  },
  height: vars.borderWidth.large,
  borderTopLeftRadius: underlineRadius,
  borderTopRightRadius: underlineRadius,
  width: initialUnderlineWidth,
  transformOrigin: '0 0',
  transition: 'transform .3s ease',
  transform: `translateZ(0) translateX(${calc(underlineLeft).multiply(
    '1px',
  )}) scaleX(${underlineScale})`,
});

export const tabUnderlineActiveDarkMode = style(
  colorModeStyle({
    darkMode: {
      background: vars.borderColor.formAccentLight,
    },
  }),
);

export const tabPanel = style({});

export const divider = style({
  height: vars.borderWidth.standard,
});
