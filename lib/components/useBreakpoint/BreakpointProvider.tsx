// Adapted version of https://github.com/streamich/react-use/blob/master/src/useMedia.ts
import React, { useEffect, useState, createContext, ReactNode } from 'react';
import { breakpoints, Breakpoint } from '../../css/breakpoints';

const minWidthQuery = (breakpoint: number) =>
  window.matchMedia(`(min-width: ${breakpoint}px)`);

const getCurrentBreakpoint = (
  tabletQuery: MediaQueryList,
  desktopQuery: MediaQueryList,
  wideQuery: MediaQueryList,
): Breakpoint => {
  if (wideQuery.matches) {
    return 'wide';
  }
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
  const { tablet, desktop, wide } = breakpoints;

  const [state, setState] = useState<Breakpoint | null>(null);

  useEffect(() => {
    let mounted = true;
    const tabletQuery = minWidthQuery(tablet);
    const desktopQuery = minWidthQuery(desktop);
    const wideQuery = minWidthQuery(wide);

    const onChange = () => {
      if (!mounted) {
        return;
      }

      const newBreakPoint = getCurrentBreakpoint(
        tabletQuery,
        desktopQuery,
        wideQuery,
      );

      if (newBreakPoint !== state) {
        setState(newBreakPoint);
      }
    };

    tabletQuery.addListener(onChange);
    desktopQuery.addListener(onChange);
    wideQuery.addListener(onChange);

    onChange();

    return () => {
      mounted = false;
      tabletQuery.removeListener(onChange);
      desktopQuery.removeListener(onChange);
      wideQuery.removeListener(onChange);
    };
  }, [tablet, desktop, wide, state]);

  return (
    <breakpointContext.Provider value={state}>
      {children}
    </breakpointContext.Provider>
  );
}
