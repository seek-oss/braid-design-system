import { style, styleMap } from 'sku/treat';
import { externalGutter } from './ModalExternalGutter';
import { TreatTheme } from '../../../themes/makeBraidTheme';
import { TextBreakpoint } from './../../../themes/tokenType';

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
    style((theme) =>
      theme.utils.responsiveStyle({
        mobile: { opacity: 1, transform: 'translateX(140%)' },
        tablet: { opacity: 0, transform: 'translateX(40px)' },
      }),
    ),
  ],
};

export const exit = {
  right: [
    reducedMotion,
    style((theme) =>
      theme.utils.responsiveStyle({
        mobile: { opacity: 1, transform: 'translateX(140%)' },
        tablet: { opacity: 0, transform: 'translateX(10px)' },
      }),
    ),
  ],
};

const easeOut = 'cubic-bezier(0.4, 0, 0, 1)';
export const transition = {
  right: style((theme) =>
    theme.utils.responsiveStyle({
      mobile: {
        transition: `transform .3s ${easeOut}, opacity .3s ${easeOut}`,
      },
      tablet: {
        transition: `transform .175s ${easeOut}, opacity .175s ${easeOut}`,
      },
    }),
  ),
};

export const modalContainer = style({
  maxHeight: '100vh',
  maxWidth: '100vw',
});

export const pointerEventsAll = style({
  pointerEvents: 'all',
});

export const maxSize = styleMap(({ utils, space, grid }) => ({
  center: utils.responsiveStyle({
    mobile: {
      maxHeight: `calc(100vh - ${grid * space[externalGutter[0]] * 2}px)`,
      maxWidth: `calc(100vw - ${grid * space[externalGutter[0]] * 2}px)`,
    },
    tablet: {
      maxHeight: `calc(100vh - ${grid * space[externalGutter[1]] * 2}px)`,
      maxWidth: `calc(100vw - ${grid * space[externalGutter[1]] * 2}px)`,
    },
    desktop: {
      maxHeight: `calc(100vh - ${grid * space[externalGutter[2]] * 2}px)`,
      maxWidth: `calc(100vw - ${grid * space[externalGutter[2]] * 2}px)`,
    },
  }),
  right: {
    maxHeight: '100vh',
  },
}));

export const headingRoot = style({});
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

const calculateIconSize = (
  theme: TreatTheme,
  level: '2' | '3',
  breakpoint: TextBreakpoint,
) => {
  const capHeight = theme.typography.heading.level[level][breakpoint].capHeight;
  return capHeight * (1 + CLOSE_ICON_GUTTER_RATIO);
};

export const cropIconSpace = styleMap((theme) => {
  const calculateRules = (level: '2' | '3', breakpoint: TextBreakpoint) => {
    const size = calculateIconSize(theme, level, breakpoint);
    const offset = (size * CLOSE_ICON_GUTTER_RATIO) / 2;
    const nudge = 1;

    return {
      top: -offset + nudge,
      right: -offset - nudge,
    };
  };

  return {
    '2': theme.utils.responsiveStyle({
      mobile: calculateRules('2', 'mobile'),
      tablet: calculateRules('2', 'tablet'),
    }),
    '3': theme.utils.responsiveStyle({
      mobile: calculateRules('3', 'mobile'),
      tablet: calculateRules('3', 'tablet'),
    }),
  };
});

export const negativeMarginRightXSmall = style((theme) => ({
  marginRight: -theme.space.xsmall * theme.grid,
}));

export const closeIcon = styleMap((theme) => {
  const calculateRules = (level: '2' | '3', breakpoint: TextBreakpoint) => {
    const size = calculateIconSize(theme, level, breakpoint);

    return {
      width: size,
      height: size,
    };
  };

  return {
    '2': theme.utils.responsiveStyle({
      mobile: calculateRules('2', 'mobile'),
      tablet: calculateRules('2', 'tablet'),
    }),
    '3': theme.utils.responsiveStyle({
      mobile: calculateRules('3', 'mobile'),
      tablet: calculateRules('3', 'tablet'),
    }),
  };
});
