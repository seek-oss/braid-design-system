import classnames from 'classnames';
import { RequiredResponsiveValue } from '../../sprinkles/sprinkles.css';
import { resolveResponsiveProp } from '../../utils/responsiveProp';
import * as styles from './useNegativeMarginTop.css';

type NegativeMarginTop = Extract<
  Extract<keyof typeof styles.mobile, keyof typeof styles.tablet>,
  Extract<keyof typeof styles.mobile, keyof typeof styles.desktop>
>;

export const useNegativeMarginTop = (
  space: RequiredResponsiveValue<NegativeMarginTop>,
) => {
  const negativeMarginTop = resolveResponsiveProp(
    space,
    styles.mobile,
    styles.tablet,
    styles.desktop,
  );
  return classnames(styles.base, negativeMarginTop);
};
