import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { externalGutter } from './ModalExternalGutter';
import { responsiveStyle } from '../../../css/responsiveStyle';
import { vars } from '../../../themes/vars.css';
import { atoms } from '../../../css/atoms/atoms';
import { colorModeStyle } from '../../../css/colorModeStyle';

export const fixedStackingContext = atoms({
  position: 'fixed',
  zIndex: 'modal',
});

export const resetStackingContext = atoms({ position: 'relative', zIndex: 0 });

export const backdrop = style(
  colorModeStyle({
    lightMode: {
      background: '#000',
      opacity: 0.4,
    },
    darkMode: {
      background: '#000',
      opacity: 0.6,
    },
  }),
);

const reducedMotion = style({
  '@media': {
    'screen and (prefers-reduced-motion)': {
      transform: 'none !important',
    },
  },
});

export const entrance = {
  center: [
    reducedMotion,
    style({
      transform: 'scale(.8)',
    }),
  ],
  right: [
    reducedMotion,
    style(
      responsiveStyle({
        mobile: { opacity: 1, transform: 'translateX(110%)' },
        tablet: { opacity: 0, transform: 'translateX(40px)' },
      }),
    ),
  ],
  left: [
    reducedMotion,
    style(
      responsiveStyle({
        mobile: { opacity: 1, transform: 'translateX(-110%)' },
        tablet: { opacity: 0, transform: 'translateX(-40px)' },
      }),
    ),
  ],
};

export const exit = {
  right: [
    reducedMotion,
    style(
      responsiveStyle({
        mobile: { opacity: 1, transform: 'translateX(110%)' },
        tablet: { opacity: 0, transform: 'translateX(10px)' },
      }),
    ),
  ],
  left: [
    reducedMotion,
    style(
      responsiveStyle({
        mobile: { opacity: 1, transform: 'translateX(-110%)' },
        tablet: { opacity: 0, transform: 'translateX(-10px)' },
      }),
    ),
  ],
};

const easeOut = 'cubic-bezier(0.4, 0, 0, 1)';
export const horiztontalTransition = style(
  responsiveStyle({
    mobile: {
      transition: `transform .3s ${easeOut}, opacity .3s ${easeOut}`,
    },
    tablet: {
      transition: `transform .175s ${easeOut}, opacity .175s ${easeOut}`,
    },
  }),
);

export const pointerEventsAll = style({
  pointerEvents: 'all',
});

const gutterSizeVar = createVar();
const fullHeightVar = createVar();
const fullWidthVar = createVar();

const viewportHeight = style({
  maxHeight: fullHeightVar,
});

export const maxSize = {
  center: style([
    {
      maxHeight: calc.subtract(fullHeightVar, calc.multiply(gutterSizeVar, 2)),
      maxWidth: calc.subtract(fullWidthVar, calc.multiply(gutterSizeVar, 2)),
    },
    responsiveStyle({
      mobile: {
        vars: {
          [gutterSizeVar]: vars.space[externalGutter.mobile],
        },
      },
      tablet: {
        vars: {
          [gutterSizeVar]: vars.space[externalGutter.tablet],
        },
      },
      desktop: {
        vars: {
          [gutterSizeVar]: vars.space[externalGutter.desktop],
        },
      },
    }),
  ]),
  right: viewportHeight,
  left: viewportHeight,
};

export const modalContainer = style({
  vars: {
    [fullHeightVar]: '100vh',
    [fullWidthVar]: '100vw',
  },
  '@supports': {
    '(height: 1dvh)': {
      vars: {
        [fullHeightVar]: '100dvh',
        [fullWidthVar]: '100dvw',
      },
    },
  },
  maxHeight: fullHeightVar,
  maxWidth: fullWidthVar,
});

export const headingRoot = style({
  overflowWrap: 'break-word',
});
export const headingFocus = style({
  selectors: {
    [`${headingRoot}:focus &`]: {
      opacity: 1,
    },
  },
});

export const closeIconOffset = style({
  top: '-5px',
  right: '-5px',
});
