import {
  createThemeContract,
  createVar,
  fallbackVar,
  style,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const font = createThemeContract({
  ascent: null,
  descent: null,
  unitsPerEm: null,
  capHeight: null,
  lineGap: null,
});

export const fontSize = createVar();
export const capHeight = createVar();
export const leading = createVar();
export const lineGap = createVar();

const absoluteDescent = calc.negate(font.descent);
const capHeightScale = calc.divide(font.capHeight, font.unitsPerEm);
const descentScale = calc.divide(absoluteDescent, font.unitsPerEm);
const ascentScale = calc.divide(font.ascent, font.unitsPerEm);
const lineGapScale = calc.divide(font.lineGap, font.unitsPerEm);
const contentArea = calc.add(font.ascent, font.lineGap, absoluteDescent);
const lineHeightScale = calc.divide(contentArea, font.unitsPerEm);

const resolvedFontSize = fallbackVar(
  fontSize,
  calc.divide(capHeight, capHeightScale),
);
const resolvedCapHeight = fallbackVar(
  capHeight,
  calc.multiply(fontSize, capHeightScale),
);
const resolvedLineHeight = fallbackVar(
  leading,
  calc.add(resolvedCapHeight, lineGap).toString(),
);

const lineHeightNormal = calc.multiply(lineHeightScale, resolvedFontSize);
const specifiedLineHeightOffset = calc(lineHeightNormal)
  .subtract(resolvedLineHeight)
  .divide(2)
  .divide(resolvedFontSize)
  .multiply(resolvedLineHeight)
  .divide(resolvedLineHeight)
  .toString();

const capHeightTrim = calc(ascentScale)
  .subtract(capHeightScale)
  .add(calc(lineGapScale).divide(2).toString())
  .subtract(specifiedLineHeightOffset)
  .multiply('-1em')
  .toString();

const baselineTrim = calc(descentScale)
  .add(calc(lineGapScale).divide(2).toString())
  .subtract(specifiedLineHeightOffset)
  .multiply('-1em')
  .toString();

export const capsize = style({
  '::before': {
    content: '""',
    marginBottom: capHeightTrim,
    display: 'table',
  },
  '::after': {
    content: '""',
    marginTop: baselineTrim,
    display: 'table',
  },
  fontSize: calc(resolvedFontSize).multiply('1px').toString(),
  lineHeight: calc(resolvedLineHeight).multiply('1px').toString(),
});
