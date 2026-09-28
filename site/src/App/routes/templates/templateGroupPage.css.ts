import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { atoms, colorModeStyle } from 'braid-design-system/css';
import { vars } from 'braid-src/lib/themes/vars.css';

import { canvas, adaptiveCanvas } from '../../ThemeSetting/ThemedExample.css';

// Logical render dimensions of the scaled stage
export const STAGE_WIDTH = 960;

export const tileLinkOverlay = style([
  atoms({
    reset: 'a',
    position: 'absolute',
    inset: 0,
    display: 'block',
    borderRadius: 'large',
  }),
  {
    outlineOffset: vars.space.xxsmall,
  },
]);

const cardBorder = createVar();
const cardBorderHover = createVar();
export const tilePreview = style([
  canvas,
  adaptiveCanvas,
  colorModeStyle({
    lightMode: {
      vars: {
        [cardBorder]: vars.borderColor.neutralLight,
        [cardBorderHover]: vars.borderColor.neutral,
      },
    },
    darkMode: {
      vars: {
        [cardBorder]: vars.borderColor.neutral,
        [cardBorderHover]: vars.borderColor.neutralLight,
      },
    },
  }),
  atoms({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 'large',
    padding: 'gutter',
  }),
  {
    aspectRatio: '8 / 5',
    transition: 'box-shadow 150ms ease',
    boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${cardBorder}`,
    selectors: {
      [`${tileLinkOverlay}:hover ~ * > &`]: {
        boxShadow: `inset 0 0 0 ${vars.borderWidth.large} ${cardBorderHover}`,
      },
    },
  },
]);

export const scaleVar = createVar();
export const stageWidthVar = createVar();
export const tileStage = style([
  atoms({
    position: 'absolute',
    pointerEvents: 'none',
    userSelect: 'none',
    transition: 'fast',
  }),
  {
    vars: {
      [scaleVar]: '',
      [stageWidthVar]: `${STAGE_WIDTH}px`,
    },
    top: '50%',
    left: '50%',
    width: stageWidthVar,
    maxHeight: calc(scaleVar).multiply('1000%').toString(),
    transformOrigin: 'center',
    transform: `translate(-50%, -50%) scale(${scaleVar})`,
    transitionProperty: 'opacity', // Only transition opacity to avoid zooming effect
  },
]);
