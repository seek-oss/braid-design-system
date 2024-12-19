import React, { type ReactNode, useRef, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '../../../hooks/useIsomorphicLayoutEffect';
import { Box } from '../../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';
import { throttle } from 'throttle-debounce';

import * as styles from './ScrollContainer.css';

const scrollOffset = 2; // 2 instead of 1 to account for rounding errors in some browsers

const maskOverflow = (
  element: HTMLElement,
  direction: keyof typeof styles.direction,
) => {
  const atTop = element.scrollTop <= 0;
  const atBottom =
    element.scrollHeight - element.offsetHeight - element.scrollTop <
    scrollOffset;
  const atLeft = element.scrollLeft <= 0;
  const atRight =
    element.scrollWidth - element.offsetWidth - element.scrollLeft <
    scrollOffset;

  if (direction === 'vertical' || direction === 'all') {
    element.classList[atTop ? 'remove' : 'add'](styles.maskTop);
    element.classList[atBottom ? 'remove' : 'add'](styles.maskBottom);
  }
  if (direction === 'horizontal' || direction === 'all') {
    element.classList[atLeft ? 'remove' : 'add'](styles.maskLeft);
    element.classList[atRight ? 'remove' : 'add'](styles.maskRight);
  }
};

interface ScrollContainerProps {
  children: ReactNode;
  direction?: keyof typeof styles.direction;
  fadeSize?: keyof typeof styles.fadeSize;
  hideScrollbar?: boolean;
  data?: DataAttributeMap;
}

export const ScrollContainer = ({
  children,
  direction = 'horizontal',
  fadeSize = 'medium',
  hideScrollbar = false,
  data,
  ...restProps
}: ScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // This must be called within a `useLayoutEffect` because `.scrollLeft`, `.scrollWidth` and `.offsetWidth` force a reflow
  // https://gist.github.com/paulirish/5d52fb081b3570c81e3a
  const updateMask = throttle(
    100,
    useCallback(() => {
      if (containerRef.current) {
        maskOverflow(containerRef.current, direction);
      }
    }, [containerRef, direction]),
  );

  useIsomorphicLayoutEffect(() => {
    if (containerRef.current) {
      setTimeout(updateMask, 0);
    }

    window.addEventListener('resize', updateMask);
    return () => window.removeEventListener('resize', updateMask);
  }, [updateMask]);

  return (
    <Box
      ref={containerRef}
      onScroll={updateMask}
      position="relative"
      height="full"
      className={[
        styles.container,
        styles.mask,
        hideScrollbar ? styles.hideScrollbar : null,
        styles.fadeSize[fadeSize],
        styles.direction[direction],
      ]}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
