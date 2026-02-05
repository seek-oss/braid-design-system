import { useMemo, useCallback } from 'react';

import { vars } from '../../../css';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { px } from '../../utils/px';

import * as styles from './Toast.css';

const animationTimeout = 200;
const baseTransition =
  'opacity 0.2s ease, transform 0.2s ease, height 0.2s ease';
const exitTransition = 'opacity 0.2s ease, height 0.2s ease';
const visibleStackedToasts = 3;

type LifecycleState = undefined | 'entered' | 'exiting';
type TransitionType = 'expand' | 'collapse' | 'enter' | 'become-first';

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

    const getCurrentAndFullHeight = (element: HTMLElement) => {
      const currentHeight = element.getBoundingClientRect().height;
      element.style.height = 'auto';
      const fullHeight = element.getBoundingClientRect().height;
      element.style.height = px(currentHeight);
      return { currentHeight, fullHeight };
    };

    const activeToasts: Array<[string, HTMLElement]> = [];

    // Filter out exiting toasts for position calculations
    Array.from(refs.entries()).forEach(([toastKey, element]) => {
      if (element !== null) {
        if (toastStates.get(toastKey) === 'exiting') {
          refs.delete(toastKey);
        } else {
          activeToasts.push([toastKey, element]);
        }
      }
    });

    activeToasts.forEach(([toastKey, element], index) => {
      const position = activeToasts.length - index - 1;
      const { opacity, transform } = element.style;
      const { currentHeight, fullHeight } = getCurrentAndFullHeight(element);

      let animationState: TransitionType;
      if (position > 0) {
        animationState = expanded ? 'expand' : 'collapse';
      } else if (toastStates.get(toastKey) !== 'entered') {
        animationState = 'enter';
      } else {
        animationState = 'become-first';
      }

      switch (animationState) {
        case 'expand':
          animations.push({
            element,
            transition: baseTransition,
            transforms: [
              {
                property: 'height',
                from: px(currentHeight),
                to: px(fullHeight),
              },
              { property: 'transform', from: transform, to: undefined },
              { property: 'opacity', from: opacity, to: '1' },
              { property: 'className', from: styles.collapsed, to: undefined },
            ],
          });
          break;

        case 'collapse':
          const visible = position < visibleStackedToasts;
          const scale = position === 1 ? 0.9 : 0.8;

          animations.push({
            element,
            transition: baseTransition,
            transforms: [
              {
                property: 'height',
                from: px(currentHeight),
                to: visible ? vars.space.small : '0px',
              },
              {
                property: 'transform',
                from: transform,
                to: `scaleX(${scale})`,
              },
              { property: 'opacity', from: opacity, to: visible ? '1' : '0' },
              {
                property: 'className',
                from: undefined,
                to: position > 0 ? styles.collapsed : undefined,
              },
            ],
          });
          break;

        case 'enter':
          animations.push({
            element,
            transition: baseTransition,
            transforms: [
              { property: 'opacity', from: '0' },
              { property: 'height', from: '0px', to: px(fullHeight) },
            ],
          });
          break;

        case 'become-first':
          animations.push({
            element,
            transition: baseTransition,
            transforms: [
              {
                property: 'height',
                from: px(currentHeight),
                to: px(fullHeight),
              },
              { property: 'transform', from: transform },
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

    animations.forEach(({ element, transforms, transition }) => {
      animate(element, transforms, transition);
    });
  });

  const remove = useCallback(
    (toastKey: string, cb: () => void) => {
      const element = refs.get(toastKey);
      if (element) {
        toastStates.set(toastKey, 'exiting');
        animate(
          element,
          [
            { property: 'opacity', to: '0' },
            { property: 'height', from: element.style.height, to: '0px' },
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

  return { itemRef, remove };
};
