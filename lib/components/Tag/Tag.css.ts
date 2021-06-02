import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { themeVars } from '../../themes/themeVars.css';

export const constants = {
  textSize: 'standard',
  paddingY: 'xxsmall',
} as const;

const calculateBorderRadius = () => {
  const textHeight = calc.multiply(
    themeVars.private.textSize[constants.textSize].mobile.leading,
    '1px',
  );
  const paddingHeight = calc.multiply(themeVars.space[constants.paddingY], 2);
  const height = calc.add(textHeight, paddingHeight);
  return calc.divide(height, 2);
};

export const borderRadius = style({
  borderRadius: calculateBorderRadius(),
});
