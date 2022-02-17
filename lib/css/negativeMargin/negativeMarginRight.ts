import clsx from 'clsx';
import { RequiredResponsiveValue } from '../atoms/sprinkles.css';
import { Space } from '../atoms/atoms';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './negativeMarginRight.css';

export const negativeMarginRight = (space?: RequiredResponsiveValue<Space>) =>
  space
    ? clsx(
        resolveResponsiveProp(
          space,
          styles.mobile,
          styles.tablet,
          styles.desktop,
          styles.wide,
        ),
      )
    : null;
