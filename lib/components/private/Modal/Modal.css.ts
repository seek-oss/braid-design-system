import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { externalGutter } from './ModalExternalGutter';
import { responsiveStyle } from '../../../css/responsiveStyle';
import { vars } from '../../../themes/vars.css';
import { atoms } from '../../../css/atoms/atoms';

export const fixedStackingContext = atoms({
  position: 'fixed',
  zIndex: 'modal',
});

export const resetStackingContext = atoms({ position: 'relative', zIndex: 0 });

export const backdrop = style({
  background: 'rgba(0, 0, 0, .4)',
});

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
        mobile: { opacity: 1, transform: 'translateX(140%)' },
        tablet: { opacity: 0, transform: 'translateX(40px)' },
      }),
    ),
  ],
  left: [
    reducedMotion,
    style(
      responsiveStyle({
        mobile: { opacity: 1, transform: 'translateX(-140%)' },
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
        mobile: { opacity: 1, transform: 'translateX(140%)' },
        tablet: { opacity: 0, transform: 'translateX(10px)' },
      }),
    ),
  ],
  left: [
    reducedMotion,
    style(
      responsiveStyle({
        mobile: { opacity: 1, transform: 'translateX(-140%)' },
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

export const modalContainer = style({
  maxHeight: '100vh',
  maxWidth: '100vw',
});

export const pointerEventsAll = style({
  pointerEvents: 'all',
});

const viewportHeight = style({
  maxHeight: '100vh',
});

export const maxSize = {
  center: style(
    responsiveStyle({
      mobile: {
        maxHeight: calc.subtract(
          '100vh',
          calc.multiply(vars.space[externalGutter[0]], 2),
        ),
        maxWidth: calc.subtract(
          '100vw',
          calc.multiply(vars.space[externalGutter[0]], 2),
        ),
      },
      tablet: {
        maxHeight: calc.subtract(
          '100vh',
          calc.multiply(vars.space[externalGutter[1]], 2),
        ),
        maxWidth: calc.subtract(
          '100vw',
          calc.multiply(vars.space[externalGutter[1]], 2),
        ),
      },
      desktop: {
        maxHeight: calc.subtract(
          '100vh',
          calc.multiply(vars.space[externalGutter[2]], 2),
        ),
        maxWidth: calc.subtract(
          '100vw',
          calc.multiply(vars.space[externalGutter[2]], 2),
        ),
      },
    }),
  ),
  right: viewportHeight,
  left: viewportHeight,
};

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
