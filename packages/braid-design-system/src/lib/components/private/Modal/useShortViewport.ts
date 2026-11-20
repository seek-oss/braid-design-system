import { useState } from 'react';

import { useIsomorphicLayoutEffect } from '../../../hooks/useIsomorphicLayoutEffect';

/**
 * Below this height, pinned content outside the scroll area leaves too little
 * room for the content itself, e.g. landscape mobile or high browser zoom.
 */
export const shortViewportQuery = '(max-height: 480px)';

export const useShortViewport = (enabled: boolean) => {
  const [isShortViewport, setIsShortViewport] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (!enabled || typeof window.matchMedia !== 'function') {
      return;
    }

    const query = window.matchMedia(shortViewportQuery);
    const onChange = () => setIsShortViewport(query.matches);

    query.addListener(onChange);
    onChange();

    return () => query.removeListener(onChange);
  }, [enabled]);

  return enabled && isShortViewport;
};
