import {
  type Align,
  type AlignY,
  alignToFlexAlign,
  alignYToFlexAlign,
} from './align';
import { optimizeResponsiveArray } from './optimizeResponsiveArray';
import {
  type ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from './resolveResponsiveRangeProps';

import {
  type OptionalResponsiveValue,
  normalizeResponsiveValue,
} from '../css/atoms/sprinkles.css';

function invertAlignment<Alignment extends string>(alignment: Alignment) {
  if (alignment === 'flexStart') {
    return 'flexEnd';
  }

  if (alignment === 'flexEnd') {
    return 'flexStart';
  }

  return alignment;
}

export type CollapsibleAlignmentProps = {
  align?: OptionalResponsiveValue<Align>;
  alignY?: OptionalResponsiveValue<AlignY>;
} & (
  | {
      reverse?: never;
      collapseBelow?: ResponsiveRangeProps['below'];
    }
  | {
      reverse: boolean;
      collapseBelow: ResponsiveRangeProps['below'];
    }
);

interface PrivateCollapsibleAlignmentConfig {
  /**
   * Sets flex items to be only as tall as their content (using `flexStart`)
   * rather than growing to fit the largest sibling (using the default `stretch`).
   */
  inlineItems: boolean;
}

export function resolveCollapsibleAlignmentProps({
  align,
  alignY,
  collapseBelow,
  reverse,
  inlineItems = false,
}: CollapsibleAlignmentProps & PrivateCollapsibleAlignmentConfig) {
  const [collapseMobile, collapseTablet, collapseDesktop] =
    resolveResponsiveRangeProps({
      below: collapseBelow,
    });

  const defaultAlignItems = inlineItems ? 'flexStart' : undefined;

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
  const normalizedAlignY = normalizeResponsiveValue(
    nonCollapsedAlignItems || {},
  );
  const {
    mobile: alignYMobile = defaultAlignItems || null,
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
    wide: alignWide = alignDesktop,
  } = normalizedAlign;

  // COLLAPSED HORIZONTAL ALIGNMENT
  const collapsedAlignItems = [
    collapseMobile && alignMobile === 'flexStart' ? null : alignMobile,
    collapseTablet && alignTablet === 'flexStart' ? null : alignTablet,
    collapseDesktop && alignDesktop === 'flexStart' ? null : alignDesktop,
    // wide doesnt collapse, no check needed here
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
            alignMobile, // mobile doesnt reverse, no check needed here
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
            alignYWide, // wide doesnt collapse, no check needed here
          ])
        : nonCollapsedAlignItems,
    },
  } as const;
}
