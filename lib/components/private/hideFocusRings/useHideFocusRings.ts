import { useEffect } from 'react';
import { hideFocusRingsDataAttribute } from './hideFocusRingsDataAttribute';

const hideFocusRings = () =>
  document.body.setAttribute(hideFocusRingsDataAttribute, 'true');

const showFocusRings = () =>
  document.body.removeAttribute(hideFocusRingsDataAttribute);

export const useHideFocusRings = (enabled: boolean = true) => {
  useEffect(() => {
    if (enabled) {
      window.addEventListener('keydown', showFocusRings);
      window.addEventListener('mousemove', hideFocusRings);

      return () => {
        window.removeEventListener('keydown', showFocusRings);
        window.removeEventListener('mousemove', hideFocusRings);
      };
    }
  }, [enabled]);
};
