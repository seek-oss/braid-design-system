import { useStyles } from 'sku/treat';
import classnames from 'classnames';
import {
  resolveResponsiveProp,
  ResponsiveProp,
} from '../../utils/responsiveProp';
import * as styleRefs from './useNegativeOffsetY.treat';

type NegativeOffset = Extract<
  Extract<keyof typeof styleRefs.mobile, keyof typeof styleRefs.tablet>,
  Extract<keyof typeof styleRefs.mobile, keyof typeof styleRefs.desktop>
>;

export const useNegativeOffsetY = (space: ResponsiveProp<NegativeOffset>) => {
  const styles = useStyles(styleRefs);
  const offsetY = resolveResponsiveProp(
    space,
    styles.mobile,
    styles.tablet,
    styles.desktop,
  );
  return classnames(styles.base, offsetY);
};
