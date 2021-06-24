import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useMemo, useCallback, useLayoutEffect } from 'react';
var animationTimeout = 300;
var entranceTransition = 'transform 0.2s ease, opacity 0.2s ease';
var exitTransition = 'opacity 0.1s ease';

var animate = function animate(element, transforms, transition, done) {
  var fallbackTimeout = setTimeout(function () {
    if (done) {
      done();
    }
  }, animationTimeout);
  transforms.forEach(function (_ref) {
    var property = _ref.property,
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? '' : _ref$from;
    element.style.setProperty(property, from);
  });
  element.style.setProperty('transition', '');

  var transitionEndHandler = function transitionEndHandler(ev) {
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
        var property = _ref2.property,
            _ref2$to = _ref2.to,
            to = _ref2$to === void 0 ? '' : _ref2$to;
        element.style.setProperty(property, to);
      });
    });
  });
};

export var useFlipList = function useFlipList() {
  var refs = useMemo(function () {
    return new Map();
  }, []);
  var positions = useMemo(function () {
    return new Map();
  }, []);
  useLayoutEffect(function () {
    var animations = [];
    Array.from(refs.entries()).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          id = _ref4[0],
          element = _ref4[1];

      if (element) {
        var prevTop = positions.get(id);

        var _element$getBoundingC = element.getBoundingClientRect(),
            top = _element$getBoundingC.top,
            height = _element$getBoundingC.height;

        if (typeof prevTop === 'number' && prevTop !== top) {
          // Move animation
          animations.push({
            element: element,
            transition: entranceTransition,
            transforms: [{
              property: 'transform',
              from: "translateY(".concat(prevTop - top, "px)")
            }]
          });
        } else if (typeof prevTop !== 'number') {
          // Enter animation
          animations.push({
            element: element,
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
      var element = _ref5.element,
          transforms = _ref5.transforms,
          transition = _ref5.transition;
      animate(element, transforms, transition);
    });
  });
  var remove = useCallback(function (id, cb) {
    var element = refs.get(id);

    if (element) {
      // Removal animation
      animate(element, [{
        property: 'opacity',
        to: '0'
      }], exitTransition, cb);
    }
  }, [refs]);
  var itemRef = useCallback(function (id) {
    return function (ref) {
      refs.set(id, ref);
    };
  }, [refs]);
  return {
    itemRef: itemRef,
    remove: remove
  };
};