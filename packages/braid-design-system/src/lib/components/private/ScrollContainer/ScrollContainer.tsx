import { type ReactNode, useRef, useCallback, type RefObject } from 'react';
import { throttle } from 'throttle-debounce';

import { useIsomorphicLayoutEffect } from '../../../hooks/useIsomorphicLayoutEffect';
import { Box } from '../../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';

import * as styles from './ScrollContainer.css';
import { scrollbars } from '../scrollbars.css';

const scrollOffset = 2; // 2 instead of 1 to account for rounding errors in some browsers

interface MaskOverflowOptions {
  element: HTMLElement;
  direction: keyof typeof styles.direction;
  gateStart?: boolean;
}

const maskOverflow = ({ element, direction, gateStart }: MaskOverflowOptions) =>
  setTimeout(() => {
    const atTop = element.scrollTop <= 0;
    const atBottom =
      element.scrollHeight - element.offsetHeight - element.scrollTop <
      scrollOffset;
    const atLeft = element.scrollLeft <= 0;
    const atRight =
      element.scrollWidth - element.offsetWidth - element.scrollLeft <
      scrollOffset;

    if (direction === 'vertical' || direction === 'all') {
      element.classList[atTop || gateStart ? 'remove' : 'add'](styles.maskTop);
      element.classList[atBottom ? 'remove' : 'add'](styles.maskBottom);
    }
    if (direction === 'horizontal' || direction === 'all') {
      element.classList[atLeft || gateStart ? 'remove' : 'add'](
        styles.maskLeft,
      );
      element.classList[atRight ? 'remove' : 'add'](styles.maskRight);
    }
  });

interface ScrollContainerProps {
  children: ReactNode;
  direction?: keyof typeof styles.direction;
  fadeSize?: keyof typeof styles.fadeSize;
  hideScrollbar?: boolean;
  startRef?: RefObject<HTMLElement | null>;
  data?: DataAttributeMap;
}

export const ScrollContainer = ({
  children,
  direction = 'horizontal',
  fadeSize = 'medium',
  hideScrollbar = false,
  startRef,
  data,
  ...restProps
}: ScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gateStartRef = useRef(Boolean(startRef?.current));

  // This must be called within a `useLayoutEffect` because `.scrollLeft`, `.scrollWidth` and `.offsetWidth` force a reflow
  // https://gist.github.com/paulirish/5d52fb081b3570c81e3a
  const updateMask = throttle(
    100,
    useCallback(() => {
      if (containerRef.current) {
        maskOverflow({
          element: containerRef.current,
          direction,
          gateStart: gateStartRef.current,
        });
      }
    }, [containerRef, direction]),
  );

  useIsomorphicLayoutEffect(() => {
    if (containerRef.current) {
      updateMask();
    }

    window.addEventListener('resize', updateMask);
    return () => window.removeEventListener('resize', updateMask);
  }, [updateMask]);

  useIsomorphicLayoutEffect(() => {
    if (!startRef?.current || !containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.rootBounds) {
          return;
        }

        const clippedByStartEdge =
          direction === 'horizontal' || direction === 'all'
            ? entry.boundingClientRect.left < entry.rootBounds.left
            : entry.boundingClientRect.top < entry.rootBounds.top;

        gateStartRef.current = !clippedByStartEdge;
        updateMask();
      },
      { root: containerRef.current, threshold: [0, 1] },
    );

    observer.observe(startRef.current);
    return () => observer.disconnect();
  }, [startRef, updateMask]);

  return (
    <Box
      ref={containerRef}
      onScroll={updateMask}
      position="relative"
      height="full"
      className={[
        styles.container,
        styles.mask,
        hideScrollbar ? styles.hideScrollbar : scrollbars,
        styles.fadeSize[fadeSize],
        styles.direction[direction],
      ]}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
