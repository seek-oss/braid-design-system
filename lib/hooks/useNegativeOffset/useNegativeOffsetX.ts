import { useStyles } from 'sku/treat';
import classnames from 'classnames';
import {
  resolveResponsiveProp,
  ResponsiveProp,
} from '../../utils/responsiveProp';
import * as styleRefs from './useNegativeOffsetX.treat';

type NegativeOffset = Extract<
  Extract<keyof typeof styleRefs.mobile, keyof typeof styleRefs.tablet>,
  Extract<keyof typeof styleRefs.mobile, keyof typeof styleRefs.desktop>
>;

export const useNegativeOffsetX = (space: ResponsiveProp<NegativeOffset>) => {
  const styles = useStyles(styleRefs);
  return classnames(
    resolveResponsiveProp(space, styles.mobile, styles.tablet, styles.desktop),
  );
};
