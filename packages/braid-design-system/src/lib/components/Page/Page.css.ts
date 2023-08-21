import { createVar, fallbackVar, style } from '@vanilla-extract/css';

export const heightLimit = createVar();

export const fullHeight = style({
  minHeight: fallbackVar(heightLimit, '100vh'),
});
