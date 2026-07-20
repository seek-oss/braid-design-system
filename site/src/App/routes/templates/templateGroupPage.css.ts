import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { atoms } from 'braid-design-system/css';
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

export const tilePreview = style([
  canvas,
  adaptiveCanvas,
  atoms({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 'large',
    padding: 'gutter',
    boxShadow: 'borderNeutralLight',
  }),
  {
    aspectRatio: '8 / 5',
    transition: 'box-shadow 150ms ease',
    selectors: {
      [`${tileLinkOverlay}:hover ~ * > &`]: {
        boxShadow: `inset 0 0 0 2px ${vars.borderColor.neutral}`,
      },
    },
  },
]);

export const scaleVar = createVar();
export const tileStage = style([
  atoms({
    position: 'absolute',
    pointerEvents: 'none',
    userSelect: 'none',
    transition: 'fast',
    overflow: 'hidden',
  }),
  {
    vars: {
      [scaleVar]: '',
    },
    top: '50%',
    left: '50%',
    width: STAGE_WIDTH,
    maxHeight: calc(scaleVar).multiply('1000%').toString(),
    transformOrigin: 'center',
    transform: `translate(-50%, -50%) scale(${scaleVar})`,
    transitionProperty: 'opacity', // Only transition opacity to avoid zooming effect
  },
]);
