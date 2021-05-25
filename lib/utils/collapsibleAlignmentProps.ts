import { Children, ReactNode } from 'react';
import {
  ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from './responsiveRangeProps';
import { Align, alignToFlexAlign, alignYToFlexAlign, AlignY } from './align';
import {
  OptionalResponsiveValue,
  normalizeResponsiveValue,
} from '../sprinkles/sprinkles.css';

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
      display: [
        collapseMobile ? 'block' : 'flex',
        collapseTablet ? 'block' : 'flex',
        'flex',
      ],
      flexDirection: [
        collapseMobile ? 'column' : 'row',
        // eslint-disable-next-line no-nested-ternary
        collapseTablet ? 'column' : rowReverseTablet ? 'rowReverse' : 'row',
        rowReverseDesktop ? 'rowReverse' : 'row',
      ],
      justifyContent: align
        ? {
            mobile: justifyContentMobile,
            tablet: rowReverseTablet
              ? invertAlignment(justifyContentTablet)
              : justifyContentTablet,
            desktop: rowReverseDesktop
              ? invertAlignment(justifyContentDesktop)
              : justifyContentDesktop,
          }
        : undefined,
      alignItems: alignY ? alignYToFlexAlign(alignY) : undefined,
    },
    collapsibleAlignmentChildProps: {
      display: [
        collapseMobile && justifyContentMobile !== 'flexStart'
          ? 'flex'
          : 'block',
        collapseTablet && justifyContentTablet !== 'flexStart'
          ? 'flex'
          : 'block',
        'block',
      ],
      justifyContent: [justifyContentMobile, justifyContentTablet],
    },
  } as const;
}
