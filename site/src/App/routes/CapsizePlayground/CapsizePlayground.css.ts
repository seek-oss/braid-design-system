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
  font,
} from '../../../../../lib/hooks/typography/capsize.css';

const highlight = 'rgba(240, 85, 243, .3)';
const textRhythm = fallbackVar(
  capHeight,
  calc(fontSize).multiply(font.capHeight).divide(font.unitsPerEm).toString(),
);

const firstColor = createVar();
const secondColor = createVar();
const step1 = createVar();
const step2 = createVar();
const highlightGradient = style({
  backgroundImage: `linear-gradient(180deg,
    ${firstColor} ${calc.multiply(step1, '1px')},
    ${secondColor} ${calc.multiply(step1, '1px')},
    ${secondColor} ${calc.multiply(step2, '1px')}
  )`,
  backgroundSize: `100% ${calc.multiply(step2, '1px')}`,
});

export const highlightLeading = composeStyles(
  highlightGradient,
  style({
    vars: {
      [step1]: leading,
      [step2]: calc.multiply(leading, 2),
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
      [step2]: calc.add(textRhythm, lineGap),
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
      [step2]: calc.add(
        capHeight,
        fallbackVar(lineGap, calc.subtract(leading, capHeight)),
      ),
      [firstColor]: highlight,
      [secondColor]: 'transparent',
    },
  }),
);

export const roboto = composeStyles(
  style({
    fontFamily: 'Roboto',
  }),
  createTheme(font, {
    capHeight: '1456',
    ascent: '1900',
    descent: '-500',
    lineGap: '0',
    unitsPerEm: '2048',
  }),
);
