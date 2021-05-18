import { useEffect } from 'react';
import { boxStyles } from '../../../../lib/components/Box/boxStyles';

export function useScrollLock(lock: boolean) {
  const overflowHidden = boxStyles({
    component: 'div',
    overflow: 'hidden',
  }).split(' ');

  useEffect(() => {
    if (lock) {
      document.body.classList.add(...overflowHidden);

      return () => {
        document.body.classList.remove(...overflowHidden);
      };
    }
  }, [lock, overflowHidden]);
}
