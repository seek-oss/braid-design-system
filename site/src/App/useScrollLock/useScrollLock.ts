import { useEffect } from 'react';
import { useStyles } from 'sku/treat';
import * as styleRefs from './useScrollLock.treat';

export function useScrollLock(lock: boolean) {
  const styles = useStyles(styleRefs);

  useEffect(() => {
    if (lock) {
      document.body.classList.add(styles.scrollLock);

      return () => {
        document.body.classList.remove(styles.scrollLock);
      };
    }
  }, [lock, styles.scrollLock]);
}
