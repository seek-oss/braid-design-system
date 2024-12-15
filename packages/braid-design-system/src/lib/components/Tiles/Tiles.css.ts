import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { responsiveStyle } from '../../css/responsiveStyle';

const columns = createVar();
export const mobileColumnsVar = createVar();
export const tabletColumnsVar = createVar();
export const desktopColumnsVar = createVar();
export const wideColumnsVar = createVar();

export const tiles = style([
  {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  },
  responsiveStyle({
    mobile: {
      vars: {
        [columns]: mobileColumnsVar,
      },
    },
    tablet: {
      vars: {
        [columns]: tabletColumnsVar,
      },
    },
    desktop: {
      vars: {
        [columns]: desktopColumnsVar,
      },
    },
    wide: {
      vars: {
        [columns]: wideColumnsVar,
      },
    },
  }),
]);

globalStyle(`${tiles} > *`, {
  minWidth: 0,
});
