import { style } from '@vanilla-extract/css';

export const rectangle = style({ height: 50, borderRadius: 3 });

export const square = [style({ width: 50 }), rectangle];
