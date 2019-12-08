import { useStyles } from 'sku/treat';
import classnames from 'classnames';
import {
  resolveResponsiveProp,
  ResponsiveProp,
} from '../../utils/responsiveProp';
import * as styleRefs from './useNegativeMarginLeft.treat';

type NegativeMarginLeft = Extract<
  Extract<keyof typeof styleRefs.mobile, keyof typeof styleRefs.tablet>,
  Extract<keyof typeof styleRefs.mobile, keyof typeof styleRefs.desktop>
>;

export const useNegativeMarginLeft = (
  space: ResponsiveProp<NegativeMarginLeft>,
) => {
  const styles = useStyles(styleRefs);
  return classnames(
    resolveResponsiveProp(space, styles.mobile, styles.tablet, styles.desktop),
  );
};
