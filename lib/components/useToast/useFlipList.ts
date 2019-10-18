import { useMemo, useCallback, useLayoutEffect } from 'react';

interface Transform {
  property: 'opacity' | 'transform';
  transition: string;
  from: string;
  to?: string;
}

const animate = (
  element: HTMLElement,
  transforms: Transform[],
  done?: () => void,
) => {
  const transitions: string[] = [];

  transforms.forEach(({ transition, property, from }) => {
    element.style.setProperty(property, from);
    transitions.push(transition);
  });
  element.style.setProperty('transition', '');

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      if (done) {
        element.addEventListener('transitionend', done);
      }

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
    const animations: Array<{ element: HTMLElement; y: number }> = [];

    Array.from(refs.entries()).forEach(([id, element]) => {
      if (element) {
        const prevTop = positions.get(id);
        const { top, height } = element.getBoundingClientRect();

        if (typeof prevTop === 'number' && prevTop !== top) {
          console.log(id, 'moved');

          animations.push({ element, y: prevTop - top });
        } else {
          console.log(id, 'entered');

          animations.push({ element, y: height });
        }

        positions.set(id, element.getBoundingClientRect().top);
      } else {
        console.log(id, 'exited');
      }
    });

    animations.forEach(({ element, y }) => {
      animate(element, [
        {
          property: 'transform',
          from: `translateY(${y}px)`,
          transition: 'transform 1s ease',
        },
      ]);
    });
  });

  const remove = useCallback((id: string, cb: () => void) => {
    const element = refs.get(id);

    if (element) {
      animate(
        element,
        [
          {
            property: 'opacity',
            from: '1',
            to: '0',
            transition: 'opacity 1s ease',
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
