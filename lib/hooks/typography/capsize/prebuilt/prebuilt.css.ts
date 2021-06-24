import { createThemeContract, style } from '@vanilla-extract/css';
import { createCss } from '../core';

export const vars = createThemeContract({
  fontSize: null,
  lineHeight: null,
  capHeightTrim: null,
  baselineTrim: null,
});

export const className = style(
  createCss({
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    capHeightTrim: vars.capHeightTrim,
    baselineTrim: vars.baselineTrim,
  }),
);
