import { useStyles } from 'sku/react-treat';
import * as styleRefs from './useTextAlignedToIcon.treat';

export const useTextAlignedToIcon = (size: keyof typeof styleRefs.size) =>
  useStyles(styleRefs).size[size];
