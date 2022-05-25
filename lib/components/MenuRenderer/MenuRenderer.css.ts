import {
  createVar,
  fallbackVar,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const backdrop = style({
  width: '100vw',
  height: '100vh',
});

export const menuIsClosed = style({
  visibility: 'hidden',
});

const widthVar = createVar();
const baseWidth = style({
  width: calc(widthVar).divide(4).toString(),
});

const { small, medium, large } = vars.contentWidth;
export const width = styleVariants({ small, medium, large }, (w) => [
  baseWidth,
  { vars: { [widthVar]: w } },
]);

export const placementBottom = style({
  bottom: '100%',
});

const calcMenuHeight = (numSuggestions: number) =>
  calc(vars.touchableSize)
    .multiply(numSuggestions)
    .add(vars.space.xxsmall)
    .toString();

export const maxHeight = style(
  responsiveStyle({
    mobile: {
      maxHeight: calcMenuHeight(6),
      overflowY: 'auto',
    },
    tablet: {
      maxHeight: calcMenuHeight(8),
    },
  }),
);

const horizontalOffset = createVar();
const verticalOffset = createVar();
const entranceOffset = calc(vars.grid).multiply(4).negate();

export const menuPosition = style({
  transform: `translate(${fallbackVar(horizontalOffset, '0%')}, ${fallbackVar(
    verticalOffset,
    '0%',
  )})`,
  selectors: {
    [`${menuIsClosed}&`]: {
      vars: {
        [verticalOffset]: entranceOffset.toString(),
      },
    },
  },
});

export const placementTop = style({
  vars: {
    [verticalOffset]: '-100%',
  },
  selectors: {
    [`${menuIsClosed}&`]: {
      vars: {
        [verticalOffset]: calc('-100%').subtract(entranceOffset).toString(),
      },
    },
  },
});

export const alignRight = style({
  vars: {
    [horizontalOffset]: '-100%',
  },
});
