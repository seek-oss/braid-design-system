import { useStyles } from 'sku/treat';
import classnames from 'classnames';
import {
  resolveResponsiveProp,
  ResponsiveProp,
} from '../../utils/resolveResponsiveProp';
import * as styleRefs from './useNegativeOffsetX.treat';

type NegativeOffset = Extract<
  keyof typeof styleRefs.mobile,
  keyof typeof styleRefs.desktop
>;

export const useNegativeOffsetX = (space: ResponsiveProp<NegativeOffset>) => {
  const styles = useStyles(styleRefs);
  return classnames(
    resolveResponsiveProp(space, styles.mobile, styles.desktop),
  );
};
