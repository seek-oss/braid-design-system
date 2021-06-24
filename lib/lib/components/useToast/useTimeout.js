import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useEffect, useState, useRef, useCallback } from 'react';
export var useTimeout = function useTimeout(_ref) {
  var onTimeout = _ref.onTimeout,
      duration = _ref.duration;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      activated = _useState2[0],
      setActivated = _useState2[1];

  var timeoutRef = useRef();
  var stopTimeout = useCallback(function () {
    window.clearTimeout(timeoutRef.current);
    setActivated(false);
  }, []);
  useEffect(function () {
    if (activated) {
      timeoutRef.current = window.setTimeout(function () {
        onTimeout();
      }, duration);
      return function () {
        stopTimeout();
      };
    }
  }, [onTimeout, activated, duration, stopTimeout]);
  var startTimeout = useCallback(function () {
    setActivated(true);
  }, []);
  return {
    stopTimeout: stopTimeout,
    startTimeout: startTimeout
  };
};