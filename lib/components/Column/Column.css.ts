import { style, styleVariants } from '@vanilla-extract/css';

export const column = style({});

export const columnContent = style({
  selectors: {
    [`${column}:first-child > &`]: {
      paddingTop: 0,
    },
  },
});

const getSizeStyle = (scale: number) => ({
  flex: `0 0 ${scale * 100}%`,
});

export const width = styleVariants({
  '1/2': getSizeStyle(1 / 2),
  '1/3': getSizeStyle(1 / 3),
  '2/3': getSizeStyle(2 / 3),
  '1/4': getSizeStyle(1 / 4),
  '3/4': getSizeStyle(3 / 4),
  '1/5': getSizeStyle(1 / 5),
  '2/5': getSizeStyle(2 / 5),
  '3/5': getSizeStyle(3 / 5),
  '4/5': getSizeStyle(4 / 5),
});
