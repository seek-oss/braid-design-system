import classnames from 'classnames';
import { RequiredResponsiveValue } from '../sprinkles.css';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './negativeMarginLeft.css';

type NegativeMarginLeft = Extract<
  Extract<keyof typeof styles.mobile, keyof typeof styles.tablet>,
  Extract<keyof typeof styles.mobile, keyof typeof styles.desktop>
>;

export const negativeMarginLeft = (
  space: RequiredResponsiveValue<NegativeMarginLeft>,
) =>
  classnames(
    resolveResponsiveProp(space, styles.mobile, styles.tablet, styles.desktop),
  );
