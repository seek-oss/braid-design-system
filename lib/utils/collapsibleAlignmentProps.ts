import { Children, ReactNode } from 'react';
import {
  OptionalResponsiveValue,
  normalizeResponsiveValue,
} from '../css/atoms/sprinkles.css';
import {
  ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from './responsiveRangeProps';
import { optimizeResponsiveArray } from './optimizeResponsiveArray';
import { Align, alignToFlexAlign, alignYToFlexAlign, AlignY } from './align';

function invertAlignment<Alignment extends string>(alignment: Alignment) {
  if (alignment === 'flexStart') {
    return 'flexEnd';
  }

  if (alignment === 'flexEnd') {
    return 'flexStart';
  }

  return alignment;
}

export interface CollapsibleAlignmentProps {
  collapseBelow?: ResponsiveRangeProps['below'];
  align?: OptionalResponsiveValue<Align>;
  alignY?: OptionalResponsiveValue<AlignY>;
  reverse?: boolean;
}

export function resolveCollapsibleAlignmentProps({
  align,
  alignY,
  collapseBelow,
  reverse,
}: CollapsibleAlignmentProps) {
  const [collapseMobile, collapseTablet] = resolveResponsiveRangeProps({
    below: collapseBelow,
  });

  const rowReverseTablet = collapseMobile && reverse;
  const rowReverseDesktop = (collapseMobile || collapseTablet) && reverse;

  const normalizedAlign = normalizeResponsiveValue(
    alignToFlexAlign(align) || 'flexStart',
  );
  const {
    mobile: justifyContentMobile = 'flexStart',
    tablet: justifyContentTablet = justifyContentMobile,
    desktop: justifyContentDesktop = justifyContentTablet,
  } = normalizedAlign;

  return {
    collapseMobile,
    collapseTablet,
    orderChildren: (children: ReactNode) => {
      const childrenArray = Children.toArray(children);
      return !collapseMobile && !collapseTablet && reverse
        ? childrenArray.reverse()
        : childrenArray;
    },
    collapsibleAlignmentProps: {
      display: optimizeResponsiveArray([
        collapseMobile ? 'block' : 'flex',
        collapseTablet ? 'block' : 'flex',
        'flex',
      ]),
      flexDirection: optimizeResponsiveArray([
        collapseMobile ? 'column' : 'row',
        // eslint-disable-next-line no-nested-ternary
        collapseTablet ? 'column' : rowReverseTablet ? 'rowReverse' : 'row',
        rowReverseDesktop ? 'rowReverse' : 'row',
      ]),
      justifyContent: align
        ? optimizeResponsiveArray([
            justifyContentMobile,
            rowReverseTablet
              ? invertAlignment(justifyContentTablet)
              : justifyContentTablet,
            rowReverseDesktop
              ? invertAlignment(justifyContentDesktop)
              : justifyContentDesktop,
          ])
        : undefined,
      alignItems: alignY ? alignYToFlexAlign(alignY) : undefined,
    },
    collapsibleAlignmentChildProps: {
      display: optimizeResponsiveArray([
        collapseMobile && justifyContentMobile !== 'flexStart'
          ? 'flex'
          : 'block',
        collapseTablet && justifyContentTablet !== 'flexStart'
          ? 'flex'
          : 'block',
        'block',
      ]),
      justifyContent: optimizeResponsiveArray([
        justifyContentMobile,
        justifyContentTablet,
      ]),
    },
  } as const;
}
