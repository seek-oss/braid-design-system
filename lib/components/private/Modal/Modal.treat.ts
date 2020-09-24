import { style, styleMap } from 'sku/treat';
import { externalGutter } from './ModalExternalGutter';
import { TreatTheme, TextBreakpoint } from '../../../themes/makeBraidTheme';

export const backdrop = style({
  background: 'rgba(0, 0, 0, .4)',
});

export const entrance = styleMap((theme) => ({
  center: {
    '@media': {
      'not screen and (prefers-reduced-motion)': {
        transform: 'scale(.8)',
      },
    },
  },
  right: theme.utils.responsiveStyle({
    mobile: {
      // transform: 'translateX(100%)',
      transform: 'scale(.8)',
      opacity: 0,
    },
    tablet: {
      transform: 'translateX(4%)',
      // opacity: 0,
    },
  }),
}));

export const exit = styleMap((theme) => ({
  right: theme.utils.responsiveStyle({
    mobile: {
      opacity: 0,
    },
    tablet: {
      transform: 'translateX(4%)',
      // opacity: 0,
    },
  }),
}));

export const slideTransition = style((theme) =>
  theme.utils.responsiveStyle({
    mobile: {
      // transition: 'transform .6s cubic-bezier(0.4, 0, 0, 1)',
      transition:
        'transform .2s cubic-bezier(0.4, 0, 0, 1), opacity .2s cubic-bezier(0.4, 0, 0, 1)',
    },
    tablet: {
      transition:
        'transform .2s cubic-bezier(0.4, 0, 0, 1), opacity .2s cubic-bezier(0.4, 0, 0, 1)',
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

export const heading = style({
  selectors: {
    ':focus &': {
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
