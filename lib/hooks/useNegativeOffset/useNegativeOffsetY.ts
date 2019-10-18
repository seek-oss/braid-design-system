import { useStyles } from 'sku/treat';
import classnames from 'classnames';
import {
  resolveResponsiveProp,
  ResponsiveProp,
} from '../../utils/resolveResponsiveProp';
import * as styleRefs from './useNegativeOffsetY.treat';

type NegativeOffset = Extract<
  keyof typeof styleRefs.mobile,
  keyof typeof styleRefs.desktop
>;

export const useNegativeOffsetY = (space: ResponsiveProp<NegativeOffset>) => {
  const styles = useStyles(styleRefs);
  const offsetY = resolveResponsiveProp(space, styles.mobile, styles.desktop);
  return classnames(styles.base, offsetY);
};
