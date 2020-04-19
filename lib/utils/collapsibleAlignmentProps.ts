import { Children, ReactNode } from 'react';
import {
  ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from './responsiveRangeProps';
import { ResponsiveProp, normaliseResponsiveProp } from './responsiveProp';
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
  align?: ResponsiveProp<Align>;
  alignY?: ResponsiveProp<AlignY>;
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

  const [
    justifyContentMobile,
    justifyContentTablet,
    justifyContentDesktop,
  ] = normaliseResponsiveProp(alignToFlexAlign(align) || 'flexStart');

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
        ? ([
            justifyContentMobile,
            rowReverseTablet
              ? invertAlignment(justifyContentTablet)
              : justifyContentTablet,
            rowReverseDesktop
              ? invertAlignment(justifyContentDesktop)
              : justifyContentDesktop,
          ] as const)
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
