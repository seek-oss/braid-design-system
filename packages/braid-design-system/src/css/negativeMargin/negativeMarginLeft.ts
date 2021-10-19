import clsx from 'clsx';
import type { RequiredResponsiveValue } from '../atoms/sprinkles.css';
import type { Space } from '../atoms/atoms';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './negativeMarginLeft.css';

export const negativeMarginLeft = (space: RequiredResponsiveValue<Space>) =>
  clsx(
    resolveResponsiveProp(
      space,
      styles.mobile,
      styles.tablet,
      styles.desktop,
      styles.wide,
    ),
  );
