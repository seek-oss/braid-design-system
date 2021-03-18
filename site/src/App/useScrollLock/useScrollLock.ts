import { useEffect } from 'react';
import { useBoxStyles } from '../../../../lib/components/Box/useBoxStyles';

export function useScrollLock(lock: boolean) {
  const overflowHidden = useBoxStyles({
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
