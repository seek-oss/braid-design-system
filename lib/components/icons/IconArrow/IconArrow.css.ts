import { style, createVar, fallbackVar } from '@vanilla-extract/css';

export const root = style({
  transition: 'transform 0.3s ease',
  transformOrigin: '50% 50%',
});

export const flip = style({
  transform: 'rotateX(180deg)',
});

const mirrorVar = createVar();
export const rotate = style({
  transform: `scaleX(${fallbackVar(mirrorVar, '1')}) rotate(90deg)`,
});

export const mirror = style({
  vars: {
    [mirrorVar]: '-1',
  },
});
