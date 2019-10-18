import { useMemo, useCallback, useLayoutEffect } from 'react';

interface Transform {
  property: 'opacity' | 'transform' | 'scale';
  transition: string;
  from?: string;
  to?: string;
}

const animate = (
  element: HTMLElement,
  transforms: Transform[],
  done?: () => void,
) => {
  const transitions: string[] = [];

  transforms.forEach(({ transition, property, from = '' }) => {
    element.style.setProperty(property, from);
    transitions.push(transition);
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
  };

  element.addEventListener('transitionend', transitionEndHandler);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      element.style.setProperty('transition', transitions.join(','));

      transforms.forEach(({ property, to = '' }) => {
        element.style.setProperty(property, to);
      });
    });
  });
};

export const useFlipList = () => {
  const refs = useMemo(() => new Map<string, HTMLElement | null>(), []);
  const positions = useMemo(() => new Map<string, number>(), []);

  useLayoutEffect(() => {
    const animations: Array<{
      element: HTMLElement;
      transforms: Transform[];
    }> = [];

    Array.from(refs.entries()).forEach(([id, element]) => {
      if (element) {
        const prevTop = positions.get(id);
        const { top, height } = element.getBoundingClientRect();

        if (typeof prevTop === 'number' && prevTop !== top) {
          // Move animation
          animations.push({
            element,
            transforms: [
              {
                property: 'transform',
                from: `translateY(${prevTop - top}px)`,
                transition: 'transform 0.25s ease',
              },
            ],
          });
        } else if (typeof prevTop !== 'number') {
          // Enter animation
          animations.push({
            element,
            transforms: [
              {
                property: 'transform',
                from: `translateY(${height}px)`,
                transition: 'transform 0.25s ease',
              },
              {
                property: 'opacity',
                from: '0',
                transition: 'opacity 0.25s ease',
              },
            ],
          });
        }

        positions.set(id, element.getBoundingClientRect().top);
      } else {
        refs.delete(id);
      }
    });

    animations.forEach(({ element, transforms }) => {
      animate(element, transforms);
    });
  });

  const remove = useCallback((id: string, cb: () => void) => {
    const element = refs.get(id);

    if (element) {
      // Removal animation
      animate(
        element,
        [
          {
            property: 'opacity',
            to: '0',
            transition: 'opacity 0.25s ease',
          },
          {
            property: 'transform',
            to: 'translateY(50%)',
            transition: 'transform 0.25s ease',
          },
        ],
        cb,
      );
    }
  }, []);

  const itemRef = useCallback(
    (id: string) => (ref: HTMLElement | null) => {
      refs.set(id, ref);
    },
    [],
  );

  return {
    itemRef,
    remove,
  };
};
