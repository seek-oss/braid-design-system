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

const resolveDirection = ({
  collapse,
  reverse,
}: {
  collapse?: boolean;
  reverse: boolean;
}) => {
  if (collapse) {
    return 'column';
  }
  return reverse ? 'rowReverse' : 'row';
};

export interface CollapsibleAlignmentProps {
  space: ResponsiveSpace;
  collapseBelow?: ResponsiveRangeProps['below'];
  align?: OptionalResponsiveValue<Align>;
  alignY?: OptionalResponsiveValue<AlignY>;
  reverse?: boolean;
}

export function resolveCollapsibleAlignmentProps({
  align,
  alignY,
  space,
  collapseBelow,
  reverse = false,
}: CollapsibleAlignmentProps) {
  const [collapseMobile, collapseTablet, collapseDesktop] =
    resolveResponsiveRangeProps({
      below: collapseBelow,
    });

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
          resolveDirection({ collapse: collapseMobile, reverse }),
          resolveDirection({
            collapse: collapseTablet,
            reverse: rowReverseTablet,
          }),
          resolveDirection({
            collapse: collapseDesktop,
            reverse: rowReverseDesktop,
          }),
          resolveDirection({ reverse: rowReverseWide }),
        ])
      : resolveDirection({ reverse }),
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
    alignItems: alignY ? alignYToFlexAlign(alignY) : undefined,
  } as const;
}
