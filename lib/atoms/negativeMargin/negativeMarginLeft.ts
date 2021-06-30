import clsx from 'clsx';
import { RequiredResponsiveValue } from '../sprinkles.css';
import { Space } from '../atoms';
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
