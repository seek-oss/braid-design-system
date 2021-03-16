import { style } from '@mattsjones/css-core';
import { add, divide, multiply } from '@mattsjones/css-utils';
import { themeVars } from '../../themes/themeVars.css';

export const constants = {
  textSize: 'standard',
  paddingY: 'xxsmall',
} as const;

const calculateBorderRadius = () => {
  const textHeight =
    themeVars.typography.text[constants.textSize].mobile.leading;
  const paddingHeight = multiply(themeVars.space[constants.paddingY], 2);
  const height = add(textHeight, paddingHeight);
  return divide(height, 2);
};

export const borderRadius = style({
  borderRadius: calculateBorderRadius(),
});
