import { useMemo, useCallback } from 'react';

import { vars } from '../../../entries/css';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';

const px = (v: string | number) => `${v}px`;

const animationTimeout = 200;

const entranceTransition = 'all 0.2s ease';
const exitTransition = 'opacity 0.2s ease, height 0.2s ease';

const visibleStackedToasts = 3;

interface Transform {
  property: 'opacity' | 'transform' | 'scale' | 'height';
  from?: string;
  to?: string;
}

const animate = (
  element: HTMLElement,
  transforms: Transform[],
  transition: string,
  done?: () => void,
) => {
  const fallbackTimeout = setTimeout(() => {
    if (done) {
      done();
    }
  }, animationTimeout);

  transforms.forEach(({ property, from = '' }) => {
    element.style.setProperty(property, from);
  });
  element.style.setProperty('transition', '');

  const transitionEndHandler = (ev: TransitionEvent) => {
    if (ev.target !== element) {
      return;
    }

    element.style.setProperty('transition', '');

    if (done) {
      done();
    }

    element.removeEventListener('transitionend', transitionEndHandler);

    clearTimeout(fallbackTimeout);
  };

  element.addEventListener('transitionend', transitionEndHandler);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      element.style.setProperty('transition', transition);

      transforms.forEach(({ property, to = '' }) => {
        element.style.setProperty(property, to);
      });
    });
  });
};

type toastState = undefined | 'entered' | 'exiting';

export const useFlipList = (expanded: boolean) => {
  const refs = useMemo(() => new Map<string, HTMLElement | null>(), []);
  const toastStates = useMemo(() => new Map<string, toastState>(), []);

  useIsomorphicLayoutEffect(() => {
    const animations: Array<{
      element: HTMLElement;
      transforms: Transform[];
      transition: string;
    }> = [];

    Array.from(refs.entries()).forEach(([toastKey, element]) => {
      if (element && toastStates.get(toastKey) !== 'exiting') {
        const index = Array.from(refs.keys()).indexOf(toastKey);
        const toastsLength = Array.from(refs.values()).filter(
          (value) => value !== null,
        ).length;
        const position = toastsLength - index - 1;

        const { opacity, transform } = element.style;
        const height = element.getBoundingClientRect().height;
        element.style.height = 'auto';
        const fullHeight = element.getBoundingClientRect().height;
        element.style.height = px(height);

        const collapsedScale = position === 1 ? 0.9 : 0.8;

        if (position > 0) {
          // Move animation for toasts that are not the first
          animations.push({
            element,
            transition: entranceTransition,
            transforms: [
              {
                property: 'height',
                from: px(height),
                to: expanded
                  ? px(fullHeight)
                  : `${
                      position < visibleStackedToasts ? vars.space.small : '0px'
                    }`,
              },
              {
                property: 'transform',
                from: transform,
                to: expanded ? undefined : `scaleX(${collapsedScale})`,
              },
              {
                property: 'opacity',
                from: opacity,
                to: position < visibleStackedToasts || expanded ? '1' : '0',
              },
            ],
          });
        } else if (toastStates.get(toastKey) !== 'entered') {
          // Enter animation
          animations.push({
            element,
            transition: entranceTransition,
            transforms: [
              {
                property: 'opacity',
                from: '0',
              },
              {
                property: 'height',
                from: '0px',
                to: px(fullHeight),
              },
            ],
          });
        } else {
          animations.push({
            element,
            transition: entranceTransition,
            transforms: [
              {
                property: 'height',
                from: px(height),
                to: px(fullHeight),
              },
              {
                property: 'transform',
                from: transform,
              },
            ],
          });
        }

        toastStates.set(toastKey, 'entered');
      } else {
        refs.delete(toastKey);
      }
    });

    animations.forEach(({ element, transforms, transition }) => {
      animate(element, transforms, transition);
    });
  });

  const remove = useCallback(
    (toastKey: string, cb: () => void) => {
      const element = refs.get(toastKey);

      if (element) {
        toastStates.set(toastKey, 'exiting');
        // Removal animation
        animate(
          element,
          [
            {
              property: 'opacity',
              to: '0',
            },
            {
              property: 'height',
              from: element.style.height,
              to: '0px',
            },
          ],
          exitTransition,
          cb,
        );
      }
    },
    [refs, toastStates],
  );

  const itemRef = useCallback(
    (toastKey: string) => (ref: HTMLElement | null) => {
      refs.set(toastKey, ref);
    },
    [refs],
  );

  return {
    itemRef,
    remove,
  };
};
