import clsx from 'clsx';
import { RequiredResponsiveValue } from '../atoms/sprinkles.css';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './negativeMarginTop.css';

type NegativeMarginTop = Extract<
  Extract<keyof typeof styles.mobile, keyof typeof styles.tablet>,
  Extract<keyof typeof styles.mobile, keyof typeof styles.desktop>
>;

export const negativeMarginTop = (
  space: RequiredResponsiveValue<NegativeMarginTop>,
) =>
  clsx(
    styles.base,
    resolveResponsiveProp(space, styles.mobile, styles.tablet, styles.desktop),
  );
