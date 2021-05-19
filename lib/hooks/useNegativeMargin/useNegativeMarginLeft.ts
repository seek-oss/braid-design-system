import classnames from 'classnames';
import { ResponsiveValue } from '../../sprinkles/sprinkles.css';
import { resolveResponsiveProp } from '../../utils/responsiveProp';
import * as styles from './useNegativeMarginLeft.css';

type NegativeMarginLeft = Extract<
  Extract<keyof typeof styles.mobile, keyof typeof styles.tablet>,
  Extract<keyof typeof styles.mobile, keyof typeof styles.desktop>
>;

export const useNegativeMarginLeft = (
  space: ResponsiveValue<NegativeMarginLeft>,
) =>
  classnames(
    resolveResponsiveProp(space, styles.mobile, styles.tablet, styles.desktop),
  );
