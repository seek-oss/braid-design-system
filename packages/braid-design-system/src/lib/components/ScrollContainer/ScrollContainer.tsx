import assert from 'assert';

import {
  type ReactNode,
  useRef,
  useCallback,
  type RefObject,
  forwardRef,
} from 'react';
import { throttle } from 'throttle-debounce';

import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import { scrollbars } from '../private/scrollbars.css';
import * as styles from './ScrollContainer.css';

const scrollOffset = 2; // 2 instead of 1 to account for rounding errors in some browsers

export const validScrollContainerComponents = [
  'div',
  'span',
  'article',
  'aside',
  'main',
  'nav',
  'section',
  'ul',
  'ol',
] as const;

const supportsScrollTimeline = () =>
  typeof CSS !== 'undefined' &&
  typeof CSS.supports === 'function' &&
  CSS.supports('animation-timeline', 'scroll()');

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

export interface ScrollContainerProps {
  children: ReactNode;
  /**
   * HTML element to render. Defaults to `div`.
   */
  component?: (typeof validScrollContainerComponents)[number];
  /**
   * Axis that can scroll. Defaults to `horizontal`.
   * `vertical` and `all` stretch to the parent height, so the parent needs to set a height limit.
   */
  direction?: keyof typeof styles.direction;
  /**
   * Length of the fade on edges that can still be scrolled. Defaults to `medium`.
   */
  fadeSize?: keyof typeof styles.fadeSize;
  /**
   * Hides the scrollbar. Scrolling still works.
   */
  hideScrollbar?: boolean;
  /**
   * Element inside the container. The leading fade (left or top) stays hidden until this element scrolls past the start edge.
   */
  startRef?: RefObject<HTMLElement | null>;
  data?: DataAttributeMap;
}

export const ScrollContainer = forwardRef<HTMLElement, ScrollContainerProps>(
  (
    {
      children,
      component = 'div',
      direction = 'horizontal',
      fadeSize = 'medium',
      hideScrollbar = false,
      startRef,
      data,
      ...restProps
    },
    forwardedRef,
  ) => {
    assert(
      validScrollContainerComponents.includes(component),
      `Invalid ScrollContainer component: '${component}'. Should be one of [${validScrollContainerComponents
        .map((c) => `'${c}'`)
        .join(', ')}]`,
    );

    const containerRef = useRef<HTMLElement>(null);
    const setContainerRef = useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;

        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef],
    );
    const gateStartRef = useRef(Boolean(startRef?.current));

    const syncTimelineGate = useCallback((element: HTMLElement) => {
      element.classList.remove(
        styles.maskLeft,
        styles.maskRight,
        styles.maskTop,
        styles.maskBottom,
      );
      element.classList[gateStartRef.current ? 'add' : 'remove'](
        styles.gateStart,
      );
    }, []);

    // This must be called within a `useLayoutEffect` because `.scrollLeft`, `.scrollWidth` and `.offsetWidth` force a reflow
    // https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    const updateMask = throttle(
      100,
      useCallback(() => {
        const element = containerRef.current;

        if (!element || supportsScrollTimeline()) {
          return;
        }

        maskOverflow({
          element,
          direction,
          gateStart: gateStartRef.current,
        });
      }, [direction]),
    );

    const applyGate = useCallback(
      (gated: boolean) => {
        gateStartRef.current = gated;
        const element = containerRef.current;

        if (!element) {
          return;
        }

        if (supportsScrollTimeline()) {
          syncTimelineGate(element);
          return;
        }

        updateMask();
      },
      [syncTimelineGate, updateMask],
    );

    useIsomorphicLayoutEffect(() => {
      const element = containerRef.current;

      if (!element) {
        return;
      }

      if (supportsScrollTimeline()) {
        syncTimelineGate(element);
        return;
      }

      updateMask();
      window.addEventListener('resize', updateMask);
      return () => window.removeEventListener('resize', updateMask);
    }, [syncTimelineGate, updateMask]);

    useIsomorphicLayoutEffect(() => {
      const element = containerRef.current;
      const sentinel = startRef?.current;

      if (!sentinel || !element) {
        applyGate(false);
        return;
      }

      const clippedByStartEdge = () => {
        const root = element.getBoundingClientRect();
        const box = sentinel.getBoundingClientRect();

        return direction === 'horizontal' || direction === 'all'
          ? box.left < root.left
          : box.top < root.top;
      };

      applyGate(!clippedByStartEdge());

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.rootBounds) {
            return;
          }

          const clipped =
            direction === 'horizontal' || direction === 'all'
              ? entry.boundingClientRect.left < entry.rootBounds.left
              : entry.boundingClientRect.top < entry.rootBounds.top;

          applyGate(!clipped);
        },
        { root: element, threshold: [0, 1] },
      );

      observer.observe(sentinel);
      return () => observer.disconnect();
    }, [applyGate, direction, startRef]);

    return (
      <Box
        component={component}
        ref={setContainerRef}
        onScroll={supportsScrollTimeline() ? undefined : updateMask}
        position="relative"
        height="full"
        className={[
          styles.container,
          styles.mask,
          hideScrollbar ? styles.hideScrollbar : scrollbars,
          styles.fadeSize[fadeSize],
          styles.direction[direction],
          styles.heightLimit,
          direction !== 'vertical' && styles.minWidthOfMaxContent,
        ]}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        {children}
      </Box>
    );
  },
);

ScrollContainer.displayName = 'ScrollContainer';
