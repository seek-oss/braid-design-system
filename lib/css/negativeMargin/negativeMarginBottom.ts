import clsx from 'clsx';
import { RequiredResponsiveValue } from '../atoms/sprinkles.css';
import { Space } from '../atoms/atoms';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './negativeMarginBottom.css';

export const negativeMarginBottom = (space?: RequiredResponsiveValue<Space>) =>
  space
    ? clsx(
        styles.base,
        resolveResponsiveProp(
          space,
          styles.mobile,
          styles.tablet,
          styles.desktop,
          styles.wide,
        ),
      )
    : null;
