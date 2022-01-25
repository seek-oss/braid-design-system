import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';

export const backdrop = style({
  width: '100vw',
  height: '100vh',
});

export const menuIsClosed = style({
  transform: `translateY(${calc(vars.grid).negate().multiply(2)})`,
  visibility: 'hidden',
});
