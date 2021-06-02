import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';

export const constants = {
  textSize: 'standard',
  paddingY: 'xxsmall',
} as const;

const calculateBorderRadius = () => {
  const textHeight = calc.multiply(
    vars.textSize[constants.textSize].mobile.leading,
    '1px',
  );
  const paddingHeight = calc.multiply(vars.space[constants.paddingY], 2);
  const height = calc.add(textHeight, paddingHeight);
  return calc.divide(height, 2);
};

export const borderRadius = style({
  borderRadius: calculateBorderRadius(),
});
