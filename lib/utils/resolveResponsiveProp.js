import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import clsx from 'clsx';
import { normalizeResponsiveValue } from '../atoms/sprinkles.css';
import { optimizeResponsiveArray } from './optimizeResponsiveArray';
export var resolveResponsiveProp = function resolveResponsiveProp(value, mobileAtoms, tabletAtoms, desktopAtoms) {
  var _normalized$mobile, _normalized$tablet, _normalized$desktop;

  if (typeof value === 'string' || typeof value === 'number') {
    return mobileAtoms[value];
  }

  var normalized = normalizeResponsiveValue(value);

  var _optimizeResponsiveAr = optimizeResponsiveArray([(_normalized$mobile = normalized.mobile) !== null && _normalized$mobile !== void 0 ? _normalized$mobile : null, (_normalized$tablet = normalized.tablet) !== null && _normalized$tablet !== void 0 ? _normalized$tablet : null, (_normalized$desktop = normalized.desktop) !== null && _normalized$desktop !== void 0 ? _normalized$desktop : null]),
      _optimizeResponsiveAr2 = _slicedToArray(_optimizeResponsiveAr, 3),
      mobile = _optimizeResponsiveAr2[0],
      tablet = _optimizeResponsiveAr2[1],
      desktop = _optimizeResponsiveAr2[2];

  var mobileAtom = mobileAtoms[mobile];
  var tabletAtom = tabletAtoms[tablet];
  var desktopAtom = desktopAtoms[desktop];
  return clsx(mobileAtom, tabletAtom, desktopAtom);
};