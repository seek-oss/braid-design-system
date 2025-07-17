import { useMemo, useCallback } from 'react';

import { vars } from '../../../entries/css';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { px } from '../../utils/px';

import * as styles from './Toast.css';

const animationTimeout = 200;

const entranceTransition =
  'opacity 0.2s ease, transform 0.2s ease, height 0.2s ease';
const exitTransition = 'opacity 0.2s ease, height 0.2s ease';

const visibleStackedToasts = 3;

type LifecycleState = undefined | 'entered' | 'exiting';
type TransitionType = 'move' | 'enter' | 'becoming-first';

interface Transform {
  property: 'opacity' | 'transform' | 'scale' | 'height' | 'className';
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
    if (property === 'className') {
      if (from) {
        element.classList.add(from);
      }
    } else {
      element.style.setProperty(property, from);
    }
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

      transforms.forEach(({ property, from = '', to = '' }) => {
        if (property === 'className') {
          if (from) {
            element.classList.remove(from);
          }
          if (to) {
            element.classList.add(to);
          }
        } else {
          element.style.setProperty(property, to);
        }
      });
    });
  });
};

export const useFlipList = (expanded: boolean) => {
  const refs = useMemo(() => new Map<string, HTMLElement | null>(), []);
  const toastStates = useMemo(() => new Map<string, LifecycleState>(), []);

  useIsomorphicLayoutEffect(() => {
    const animations: Array<{
      element: HTMLElement;
      transforms: Transform[];
      transition: string;
    }> = [];

    // Filter out exiting toasts for position calculations
    const activeToasts = Array.from(refs.entries()).filter(
      (entry): entry is [string, HTMLElement] => {
        const [key, value] = entry;
        return value !== null && toastStates.get(key) !== 'exiting';
      },
    );

    const exitingToasts = Array.from(refs.entries()).filter(
      ([key, value]) => !value || toastStates.get(key) === 'exiting',
    );

    activeToasts.forEach(([toastKey, element], index) => {
      const toastsLength = activeToasts.length;
      const position = toastsLength - index - 1;

      const { opacity, transform } = element.style;
      const height = element.getBoundingClientRect().height;
      element.style.height = 'auto';
      const fullHeight = element.getBoundingClientRect().height;
      element.style.height = px(height);

      const collapsedScale = position === 1 ? 0.9 : 0.8;

      let animationState: TransitionType;
      if (position > 0) {
        animationState = 'move';
      } else if (toastStates.get(toastKey) !== 'entered') {
        animationState = 'enter';
      } else {
        animationState = 'becoming-first';
      }

      switch (animationState) {
        case 'move':
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
              {
                property: 'className',
                from: expanded ? styles.collapsed : undefined,
                to: !expanded && position > 0 ? styles.collapsed : undefined,
              },
            ],
          });
          break;

        case 'enter':
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
          break;

        case 'becoming-first':
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
              {
                property: 'className',
                from: expanded ? styles.collapsed : undefined,
                to: undefined,
              },
            ],
          });
          break;
      }

      toastStates.set(toastKey, 'entered');
    });

    exitingToasts.forEach(([toastKey]) => {
      refs.delete(toastKey);
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
