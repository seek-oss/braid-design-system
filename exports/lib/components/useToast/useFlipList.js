import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useMemo, useCallback, useLayoutEffect } from 'react';
const animationTimeout = 300;
const entranceTransition = 'transform 0.2s ease, opacity 0.2s ease';
const exitTransition = 'opacity 0.1s ease';

const animate = function animate(element, transforms, transition, done) {
  const fallbackTimeout = setTimeout(function () {
    if (done) {
      done();
    }
  }, animationTimeout);
  transforms.forEach(function (_ref) {
    const property = _ref.property,
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? '' : _ref$from;
    element.style.setProperty(property, from);
  });
  element.style.setProperty('transition', '');

  const transitionEndHandler = function transitionEndHandler(ev) {
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
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      element.style.setProperty('transition', transition);
      transforms.forEach(function (_ref2) {
        const property = _ref2.property,
            _ref2$to = _ref2.to,
            to = _ref2$to === void 0 ? '' : _ref2$to;
        element.style.setProperty(property, to);
      });
    });
  });
};

export var useFlipList = function useFlipList() {
  const refs = useMemo(function () {
    return new Map();
  }, []);
  const positions = useMemo(function () {
    return new Map();
  }, []);
  useLayoutEffect(function () {
    const animations = [];
    Array.from(refs.entries()).forEach(function (_ref3) {
      const _ref4 = _slicedToArray(_ref3, 2),
          id = _ref4[0],
          element = _ref4[1];

      if (element) {
        const prevTop = positions.get(id);

        const _element$getBoundingC = element.getBoundingClientRect(),
            top = _element$getBoundingC.top,
            height = _element$getBoundingC.height;

        if (typeof prevTop === 'number' && prevTop !== top) {
          // Move animation
          animations.push({
            element,
            transition: entranceTransition,
            transforms: [{
              property: 'transform',
              from: "translateY(".concat(prevTop - top, "px)")
            }]
          });
        } else if (typeof prevTop !== 'number') {
          // Enter animation
          animations.push({
            element,
            transition: entranceTransition,
            transforms: [{
              property: 'transform',
              from: "translateY(".concat(height, "px)")
            }, {
              property: 'opacity',
              from: '0'
            }]
          });
        }

        positions.set(id, element.getBoundingClientRect().top);
      } else {
        refs.delete(id);
      }
    });
    animations.forEach(function (_ref5) {
      const element = _ref5.element,
          transforms = _ref5.transforms,
          transition = _ref5.transition;
      animate(element, transforms, transition);
    });
  });
  const remove = useCallback(function (id, cb) {
    const element = refs.get(id);

    if (element) {
      // Removal animation
      animate(element, [{
        property: 'opacity',
        to: '0'
      }], exitTransition, cb);
    }
  }, [refs]);
  const itemRef = useCallback(function (id) {
    return function (ref) {
      refs.set(id, ref);
    };
  }, [refs]);
  return {
    itemRef,
    remove
  };
};