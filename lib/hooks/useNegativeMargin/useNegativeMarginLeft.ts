import classnames from 'classnames';
import {
  resolveResponsiveProp,
  ResponsiveProp,
} from '../../utils/responsiveProp';
import * as styles from './useNegativeMarginLeft.css';

type NegativeMarginLeft = Extract<
  Extract<keyof typeof styles.mobile, keyof typeof styles.tablet>,
  Extract<keyof typeof styles.mobile, keyof typeof styles.desktop>
>;

export const useNegativeMarginLeft = (
  space: ResponsiveProp<NegativeMarginLeft>,
) =>
  classnames(
    resolveResponsiveProp(space, styles.mobile, styles.tablet, styles.desktop),
  );
