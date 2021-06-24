import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { Children } from 'react';
import { normalizeResponsiveValue } from '../atoms/sprinkles.css';
import { resolveResponsiveRangeProps } from './responsiveRangeProps';
import { optimizeResponsiveArray } from './optimizeResponsiveArray';
import { alignToFlexAlign, alignYToFlexAlign } from './align';

function invertAlignment(alignment) {
  if (alignment === 'flexStart') {
    return 'flexEnd';
  }

  if (alignment === 'flexEnd') {
    return 'flexStart';
  }

  return alignment;
}

export function resolveCollapsibleAlignmentProps(_ref) {
  const align = _ref.align,
      alignY = _ref.alignY,
      collapseBelow = _ref.collapseBelow,
      reverse = _ref.reverse;

  const _resolveResponsiveRan = resolveResponsiveRangeProps({
    below: collapseBelow
  }),
      _resolveResponsiveRan2 = _slicedToArray(_resolveResponsiveRan, 2),
      collapseMobile = _resolveResponsiveRan2[0],
      collapseTablet = _resolveResponsiveRan2[1];

  const rowReverseTablet = collapseMobile && reverse;
  const rowReverseDesktop = (collapseMobile || collapseTablet) && reverse;
  const normalizedAlign = normalizeResponsiveValue(alignToFlexAlign(align) || 'flexStart');
  const _normalizedAlign$mobi = normalizedAlign.mobile,
      justifyContentMobile = _normalizedAlign$mobi === void 0 ? 'flexStart' : _normalizedAlign$mobi,
      _normalizedAlign$tabl = normalizedAlign.tablet,
      justifyContentTablet = _normalizedAlign$tabl === void 0 ? justifyContentMobile : _normalizedAlign$tabl,
      _normalizedAlign$desk = normalizedAlign.desktop,
      justifyContentDesktop = _normalizedAlign$desk === void 0 ? justifyContentTablet : _normalizedAlign$desk;
  return {
    collapseMobile,
    collapseTablet,
    orderChildren: function orderChildren(children) {
      const childrenArray = Children.toArray(children);
      return !collapseMobile && !collapseTablet && reverse ? childrenArray.reverse() : childrenArray;
    },
    collapsibleAlignmentProps: {
      display: optimizeResponsiveArray([collapseMobile ? 'block' : 'flex', collapseTablet ? 'block' : 'flex', 'flex']),
      flexDirection: optimizeResponsiveArray([collapseMobile ? 'column' : 'row', // eslint-disable-next-line no-nested-ternary
      collapseTablet ? 'column' : rowReverseTablet ? 'rowReverse' : 'row', rowReverseDesktop ? 'rowReverse' : 'row']),
      justifyContent: align ? optimizeResponsiveArray([justifyContentMobile, rowReverseTablet ? invertAlignment(justifyContentTablet) : justifyContentTablet, rowReverseDesktop ? invertAlignment(justifyContentDesktop) : justifyContentDesktop]) : undefined,
      alignItems: alignY ? alignYToFlexAlign(alignY) : undefined
    },
    collapsibleAlignmentChildProps: {
      display: optimizeResponsiveArray([collapseMobile && justifyContentMobile !== 'flexStart' ? 'flex' : 'block', collapseTablet && justifyContentTablet !== 'flexStart' ? 'flex' : 'block', 'block']),
      justifyContent: optimizeResponsiveArray([justifyContentMobile, justifyContentTablet])
    }
  };
}