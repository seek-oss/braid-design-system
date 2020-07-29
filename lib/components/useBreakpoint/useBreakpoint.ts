// Adapted version of https://github.com/streamich/react-use/blob/master/src/useMedia.ts
import { useEffect, useState } from 'react';

import { useBraidTheme } from '../BraidProvider/BraidProvider';

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

const minWidthQuery = (breakpoint: number) =>
  window.matchMedia(`(min-width: ${breakpoint}px)`);

const getCurrentBreakpoint = (
  tabletQuery: MediaQueryList,
  desktopQuery: MediaQueryList,
) => {
  if (desktopQuery.matches) {
    return 'desktop';
  }
  if (tabletQuery.matches) {
    return 'tablet';
  }
  return 'mobile';
};

type CurrentBreakpoint = Breakpoint | 'unknown';

export const useBreakpoint = (): CurrentBreakpoint => {
  const { tablet, desktop } = useBraidTheme().breakpoint;

  const [state, setState] = useState<CurrentBreakpoint>('unknown');

  useEffect(() => {
    let mounted = true;
    const tabletQuery = minWidthQuery(tablet);
    const desktopQuery = minWidthQuery(desktop);

    const onChange = () => {
      if (!mounted) {
        return;
      }

      const newBreakPoint = getCurrentBreakpoint(tabletQuery, desktopQuery);

      if (newBreakPoint !== state) {
        setState(newBreakPoint);
      }
    };

    tabletQuery.addListener(onChange);
    desktopQuery.addListener(onChange);

    onChange();

    return () => {
      mounted = false;
      tabletQuery.removeListener(onChange);
      desktopQuery.removeListener(onChange);
    };
  }, [tablet, desktop, state]);

  return state;
};
