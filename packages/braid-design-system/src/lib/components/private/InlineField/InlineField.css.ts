import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { colorModeStyle } from '../../../css/colorModeStyle';
import { responsiveStyle } from '../../../css/responsiveStyle';
import { debugTouchable } from '../touchable/debugTouchable';
import { hitArea } from '../touchable/hitArea';

import { vars } from '../../../themes/vars.css';

const sizes = {
  standard: 'standard',
  small: 'small',
} as const;

export type Size = keyof typeof sizes;

const fieldSize = createVar();
const labelCapHeight = createVar();
export const sizeVars = styleVariants(sizes, (size) =>
  responsiveStyle({
    mobile: {
      vars: {
        [fieldSize]: vars.inlineFieldSize[size],
        [labelCapHeight]: vars.textSize[size].mobile.capHeight,
      },
    },
    tablet: {
      vars: {
        [labelCapHeight]: vars.textSize[size].tablet.capHeight,
      },
    },
  }),
);

const hitAreaOffset = calc(hitArea)
  .subtract(fieldSize)
  .divide(2)
  .negate()
  .toString();
export const realField = style([
  {
    width: hitArea,
    height: hitArea,
    top: hitAreaOffset,
    left: hitAreaOffset,
  },
  debugTouchable(),
]);

export const fakeField = style({
  height: fieldSize,
  width: fieldSize,
  selectors: {
    // Overrides `surface` background of checked checkbox
    // to make `formAccent` edge crisp on dark background
    [`${realField}[type="checkbox"]:checked ~ &`]: {
      background: 'transparent',
    },
  },
});

export const labelOffset = style({
  paddingTop: calc(fieldSize).subtract(labelCapHeight).divide(2).toString(),
});
export const isMixed = style({});

export const children = style({
  selectors: {
    [`${realField}:checked ~ * &,
      ${realField}${isMixed} ~ * &`]: {
      display: 'block',
      zIndex: 1,
    },
  },
});

export const selected = style({
  selectors: {
    [`${realField}:checked + ${fakeField} > &,
      ${realField}${isMixed} + ${fakeField} > &`]: {
      opacity: 1,
    },
  },
});

export const hideBorderOnDarkBackgroundInLightMode = style(
  colorModeStyle({
    lightMode: {
      opacity: 0,
    },
  }),
);

export const focusOverlay = style({
  selectors: {
    [`${realField}:focus + ${fakeField} > &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${realField}:hover:not(:checked):not(${isMixed}):not(:disabled) + ${fakeField} > &,
      ${realField}:focus:not(${isMixed}) + ${fakeField} > &`]: {
      opacity: 1,
    },
  },
});

export const indicator = style({
  selectors: {
    [`${hoverOverlay} > &`]: {
      opacity: 0.2,
    },
  },
});

export const disabledRadioIndicator = style([
  {
    opacity: 0.3,
  },
  colorModeStyle({
    lightMode: {
      backgroundColor: vars.foregroundColor.secondary,
    },
    darkMode: {
      backgroundColor: vars.foregroundColor.secondaryInverted,
    },
  }),
]);

const checkboxScale = style({
  transform: 'scale(0.85)',
  selectors: {
    [`${realField}:active + ${fakeField} > * > &`]: {
      transform: 'scale(0.75)',
    },
  },
});

export const checkboxIndicator = [indicator, checkboxScale];

const radioScale = style({
  transform: 'scale(0.6)',
  selectors: {
    [`${realField}:active + ${fakeField} > * > &`]: {
      transform: 'scale(0.5)',
    },
  },
});

export const radioIndicator = [indicator, radioScale];
