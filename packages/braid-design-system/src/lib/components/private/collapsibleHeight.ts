import type { TransitionEvent } from 'react';

export const minDurationMs = 200;
const maxDurationMs = 500;
const pixelsPerSecond = 320;

export const durationMsForHeight = (height: number) =>
  Math.round(
    Math.min(
      maxDurationMs,
      Math.max(minDurationMs, (height / pixelsPerSecond) * 1000),
    ),
  );

export const measureCollapsibleHeight = (element: HTMLElement | null) => {
  if (!element) {
    return 0;
  }

  const { height } = element.getBoundingClientRect();
  if (height > 0) {
    return height;
  }

  return element.offsetHeight || element.scrollHeight;
};

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isCollapseTransition = (event: TransitionEvent<HTMLElement>) =>
  event.propertyName === 'grid-template-rows' &&
  event.target === event.currentTarget;
