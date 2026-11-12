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

import * as styles from './collapsibleHeight.css';

type GridRows = '0fr' | '1fr';

interface UseCollapsibleHeightProps {
  expanded: boolean;
  /**
   * Closed content is `display: none` (Disclosure). Accordion keeps the
   * inner box in layout, so it can measure while closed.
   */
  fromDisplayNone?: boolean;
  /** Skip the height tween (inline Disclosure, or `prefers-reduced-motion`). */
  animate?: boolean;
}

export const useCollapsibleHeight = ({
  expanded,
  fromDisplayNone = false,
  animate = true,
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

    if (!animate || prefersReducedMotion()) {
      openingFromNoneRef.current = false;
      setAnimatedRows(null);
    } else if (expanded && fromDisplayNone && animatedRows === null) {
      // Resting closed was `display: none`. Paint `0fr` before `1fr`.
      openingFromNoneRef.current = true;
      setAnimatedRows('0fr');
    } else if (expanded && fromDisplayNone) {
      // Reverse-open while already in the grid animation: do not force `0fr`.
      openingFromNoneRef.current = false;
      const height = measureCollapsibleHeight(contentSizeRef.current);
      setDuration(durationMsForHeight(height));
      setAnimatedRows('1fr');
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
      // Last paint was `display: none`. Let `0fr` paint before `1fr` so the
      // open transition has a presented start (same idea as close below).
      // Keep the ref set until the frame runs so Strict Mode's effect
      // re-run still takes this path instead of applying `1fr` before paint.
      contentRef.current?.getBoundingClientRect();
      let timeoutId = 0;
      const frame = window.requestAnimationFrame(() => {
        openingFromNoneRef.current = false;
        const height = measureCollapsibleHeight(contentSizeRef.current);
        setDuration(durationMsForHeight(height));
        setAnimatedRows('1fr');
        timeoutId = startTimeout();
      });
      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(timeoutId);
      };
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
    contentStyle,
    finishHeightTransition,
    className: {
      [styles.content]: true,
      [styles.contentOpen]: expanded && !isAnimating,
      [styles.contentClosed]: !expanded && !isAnimating,
      [styles.hideWhenClosed]: fromDisplayNone && !expanded && !isAnimating,
    },
    innerClassName: styles.contentInner,
  };
};
