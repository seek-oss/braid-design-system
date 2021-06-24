import { useEffect } from 'react';
import { hideFocusRingsDataAttribute } from './hideFocusRingsDataAttribute';

const hideFocusRings = function hideFocusRings() {
  return document.body.setAttribute(hideFocusRingsDataAttribute, 'true');
};

const showFocusRings = function showFocusRings() {
  return document.body.removeAttribute(hideFocusRingsDataAttribute);
};

export var useHideFocusRings = function useHideFocusRings() {
  const enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  useEffect(function () {
    if (enabled) {
      window.addEventListener('keydown', showFocusRings);
      window.addEventListener('mousemove', hideFocusRings);
      return function () {
        window.removeEventListener('keydown', showFocusRings);
        window.removeEventListener('mousemove', hideFocusRings);
      };
    }
  }, [enabled]);
};