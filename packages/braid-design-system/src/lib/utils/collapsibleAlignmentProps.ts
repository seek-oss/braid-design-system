import {
  type OptionalResponsiveValue,
  normalizeResponsiveValue,
} from '../css/atoms/sprinkles.css';
import {
  type ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from './resolveResponsiveRangeProps';
import { optimizeResponsiveArray } from './optimizeResponsiveArray';
import {
  type Align,
  type AlignY,
  alignToFlexAlign,
  alignYToFlexAlign,
} from './align';

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

interface WithDefaultAlignItems {
  defaultAlignItems: 'flexStart' | 'center' | 'flexEnd' | 'stretch';
}

export function resolveCollapsibleAlignmentProps({
  align,
  alignY,
  collapseBelow,
  reverse,
  defaultAlignItems,
}: CollapsibleAlignmentProps & WithDefaultAlignItems) {
  const [collapseMobile, collapseTablet, collapseDesktop] =
    resolveResponsiveRangeProps({
      below: collapseBelow,
    });

  // DIRECTION
  const rowDirection = collapseBelow && reverse ? 'rowReverse' : 'row';
  const flexDirection = [
    collapseMobile ? 'column' : 'row',
    collapseTablet ? 'column' : rowDirection,
    collapseDesktop ? 'column' : rowDirection,
    rowDirection,
  ] as const;

  // VERTICAL ALIGNMENT
  const nonCollapsedAlignItems = alignYToFlexAlign(alignY) || defaultAlignItems;
  const normalizedAlignY = normalizeResponsiveValue(nonCollapsedAlignItems);
  const {
    mobile: alignYMobile = defaultAlignItems,
    tablet: alignYTablet = alignYMobile,
    desktop: alignYDesktop = alignYTablet,
    wide: alignYWide = alignYDesktop,
  } = normalizedAlignY;

  // HORIZONTAL ALIGNMENT
  const normalizedAlign = normalizeResponsiveValue(
    alignToFlexAlign(align) || 'flexStart',
  );
  const {
    mobile: alignMobile = 'flexStart',
    tablet: alignTablet = alignMobile,
    desktop: alignDesktop = alignTablet,
    wide: alignWide = alignTablet,
  } = normalizedAlign;

  // COLLAPSED HORIZONTAL ALIGNMENT
  const collapsedAlignItems = [
    collapseMobile && alignMobile === 'flexStart' ? 'stretch' : alignMobile,
    collapseTablet && alignTablet === 'flexStart' ? 'stretch' : alignTablet,
    collapseDesktop && alignDesktop === 'flexStart' ? 'stretch' : alignDesktop,
    alignYWide,
  ] as const;

  return {
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    collapsibleAlignmentProps: {
      display: 'flex',
      flexDirection: optimizeResponsiveArray(flexDirection),
      justifyContent: align
        ? optimizeResponsiveArray([
            alignMobile,
            reverse ? invertAlignment(alignTablet) : alignTablet,
            reverse ? invertAlignment(alignDesktop) : alignDesktop,
            reverse ? invertAlignment(alignWide) : alignWide,
          ])
        : undefined,
      alignItems: collapseBelow
        ? optimizeResponsiveArray([
            collapseMobile ? collapsedAlignItems[0] : alignYMobile,
            collapseTablet ? collapsedAlignItems[1] : alignYTablet,
            collapseDesktop ? collapsedAlignItems[2] : alignYDesktop,
            collapsedAlignItems[3],
          ])
        : nonCollapsedAlignItems,
    },
  } as const;
}
