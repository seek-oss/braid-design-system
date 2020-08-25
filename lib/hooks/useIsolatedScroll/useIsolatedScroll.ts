// @ts-ignore
import untypedIsolatedScroll from 'isolated-scroll';
import { useEffect } from 'react';

const isolatedScroll: (el: Element) => () => void = untypedIsolatedScroll;

export function useIsolatedScroll(element: HTMLElement | null) {
  useEffect(() => {
    if (element) {
      return isolatedScroll(element);
    }
  }, [element]);
}
