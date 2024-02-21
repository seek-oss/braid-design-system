import { useEffect, useLayoutEffect } from 'react';

// `useLayoutEffect` will show a warning if used during SSR
export const useIsomorphicLayoutEffect =
  typeof document !== 'undefined' ? useLayoutEffect : useEffect;
