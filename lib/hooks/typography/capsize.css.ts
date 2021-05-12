import { createVar, fallbackVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const fontSize = createVar();
export const leading = createVar();
export const capHeight = createVar();

export const metricsAscent = createVar();
export const metricsDescent = createVar();
export const metricsUnitsPerEm = createVar();
export const metricsCapHeight = createVar();
export const metricsLineGap = createVar();

const absoluteDescent = calc.negate(metricsDescent);
const capHeightScale = calc.divide(metricsCapHeight, metricsUnitsPerEm);
const descentScale = calc.divide(absoluteDescent, metricsUnitsPerEm);
const ascentScale = calc.divide(metricsAscent, metricsUnitsPerEm);
const lineGapScale = calc.divide(metricsLineGap, metricsUnitsPerEm);
const contentArea = calc.add(metricsAscent, metricsLineGap, absoluteDescent);
const lineHeightScale = calc.divide(contentArea, metricsUnitsPerEm);
const resolvedFontSize = fallbackVar(
  fontSize,
  calc.divide(capHeight, capHeightScale),
);

const lineHeightNormal = calc.multiply(lineHeightScale, resolvedFontSize);
const specifiedLineHeightOffset = calc(lineHeightNormal)
  .subtract(leading)
  .divide(2)
  .divide(resolvedFontSize)
  .multiply(leading)
  .divide(leading)
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

// const debugVars = {
//   ['--absoluteDescent']: calc.negate(metricsDescent),
//   ['--capHeightScale']: calc.divide(metricsCapHeight, metricsUnitsPerEm),
//   ['--descentScale']: calc.divide('var(--absoluteDescent)', metricsUnitsPerEm),
//   ['--ascentScale']: calc.divide(metricsAscent, metricsUnitsPerEm),
//   ['--lineGapScale']: calc.divide(metricsLineGap, metricsUnitsPerEm),
//   ['--contentArea']: calc.add(
//     metricsAscent,
//     metricsLineGap,
//     'var(--absoluteDescent)',
//   ),
//   ['--lineHeightScale']: calc.divide('var(--contentArea)', metricsUnitsPerEm),

//   ['--resolvedFontSize']: fallbackVar(
//     fontSize,
//     calc.divide(capHeight, 'var(--capHeightScale)'),
//   ),
//   ['--lineHeightNormal']: calc.multiply(
//     'var(--lineHeightScale)',
//     'var(--resolvedFontSize)',
//   ),
//   ['--specifiedLineHeightOffset']: calc('var(--lineHeightNormal)')
//     .subtract(leading)
//     .divide(2)
//     .divide('var(--resolvedFontSize)')
//     .multiply(leading)
//     .divide(leading)
//     .toString(),

//   ['--capHeightTrim']: calc('var(--ascentScale)')
//     .subtract('var(--capHeightScale)')
//     .add(calc('var(--lineGapScale)').divide(2).toString())
//     .subtract('var(--specifiedLineHeightOffset, 0)')
//     .multiply('-1em')
//     .toString(),

//   ['--baselineTrim']: calc('var(--descentScale)')
//     .add(calc('var(--lineGapScale)').divide(2).toString())
//     .subtract('var(--specifiedLineHeightOffset, 0)')
//     .multiply('-1em')
//     .toString(),
// };

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
  lineHeight: calc(leading).multiply('1px').toString(),
});
