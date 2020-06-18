import computeScrollIntoView from 'compute-scroll-into-view';
import { useEffect } from 'react';

export function useScrollIntoView(
  element: HTMLElement | null,
  shouldScroll = true,
) {
  useEffect(() => {
    if (element && shouldScroll) {
      try {
        const actions = computeScrollIntoView(element, {
          scrollMode: 'if-needed',
          block: 'nearest',
          inline: 'nearest',
        });

        actions.forEach(({ el, top, left }) => {
          el.scrollTop = top;
          el.scrollLeft = left;
        });
      } catch (e) {
        // Ignore errors
      }
    }
  }, [element, shouldScroll]);
}
