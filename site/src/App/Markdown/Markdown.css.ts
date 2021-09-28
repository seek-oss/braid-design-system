import { style } from '@vanilla-extract/css';
import { createTextStyle } from '@capsizecss/vanilla-extract';
import { vars } from '../../../../lib/themes/vars.css';

const toCapsizeValues = ({
  fontSize,
  lineHeight,
  capsizeTrims,
}: typeof vars.textSize.standard.mobile) =>
  ({
    fontSize,
    lineHeight,
    ...capsizeTrims,
  } as Parameters<typeof createTextStyle>[0]);

// Recreating text styles to get around Text in Text
// within markdown renderer
export const standardText = style([
  style({
    fontFamily: vars.fontFamily,
    fontWeight: vars.textWeight.regular,
    color: 'inherit',
  }),
  createTextStyle(toCapsizeValues(vars.textSize.standard.mobile), {
    '@media': {
      'screen and (min-width: 768px)': toCapsizeValues(
        vars.textSize.standard.tablet,
      ),
    },
  }),
]);
