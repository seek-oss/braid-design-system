import { style } from 'sku/treat';

export const column = style({
  minWidth: 0,
  overflow: 'hidden',
});

export const fit = style({ flexShrink: 0 });
const grow = style({ flexGrow: 1 });

const getSizeStyle = (size: number, debugIdent: string) => [
  grow,
  style({ flexBasis: `${size * 100}%` }, debugIdent),
];

export const half = getSizeStyle(1 / 2, 'half');
export const third = getSizeStyle(1 / 3, 'third');
export const twoThirds = getSizeStyle(2 / 3, 'twoThirds');
export const quarter = getSizeStyle(1 / 4, 'quarter');
export const threeQuarters = getSizeStyle(3 / 4, 'threeQuarters');
export const fifth = getSizeStyle(1 / 5, 'fifth');
export const twoFifths = getSizeStyle(2 / 5, 'twoFifths');
export const threeFifths = getSizeStyle(3 / 5, 'threeFifths');
export const fourFifths = getSizeStyle(4 / 5, 'fourFifths');
