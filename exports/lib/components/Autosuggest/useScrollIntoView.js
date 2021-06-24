import { useEffect } from 'react';
export function useScrollIntoView(element, scrollContainer) {
  useEffect(
    function () {
      if (scrollContainer && element) {
        const itemOffsetRelativeToContainer =
          element.offsetParent === scrollContainer
            ? element.offsetTop
            : element.offsetTop - scrollContainer.offsetTop;
        let scrollTop = scrollContainer.scrollTop; // Top of the visible area

        if (itemOffsetRelativeToContainer < scrollTop) {
          // Item is off the top of the visible area
          scrollTop = itemOffsetRelativeToContainer;
        } else if (
          itemOffsetRelativeToContainer + element.offsetHeight >
          scrollTop + scrollContainer.offsetHeight
        ) {
          // Item is off the bottom of the visible area
          scrollTop =
            itemOffsetRelativeToContainer +
            element.offsetHeight -
            scrollContainer.offsetHeight;
        }

        if (scrollTop !== scrollContainer.scrollTop) {
          scrollContainer.scrollTop = scrollTop;
        }
      }
    },
    [scrollContainer, element],
  );
}
