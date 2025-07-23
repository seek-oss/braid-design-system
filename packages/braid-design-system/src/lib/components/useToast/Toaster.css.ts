import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { gutters } from '../PageBlock/PageBlock';

import { toastWidth } from './consts';

import { vars } from '../../themes/vars.css';

const screenWidth = calc('100vw').subtract(
  calc(2).multiply(vars.space[gutters.mobile]),
);
export const toaster = style({
  justifySelf: 'center',
  bottom: vars.space.xsmall,
  maxWidth: `min(${vars.contentWidth[toastWidth]}, ${screenWidth})`,
});
