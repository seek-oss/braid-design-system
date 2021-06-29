import clsx from 'clsx';
import { RequiredResponsiveValue } from '../atoms/sprinkles.css';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './negativeMarginLeft.css';

type NegativeMarginLeft = Extract<
  Extract<keyof typeof styles.mobile, keyof typeof styles.tablet>,
  Extract<keyof typeof styles.mobile, keyof typeof styles.desktop>
>;

export const negativeMarginLeft = (
  space: RequiredResponsiveValue<NegativeMarginLeft>,
) =>
  clsx(
    resolveResponsiveProp(space, styles.mobile, styles.tablet, styles.desktop),
  );
