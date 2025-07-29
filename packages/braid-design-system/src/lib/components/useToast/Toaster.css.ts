import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { pageBlockGutters } from '../PageBlock/pageBlockGutters';

import { toastWidth } from './consts';

import { vars } from '../../themes/vars.css';

const screenWidth = calc('100vw').subtract(
  calc(2).multiply(vars.space[pageBlockGutters.mobile]),
);
export const toaster = style({
  left: 0,
  right: 0,
  marginInline: 'auto',
  bottom: vars.space.xsmall,
  maxWidth: `min(${vars.contentWidth[toastWidth]}, ${screenWidth})`,
});
