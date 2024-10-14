import {
  createVar,
  fallbackVar,
  globalStyle,
  style,
} from '@vanilla-extract/css';
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
        [columns]: fallbackVar(tabletColumnsVar, mobileColumnsVar),
      },
    },
    desktop: {
      vars: {
        [columns]: fallbackVar(
          desktopColumnsVar,
          tabletColumnsVar,
          mobileColumnsVar,
        ),
      },
    },
    wide: {
      vars: {
        [columns]: fallbackVar(
          wideColumnsVar,
          desktopColumnsVar,
          tabletColumnsVar,
          mobileColumnsVar,
        ),
      },
    },
  }),
]);

globalStyle(`${tiles} > *`, {
  minWidth: 0,
});
