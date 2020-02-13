import { useStyles } from 'sku/react-treat';
import * as styleRefs from './useLineHeightContainer.treat';

export const useLineHeightContainer = (size: keyof typeof styleRefs.size) => {
  const styles = useStyles(styleRefs);
  return styles.size[size];
};
