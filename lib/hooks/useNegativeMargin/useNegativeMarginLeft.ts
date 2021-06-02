import classnames from 'classnames';
import { RequiredResponsiveValue } from '../../atoms/sprinkles.css';
import { resolveResponsiveProp } from '../../utils/responsiveProp';
import * as styles from './useNegativeMarginLeft.css';

type NegativeMarginLeft = Extract<
  Extract<keyof typeof styles.mobile, keyof typeof styles.tablet>,
  Extract<keyof typeof styles.mobile, keyof typeof styles.desktop>
>;

export const useNegativeMarginLeft = (
  space: RequiredResponsiveValue<NegativeMarginLeft>,
) =>
  classnames(
    resolveResponsiveProp(space, styles.mobile, styles.tablet, styles.desktop),
  );
