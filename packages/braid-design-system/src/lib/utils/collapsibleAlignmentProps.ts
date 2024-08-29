import {
  type OptionalResponsiveValue,
  normalizeResponsiveValue,
} from '../css/atoms/sprinkles.css';
import {
  type ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from './resolveResponsiveRangeProps';
import { optimizeResponsiveArray } from './optimizeResponsiveArray';
import { type Align, alignToFlexAlign } from './align';
import type { ResponsiveSpace } from '../css/atoms/atoms';

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
  space: ResponsiveSpace;
  collapseBelow?: ResponsiveRangeProps['below'];
  align?: OptionalResponsiveValue<Align>;
  reverse?: boolean;
}

export function resolveCollapsibleAlignmentProps({
  align,
  space,
  collapseBelow,
  reverse = false,
}: CollapsibleAlignmentProps) {
  const [collapseMobile, collapseTablet, collapseDesktop] =
    resolveResponsiveRangeProps({
      below: collapseBelow,
    });

  const rowReverse = reverse ? 'rowReverse' : 'row';
  const rowReverseTablet = collapseMobile && reverse;
  const rowReverseDesktop = (collapseMobile || collapseTablet) && reverse;
  const rowReverseWide =
    (collapseMobile || collapseTablet || collapseDesktop) && reverse;

  const normalizedAlign = normalizeResponsiveValue(
    alignToFlexAlign(align) || 'flexStart',
  );
  const {
    mobile: justifyContentMobile = 'flexStart',
    tablet: justifyContentTablet = justifyContentMobile,
    desktop: justifyContentDesktop = justifyContentTablet,
    wide: justifyContentWide = justifyContentDesktop,
  } = normalizedAlign;

  return {
    display: 'flex',
    gap: space,
    flexDirection: collapseBelow
      ? optimizeResponsiveArray([
          collapseMobile ? 'column' : 'row',
          // eslint-disable-next-line no-nested-ternary
          collapseTablet ? 'column' : rowReverseTablet ? 'rowReverse' : 'row',
          // eslint-disable-next-line no-nested-ternary
          collapseDesktop ? 'column' : rowReverseDesktop ? 'rowReverse' : 'row',
          rowReverseWide ? 'rowReverse' : 'row',
        ])
      : rowReverse,
    justifyContent: align
      ? optimizeResponsiveArray([
          justifyContentMobile,
          rowReverseTablet
            ? invertAlignment(justifyContentTablet)
            : justifyContentTablet,
          rowReverseDesktop
            ? invertAlignment(justifyContentDesktop)
            : justifyContentDesktop,
          rowReverseWide
            ? invertAlignment(justifyContentWide)
            : justifyContentWide,
        ])
      : undefined,
  } as const;
}
