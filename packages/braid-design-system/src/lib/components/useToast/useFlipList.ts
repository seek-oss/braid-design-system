import { useMemo, useCallback } from 'react';

import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';

const animationTimeout = 300;

const entranceTransition = 'transform 0.2s ease, opacity 0.2s ease';
const exitTransition = 'opacity 0.1s ease';

interface Transform {
  property: 'opacity' | 'transform' | 'scale';
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

export const useFlipList = () => {
  const refs = useMemo(() => new Map<string, HTMLElement | null>(), []);
  const positions = useMemo(() => new Map<string, number>(), []);

  useIsomorphicLayoutEffect(() => {
    const animations: Array<{
      element: HTMLElement;
      transforms: Transform[];
      transition: string;
    }> = [];

    Array.from(refs.entries()).forEach(([toastKey, element]) => {
      if (element) {
        const prevTop = positions.get(toastKey);
        const { top, height } = element.getBoundingClientRect();

        if (typeof prevTop === 'number' && prevTop !== top) {
          // Move animation
          animations.push({
            element,
            transition: entranceTransition,
            transforms: [
              {
                property: 'transform',
                from: `translateY(${prevTop - top}px)`,
              },
            ],
          });
        } else if (typeof prevTop !== 'number') {
          // Enter animation
          animations.push({
            element,
            transition: entranceTransition,
            transforms: [
              {
                property: 'transform',
                from: `translateY(${height}px)`,
              },
              {
                property: 'opacity',
                from: '0',
              },
            ],
          });
        }

        positions.set(toastKey, element.getBoundingClientRect().top);
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
        // Removal animation
        animate(
          element,
          [
            {
              property: 'opacity',
              to: '0',
            },
          ],
          exitTransition,
          cb,
        );
      }
    },
    [refs],
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
