import classnames from 'classnames';
import {
  resolveResponsiveProp,
  ResponsiveProp,
} from '../../utils/responsiveProp';
import * as styles from './useNegativeMarginTop.css';

type NegativeMarginTop = Extract<
  Extract<keyof typeof styles.mobile, keyof typeof styles.tablet>,
  Extract<keyof typeof styles.mobile, keyof typeof styles.desktop>
>;

export const useNegativeMarginTop = (
  space: ResponsiveProp<NegativeMarginTop>,
) => {
  const negativeMarginTop = resolveResponsiveProp(
    space,
    styles.mobile,
    styles.tablet,
    styles.desktop,
  );
  return classnames(styles.base, negativeMarginTop);
};
