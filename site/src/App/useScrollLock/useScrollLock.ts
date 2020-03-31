import { useEffect } from 'react';
import { useStyles } from 'sku/treat';
import * as styleRefs from './useScrollLock.treat';

export function useScrollLock(lock: boolean) {
  const styles = useStyles(styleRefs);

  useEffect(() => {
    document.body.classList[lock ? 'add' : 'remove'](styles.scrollLock);
  }, [lock, styles.scrollLock]);
}
