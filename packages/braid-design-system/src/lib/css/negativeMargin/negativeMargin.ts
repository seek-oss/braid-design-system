import clsx from 'clsx';
import type { Space } from '../atoms/atoms';
import type { RequiredResponsiveValue } from '../atoms/sprinkles.css';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './negativeMargin.css';

const directionStyles = {
  top: styles.top,
  right: styles.right,
  bottom: styles.bottom,
  left: styles.left,
};

export const negativeMargin = (
  direction: Exclude<keyof typeof styles, 'preventCollapsePseudo'>,
  space?: RequiredResponsiveValue<Space>,
) =>
  space
    ? clsx([
        direction === 'top' || direction === 'bottom'
          ? styles.preventCollapsePseudo[direction]
          : undefined,
        resolveResponsiveProp(
          space,
          directionStyles[direction].mobile,
          directionStyles[direction].tablet,
          directionStyles[direction].desktop,
          directionStyles[direction].wide,
        ),
      ])
    : null;
