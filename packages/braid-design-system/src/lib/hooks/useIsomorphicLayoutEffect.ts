import { useEffect, useLayoutEffect } from 'react';

const isJSDom =
  typeof navigator !== 'undefined' && navigator?.userAgent?.includes('jsdom');

// `useLayoutEffect` will show a warning if used during SSR
export const useIsomorphicLayoutEffect =
  typeof document !== 'undefined' && !isJSDom ? useLayoutEffect : useEffect;
