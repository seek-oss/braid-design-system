import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { externalGutter } from './ModalExternalGutter';
import { TextBreakpoint } from '../../../themes/tokenType';
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

export const closeButtonRoot = style({
  ':active': {
    transform: 'scale(0.9)',
  },
});
export const closeButtonFocus = style({
  selectors: {
    [`${closeButtonRoot}:focus &`]: {
      opacity: 1,
    },
  },
});
export const closeButtonOpacity = style({
  opacity: 0.7,
  selectors: {
    [`${closeButtonRoot}:hover &, ${closeButtonRoot}:focus &`]: {
      opacity: 1,
    },
  },
});

const CLOSE_ICON_GUTTER_RATIO = 0.3;

const calculateIconCrop = (level: '2' | '3', breakpoint: TextBreakpoint) => {
  const size = calc.multiply(
    vars.headingLevel[level][breakpoint].capHeight,
    calc.add(1, CLOSE_ICON_GUTTER_RATIO),
  );
  const offset = calc.divide(calc.multiply(size, CLOSE_ICON_GUTTER_RATIO), 2);
  const nudge = '1px';

  return {
    top: calc.add(calc.negate(offset), nudge),
    right: calc.subtract(calc.negate(offset), nudge),
  };
};

export const cropIconSpace = {
  '2': style(
    responsiveStyle({
      mobile: calculateIconCrop('2', 'mobile'),
      tablet: calculateIconCrop('2', 'tablet'),
    }),
  ),
  '3': style(
    responsiveStyle({
      mobile: calculateIconCrop('3', 'mobile'),
      tablet: calculateIconCrop('3', 'tablet'),
    }),
  ),
};

const calculateCloseIconSize = (
  level: '2' | '3',
  breakpoint: TextBreakpoint,
) => {
  const size = calc.multiply(
    vars.headingLevel[level][breakpoint].capHeight,
    calc.add(1, CLOSE_ICON_GUTTER_RATIO),
  );

  return {
    width: size,
    height: size,
  };
};

export const closeIcon = {
  '2': style(
    responsiveStyle({
      mobile: calculateCloseIconSize('2', 'mobile'),
      tablet: calculateCloseIconSize('2', 'tablet'),
    }),
  ),
  '3': style(
    responsiveStyle({
      mobile: calculateCloseIconSize('3', 'mobile'),
      tablet: calculateCloseIconSize('3', 'tablet'),
    }),
  ),
};
