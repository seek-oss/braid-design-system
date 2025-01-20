import { createVar, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../themes/vars.css';

// Todo - this is arbitrary - handle this better
export const maxWidth = 500;

export const backdrop = style({
  width: '100vw',
  height: '100vh',
});

export const triggerVars = {
  top: createVar(),
  left: createVar(),
  bottom: createVar(),
  right: createVar(),
};

export const alignCenter = style({
  display: 'flex',
  justifyContent: 'center',
  width: `${maxWidth}px`,
});

// Top and bottom reversed to allow for a more natural API
export const popoverPosition = style({
  top: triggerVars.bottom,
  bottom: triggerVars.top,
  left: triggerVars.left,
  right: triggerVars.right,
});

export const animation = style({
  animation: `${keyframes({
    from: {
      transform: `translateY(${calc(vars.grid).negate().multiply(2)})`,
      opacity: 0,
    },
  })} .125s ease forwards`,
});
