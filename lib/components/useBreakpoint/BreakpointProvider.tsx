// Adapted version of https://github.com/streamich/react-use/blob/master/src/useMedia.ts
import React, { useEffect, useState, createContext, ReactNode } from 'react';

import { useBraidTheme } from '../BraidProvider/BraidThemeContext';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

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

export const breakpointContext = createContext<Breakpoint | null>(null);

interface BreakpointProviderProps {
  children: ReactNode;
}
export function BreakpointProvider({ children }: BreakpointProviderProps) {
  const { tablet, desktop } = useBraidTheme().breakpoint;

  const [state, setState] = useState<Breakpoint | null>(null);

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

  return (
    <breakpointContext.Provider value={state}>
      {children}
    </breakpointContext.Provider>
  );
}
