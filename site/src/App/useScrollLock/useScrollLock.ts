import { useEffect } from 'react';
import { atoms } from '../../../../lib/css/atoms/atoms';

export function useScrollLock(lock: boolean) {
  const overflowHidden = atoms({
    reset: 'div',
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
