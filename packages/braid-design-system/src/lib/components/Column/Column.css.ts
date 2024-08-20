import { style, styleVariants } from '@vanilla-extract/css';
import { atoms } from '../../css/atoms/atoms';

export const fluidColumnStyleRules = {
  flexBasis: '100%',
  flexGrow: 1,
  minWidth: 0,
};

export const fluidColumn = style(fluidColumnStyleRules);

export const fixedColumn = style({});

const getSizeStyle = (scale: number) => [
  fixedColumn,
  {
    flexBasis: `${scale * 100}%`,
  },
  atoms({
    width: 'full',
    flexShrink: 0,
    flexGrow: 0,
    minWidth: 0,
  }),
];

export const fixedWidths = styleVariants({
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

export const contentColumn = style([
  {},
  atoms({
    flexShrink: 0,
    flexGrow: 1,
    minWidth: 0,
  }),
]);
