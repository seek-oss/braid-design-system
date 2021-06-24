import _jsx from "@babel/runtime/helpers/jsx";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
// Adapted version of https://github.com/streamich/react-use/blob/master/src/useMedia.ts
import React, { useEffect, useState, createContext } from 'react';
import { breakpoints } from '../../atoms/breakpoints';

const minWidthQuery = function minWidthQuery(breakpoint) {
  return window.matchMedia("(min-width: ".concat(breakpoint, "px)"));
};

const getCurrentBreakpoint = function getCurrentBreakpoint(tabletQuery, desktopQuery) {
  if (desktopQuery.matches) {
    return 'desktop';
  }

  if (tabletQuery.matches) {
    return 'tablet';
  }

  return 'mobile';
};

export var breakpointContext = /* #__PURE__*/createContext(null);
export function BreakpointProvider(_ref) {
  const children = _ref.children;
  const tablet = breakpoints.tablet,
      desktop = breakpoints.desktop;

  const _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useEffect(function () {
    let mounted = true;
    const tabletQuery = minWidthQuery(tablet);
    const desktopQuery = minWidthQuery(desktop);

    const onChange = function onChange() {
      if (!mounted) {
        return;
      }

      const newBreakPoint = getCurrentBreakpoint(tabletQuery, desktopQuery);

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
  return /* #__PURE__*/_jsx(breakpointContext.Provider, {
    value: state
  }, void 0, children);
}
BreakpointProvider.displayName = "BreakpointProvider";