import clsx from 'clsx';
import { RequiredResponsiveValue } from '../sprinkles.css';
import { Space } from '../atoms';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './negativeMarginTop.css';

export const negativeMarginTop = (space: RequiredResponsiveValue<Space>) =>
  clsx(
    styles.base,
    resolveResponsiveProp(
      space,
      styles.mobile,
      styles.tablet,
      styles.desktop,
      styles.wide,
    ),
  );
