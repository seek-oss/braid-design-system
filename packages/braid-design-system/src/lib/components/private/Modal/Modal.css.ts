import {
  createVar,
  fallbackVar,
  globalStyle,
  style,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { atoms } from '../../../css/atoms/atoms';
import { colorModeStyle } from '../../../css/colorModeStyle';
import { responsiveStyle } from '../../../css/responsiveStyle';

import { externalGutter } from './ModalExternalGutter';

import { vars } from '../../../themes/vars.css';

export const fixedStackingContext = atoms({
  position: 'fixed',
  zIndex: 'modal',
});

export const resetStackingContext = atoms({ position: 'relative', zIndex: 0 });

export const backdrop = style(
  colorModeStyle({
    lightMode: {
      background: 'rgba(0, 0, 0, 0.4)',
    },
    darkMode: {
      background: 'rgba(0, 0, 0, 0.6)',
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

const rightAnimation = style([
  reducedMotion,
  responsiveStyle({
    mobile: { opacity: 1, transform: 'translateX(110%)' },
    tablet: { opacity: 0, transform: 'translateX(40px)' },
  }),
]);

const leftAnimation = style([
  reducedMotion,
  responsiveStyle({
    mobile: { opacity: 1, transform: 'translateX(-110%)' },
    tablet: { opacity: 0, transform: 'translateX(-40px)' },
  }),
]);

const centerAnimation = style([
  reducedMotion,
  {
    transform: 'scale(.8)',
  },
]);

export const entrance = {
  center: centerAnimation,
  right: rightAnimation,
  left: leftAnimation,
};

export const exit = {
  center: centerAnimation,
  right: rightAnimation,
  left: leftAnimation,
};

const easeOut = 'cubic-bezier(0.4, 0, 0, 1)';
const horizontalTransition = style(
  responsiveStyle({
    mobile: {
      transition: `transform .3s ${easeOut}, opacity .3s ${easeOut}`,
    },
    tablet: {
      transition: `transform .175s ${easeOut}, opacity .175s ${easeOut}`,
    },
  }),
);

export const transition = {
  center: atoms({ transition: 'fast' }),
  right: horizontalTransition,
  left: horizontalTransition,
};

export const pointerEventsAll = style({
  pointerEvents: 'all',
});

const gutterSizeVar = createVar();
const fullHeightVar = createVar();
const fullWidthVar = createVar();

const viewportHeight = style({
  maxHeight: fullHeightVar,
});

export const overrideMaxHeightForScreenshot = createVar();
export const maxSize = {
  center: style([
    {
      maxHeight: fallbackVar(
        overrideMaxHeightForScreenshot,
        calc.subtract(fullHeightVar, calc.multiply(gutterSizeVar, 2)),
      ),
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
  display: 'flex',
  alignItems: 'center',
  maxHeight: fullHeightVar,
  maxWidth: fullWidthVar,
});

export const headingRoot = style({
  overflowWrap: 'break-word',
});

export const closeIconOffset = style({
  top: '-2px',
  right: '-2px',
});

export const maximumHeightForCoverImage = '70vh';

const coverImageMaxHeight = fallbackVar(
  overrideMaxHeightForScreenshot,
  maximumHeightForCoverImage,
);

export const coverImageSideBySide = style([
  atoms({ overflow: 'hidden' }),
  {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'minmax(0, 1fr)',
    height: 'fit-content',
    maxHeight: coverImageMaxHeight,
  },
]);

export const coverImageGridCell = style([
  atoms({
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    height: 'full',
    overflow: 'hidden',
  }),
  {
    minHeight: 0,
  },
]);

export const coverImageVar = createVar();
export const coverImage = style({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: coverImageVar,
});

export const coverImageAspectRatio = style({
  aspectRatio: '16 / 9',
});

export const dialogColumn = style({
  display: 'grid',
  gridTemplateRows: 'minmax(0, 1fr)',
  height: 'fit-content',
});

export const verticalScrollMinHeight = style({
  flex: '1 1 0%',
  minHeight: 0,
  overflow: 'hidden',
});

/**
 * On short viewports the pinned header would leave too little room for the
 * content, so the whole column scrolls instead and the header scrolls away.
 */
const shortViewport = 'screen and (max-height: 480px)';

export const pinnedHeaderColumn = style({
  overflow: 'hidden',
  '@media': {
    [shortViewport]: {
      overflowY: 'auto',
    },
  },
});

export const pinnedHeaderScrollPort = style([
  verticalScrollMinHeight,
  {
    '@media': {
      [shortViewport]: {
        flex: 'none',
        overflow: 'visible',
      },
    },
  },
]);

globalStyle(`${pinnedHeaderColumn} ${pinnedHeaderScrollPort} > *`, {
  '@media': {
    [shortViewport]: {
      overflow: 'visible',
      height: 'auto',
      maxHeight: 'none',
    },
  },
});

export const pinnedHeaderFooter = style({
  '@media': {
    [shortViewport]: {
      position: 'sticky',
      bottom: 0,
    },
  },
});
