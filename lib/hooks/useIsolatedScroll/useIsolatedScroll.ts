// @ts-ignore
import untypedIsolatedScroll from 'isolated-scroll';
import { useEffect } from 'react';

const isolatedScroll: (el: Element) => () => void = untypedIsolatedScroll;

export function useIsolatedScroll(
  element: HTMLElement | null,
  active: boolean = true,
) {
  useEffect(() => {
    if (!active) {
      return;
    }

    if (element) {
      return isolatedScroll(element);
    }
  }, [active, element]);
}
