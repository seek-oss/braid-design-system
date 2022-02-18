import clsx from 'clsx';
import { Space } from '../atoms/atoms';
import { RequiredResponsiveValue } from '../atoms/sprinkles.css';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './negativeMargin.css';

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
          styles[direction].mobile,
          styles[direction].tablet,
          styles[direction].desktop,
          styles[direction].wide,
        ),
      ])
    : null;
