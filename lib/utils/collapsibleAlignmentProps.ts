import { Children, ReactNode } from 'react';
import {
  ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from './responsiveRangeProps';
import { Align, alignToFlexAlign, alignYToFlexAlign, AlignY } from './align';
import {
  OptionalResponsiveValue,
  normalizeResponsiveValue,
} from '../atoms/sprinkles.css';

function invertAlignment<Alignment extends string>(alignment: Alignment) {
  if (alignment === 'flexStart') {
    return 'flexEnd';
  }

  if (alignment === 'flexEnd') {
    return 'flexStart';
  }

  return alignment;
}

const optimiseResponsiveArray = <Value extends string | null>(
  value: [Value, Value, Value],
) => {
  let lastValue: Value | undefined;

  return value.map((v) => {
    if (v !== lastValue && v !== null) {
      lastValue = v;
      return v;
    }

    return null;
  }) as [Value, Value | null, Value | null];
};

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
      display: optimiseResponsiveArray([
        collapseMobile ? 'block' : 'flex',
        collapseTablet ? 'block' : 'flex',
        'flex',
      ]),
      flexDirection: optimiseResponsiveArray([
        collapseMobile ? 'column' : 'row',
        // eslint-disable-next-line no-nested-ternary
        collapseTablet ? 'column' : rowReverseTablet ? 'rowReverse' : 'row',
        rowReverseDesktop ? 'rowReverse' : 'row',
      ]),
      justifyContent: align
        ? optimiseResponsiveArray([
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
      display: optimiseResponsiveArray([
        collapseMobile && justifyContentMobile !== 'flexStart'
          ? 'flex'
          : 'block',
        collapseTablet && justifyContentTablet !== 'flexStart'
          ? 'flex'
          : 'block',
        'block',
      ]),
      justifyContent: optimiseResponsiveArray([
        justifyContentMobile,
        justifyContentTablet,
        null,
      ]),
    },
  } as const;
}
