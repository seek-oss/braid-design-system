import computeScrollIntoView from 'compute-scroll-into-view';
import { useEffect } from 'react';

type ComputeScrollIntoViewOptions = Parameters<typeof computeScrollIntoView>[1];

interface UseScrollIntoViewOptions extends ComputeScrollIntoViewOptions {
  shouldScroll?: boolean;
}
export function useScrollIntoView(
  element: HTMLElement | null,
  options?: UseScrollIntoViewOptions,
) {
  const {
    shouldScroll = true,
    scrollMode = 'if-needed',
    inline = 'nearest',
    block = 'nearest',
    boundary,
  } = options || {};

  useEffect(() => {
    if (element && shouldScroll) {
      try {
        const actions = computeScrollIntoView(element, {
          scrollMode,
          block,
          inline,
          boundary,
        });

        actions.forEach(({ el, top, left }) => {
          el.scrollTop = top;
          el.scrollLeft = left;
        });
      } catch (e) {
        // Ignore errors
      }
    }
  }, [element, shouldScroll, scrollMode, block, inline, boundary]);
}
