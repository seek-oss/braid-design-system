import clsx from 'clsx';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './negativeMarginTop.css';
export var negativeMarginTop = function negativeMarginTop(space) {
  return clsx(
    styles.base,
    resolveResponsiveProp(space, styles.mobile, styles.tablet, styles.desktop),
  );
};
