import clsx from 'clsx';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './negativeMarginLeft.css';
export var negativeMarginLeft = function negativeMarginLeft(space) {
  return clsx(resolveResponsiveProp(space, styles.mobile, styles.tablet, styles.desktop));
};