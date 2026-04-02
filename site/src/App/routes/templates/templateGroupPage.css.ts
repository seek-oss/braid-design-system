import { style } from '@vanilla-extract/css';

import { vars } from 'braid-src/lib/themes/vars.css';
import { canvas, adaptiveCanvas } from '../../ThemeSetting/ThemedExample.css';

// Logical render dimensions of the scaled stage
export const STAGE_WIDTH = 960;

export const tileLink = style({
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
});

export const tilePreview = style([
  canvas,
  adaptiveCanvas,
  {
    position: 'relative',
    overflow: 'hidden',
    aspectRatio: '8 / 5',
    borderRadius: vars.borderRadius.large,
    padding: vars.space.gutter,
    transition: 'box-shadow 150ms ease',
    boxShadow: `inset 0 0 0 1px ${vars.borderColor.neutralLight}`,
    selectors: {
      [`${tileLink}:hover &`]: {
        boxShadow: `inset 0 0 0 2px ${vars.borderColor.neutral}`,
      },
    },
  },
]);

export const tileStage = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: `${STAGE_WIDTH}px`,
  transformOrigin: 'center',
  pointerEvents: 'none',
  userSelect: 'none',
  transition: 'opacity 75ms ease',
});
