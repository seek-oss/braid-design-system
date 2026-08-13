import { type RefObject, useEffect } from 'react';

export function useScrollIntoView(
  element: HTMLElement | null,
  scrollContainerRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer || !element) {
      return;
    }

    const containerRect = scrollContainer.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    if (elementRect.top < containerRect.top) {
      // Item is off the top of the visible area
      scrollContainer.scrollTop -= containerRect.top - elementRect.top;
    } else if (elementRect.bottom > containerRect.bottom) {
      // Item is off the bottom of the visible area
      scrollContainer.scrollTop += elementRect.bottom - containerRect.bottom;
    }
  }, [scrollContainerRef, element]);
}
