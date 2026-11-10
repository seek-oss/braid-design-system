import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type TransitionEvent,
} from 'react';

import {
  durationMsForHeight,
  isCollapseTransition,
  measureCollapsibleHeight,
  minDurationMs,
  prefersReducedMotion,
} from './collapsibleHeight';

type GridRows = '0fr' | '1fr';

interface UseCollapsibleHeightProps {
  expanded: boolean;
  /**
   * Closed content is `display: none` (Disclosure). Accordion keeps the
   * inner box in layout, so it can measure while closed.
   */
  fromDisplayNone?: boolean;
}

export const useCollapsibleHeight = ({
  expanded,
  fromDisplayNone = false,
}: UseCollapsibleHeightProps) => {
  const contentRef = useRef<HTMLElement>(null);
  const contentSizeRef = useRef<HTMLElement>(null);
  const animationDurationMsRef = useRef(minDurationMs);
  const openingFromNoneRef = useRef(false);
  const [trackedExpanded, setTrackedExpanded] = useState(expanded);
  const [animatedRows, setAnimatedRows] = useState<GridRows | null>(null);
  const [animationDurationMs, setAnimationDurationMs] = useState(minDurationMs);
  const isAnimating = animatedRows !== null;

  const setDuration = (duration: number) => {
    animationDurationMsRef.current = duration;
    setAnimationDurationMs(duration);
  };

  if (expanded !== trackedExpanded) {
    setTrackedExpanded(expanded);

    if (prefersReducedMotion()) {
      openingFromNoneRef.current = false;
      setAnimatedRows(null);
    } else if (expanded && fromDisplayNone) {
      openingFromNoneRef.current = true;
      setAnimatedRows('0fr');
    } else {
      openingFromNoneRef.current = false;
      const height = measureCollapsibleHeight(contentSizeRef.current);
      setDuration(durationMsForHeight(height));
      setAnimatedRows(expanded ? '0fr' : '1fr');
    }
  }

  const finishAnimation = useCallback(() => {
    setAnimatedRows(null);
  }, []);

  const finishHeightTransition = useCallback(
    (event: TransitionEvent<HTMLElement>) => {
      if (isCollapseTransition(event)) {
        finishAnimation();
      }
    },
    [finishAnimation],
  );

  useLayoutEffect(() => {
    if (!isAnimating) {
      return;
    }

    const startTimeout = () =>
      window.setTimeout(finishAnimation, animationDurationMsRef.current + 50);

    if (openingFromNoneRef.current) {
      openingFromNoneRef.current = false;
      // Reading the size flushes the 0fr start so Safari records it.
      contentRef.current?.getBoundingClientRect();
      const height = measureCollapsibleHeight(contentSizeRef.current);
      setDuration(durationMsForHeight(height));
      setAnimatedRows('1fr');
      const timeoutId = startTimeout();
      return () => window.clearTimeout(timeoutId);
    }

    if (expanded) {
      contentRef.current?.getBoundingClientRect();
      setAnimatedRows('1fr');
      const timeoutId = startTimeout();
      return () => window.clearTimeout(timeoutId);
    }

    // Paint 1fr with overflow/transition enabled before collapsing, otherwise
    // the close jumps because `contentOpen` (`transition: none`) is removed
    // in the same frame as `0fr`.
    contentRef.current?.getBoundingClientRect();
    let timeoutId = 0;
    const frame = window.requestAnimationFrame(() => {
      setAnimatedRows('0fr');
      timeoutId = startTimeout();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeoutId);
    };
  }, [expanded, finishAnimation, isAnimating]);

  const contentStyle: CSSProperties | undefined = isAnimating
    ? {
        gridTemplateRows: animatedRows ?? undefined,
        transitionDuration: `${animationDurationMs}ms`,
      }
    : undefined;

  return {
    contentRef,
    contentSizeRef,
    isAnimating,
    contentStyle,
    finishHeightTransition,
  };
};
