import _jsx from "@babel/runtime/helpers/jsx";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
// Adapted version of https://github.com/streamich/react-use/blob/master/src/useMedia.ts
import React, { useEffect, useState, createContext } from 'react';
import { breakpoints } from '../../atoms/breakpoints';

var minWidthQuery = function minWidthQuery(breakpoint) {
  return window.matchMedia("(min-width: ".concat(breakpoint, "px)"));
};

var getCurrentBreakpoint = function getCurrentBreakpoint(tabletQuery, desktopQuery) {
  if (desktopQuery.matches) {
    return 'desktop';
  }

  if (tabletQuery.matches) {
    return 'tablet';
  }

  return 'mobile';
};

export var breakpointContext = /*#__PURE__*/createContext(null);
export function BreakpointProvider(_ref) {
  var children = _ref.children;
  var tablet = breakpoints.tablet,
      desktop = breakpoints.desktop;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useEffect(function () {
    var mounted = true;
    var tabletQuery = minWidthQuery(tablet);
    var desktopQuery = minWidthQuery(desktop);

    var onChange = function onChange() {
      if (!mounted) {
        return;
      }

      var newBreakPoint = getCurrentBreakpoint(tabletQuery, desktopQuery);

      if (newBreakPoint !== state) {
        setState(newBreakPoint);
      }
    };

    tabletQuery.addListener(onChange);
    desktopQuery.addListener(onChange);
    onChange();
    return function () {
      mounted = false;
      tabletQuery.removeListener(onChange);
      desktopQuery.removeListener(onChange);
    };
  }, [tablet, desktop, state]);
  return /*#__PURE__*/_jsx(breakpointContext.Provider, {
    value: state
  }, void 0, children);
}
BreakpointProvider.displayName = "BreakpointProvider";