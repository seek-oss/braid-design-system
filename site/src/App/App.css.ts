import {
  composeStyles,
  style,
  fallbackVar,
  createVar,
  createTheme,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import {
  capHeight,
  fontSize,
  leading,
  lineGap,
  metricVars,
} from '../../../lib/hooks/typography/capsize.css';

const highlight = 'rgba(0,0,0,0.5)';
const textRhythm = fallbackVar(
  capHeight,
  calc(fontSize)
    .multiply(metricVars.capHeight)
    .divide(metricVars.unitsPerEm)
    .toString(),
);

const firstColor = createVar();
const secondColor = createVar();
const step1 = createVar();
const step2 = createVar();
const highlightGradient = style({
  backgroundImage: `linear-gradient(180deg,
    ${firstColor} ${calc(step1).multiply('1px')},
    ${secondColor} ${calc(step1).multiply('1px')},
    ${secondColor} ${calc(step2).multiply('1px')}
  )`,
  backgroundSize: `100% ${calc(step2).multiply('1px')}`,
});

export const highlightLeading = composeStyles(
  highlightGradient,
  style({
    vars: {
      [step1]: leading,
      [step2]: calc.multiply(leading, 2).toString(),
      [firstColor]: 'transparent',
      [secondColor]: highlight,
    },
  }),
  style({
    backgroundPosition: `0 ${calc(leading)
      .subtract(textRhythm)
      .multiply('-1px')}`,
  }),
);

export const highlightLineGap = composeStyles(
  highlightGradient,
  style({
    vars: {
      [step1]: textRhythm,
      [step2]: calc(textRhythm).add(lineGap).toString(),
      [firstColor]: 'transparent',
      [secondColor]: highlight,
    },
  }),
);

export const highlightCapHeight = composeStyles(
  highlightGradient,
  style({
    vars: {
      [step1]: capHeight,
      [step2]: calc(capHeight)
        .add(fallbackVar(lineGap, calc(leading).subtract(capHeight).toString()))
        .toString(),
      [firstColor]: highlight,
      [secondColor]: 'transparent',
    },
  }),
);

export const roboto = composeStyles(
  style({
    fontFamily: 'Roboto',
  }),
  createTheme(metricVars, {
    capHeight: '1456',
    ascent: '1900',
    descent: '-500',
    lineGap: '0',
    unitsPerEm: '2048',
  }),
);
