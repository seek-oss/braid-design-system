import { ElementType } from 'react';
import assert from 'assert';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Theme } from 'treat/theme';
import {
  resolveResponsiveProp,
  ResponsiveProp,
} from '../../utils/responsiveProp';
import * as resetStyleRefs from '../../reset/reset.treat';
import * as styleRefs from './useBoxStyles.treat';

export type Space = keyof Theme['space'] | 'none';
export type ResponsiveSpace = ResponsiveProp<Space>;
type BorderRadiusFull = 'full';

export interface UseBoxStylesProps {
  component: ElementType | null;
  padding?: ResponsiveSpace;
  paddingX?: ResponsiveSpace;
  paddingY?: ResponsiveSpace;
  paddingTop?: ResponsiveSpace;
  paddingBottom?: ResponsiveSpace;
  paddingLeft?: ResponsiveSpace;
  paddingRight?: ResponsiveSpace;
  margin?: ResponsiveSpace;
  marginX?: ResponsiveSpace;
  marginY?: ResponsiveSpace;
  marginTop?: ResponsiveSpace;
  marginBottom?: ResponsiveSpace;
  marginLeft?: ResponsiveSpace;
  marginRight?: ResponsiveSpace;
  display?: ResponsiveProp<keyof typeof styleRefs.display>;
  flexDirection?: ResponsiveProp<keyof typeof styleRefs.flexDirection>;
  flexWrap?: keyof typeof styleRefs.flexWrap;
  flexShrink?: keyof typeof styleRefs.flexShrink;
  flexGrow?: keyof typeof styleRefs.flexGrow;
  alignItems?: ResponsiveProp<keyof typeof styleRefs.alignItems>;
  justifyContent?: ResponsiveProp<keyof typeof styleRefs.justifyContent>;
  textAlign?: ResponsiveProp<keyof typeof styleRefs.textAlign>;
  borderRadius?:
    | BorderRadiusFull
    | ResponsiveProp<
        Exclude<keyof typeof styleRefs.borderRadius, BorderRadiusFull>
      >;
  background?: keyof typeof styleRefs.background;
  boxShadow?: keyof typeof styleRefs.boxShadow;
  transform?: keyof typeof styleRefs.transform;
  transition?: keyof typeof styleRefs.transition;
  height?: keyof typeof styleRefs.height;
  width?: keyof typeof styleRefs.width;
  position?: keyof typeof styleRefs.position;
  cursor?: keyof typeof styleRefs.cursor;
  pointerEvents?: keyof typeof styleRefs.pointerEvents;
  overflow?: keyof typeof styleRefs.overflow;
  minWidth?: keyof typeof styleRefs.minWidth;
  maxWidth?: keyof typeof styleRefs.maxWidth;
  top?: keyof typeof styleRefs.top;
  bottom?: keyof typeof styleRefs.bottom;
  left?: keyof typeof styleRefs.left;
  right?: keyof typeof styleRefs.right;
  userSelect?: keyof typeof styleRefs.userSelect;
  outline?: keyof typeof styleRefs.outline;
  opacity?: keyof typeof styleRefs.opacity;
  zIndex?: keyof typeof styleRefs.zIndex;
  className?: Parameters<typeof classnames>[0];
}

export const useBoxStyles = ({
  component,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  flexDirection,
  flexWrap,
  flexShrink,
  flexGrow,
  alignItems,
  justifyContent,
  textAlign,
  borderRadius,
  background,
  boxShadow,
  transition,
  transform,
  height,
  width,
  position,
  cursor,
  pointerEvents,
  overflow,
  minWidth,
  maxWidth,
  top,
  bottom,
  right,
  left,
  userSelect,
  outline,
  opacity,
  zIndex,
  className,
}: UseBoxStylesProps) => {
  const resetStyles = useStyles(resetStyleRefs);
  const styles = useStyles(styleRefs);

  const resolvedPaddingTop = paddingTop || paddingY || padding;
  const resolvedPaddingBottom = paddingBottom || paddingY || padding;
  const resolvedPaddingLeft = paddingLeft || paddingX || padding;
  const resolvedPaddingRight = paddingRight || paddingX || padding;

  const resolvedMarginTop = marginTop || marginY || margin;
  const resolvedMarginBottom = marginBottom || marginY || margin;
  const resolvedMarginLeft = marginLeft || marginX || margin;
  const resolvedMarginRight = marginRight || marginX || margin;

  assert(
    !Array.isArray(borderRadius) || borderRadius.indexOf('full') === -1,
    '`full` is not a supported as a responsive prop.',
  );

  const resolvedBorderRadius =
    borderRadius && Array.isArray(borderRadius) && borderRadius.length > 0
      ? resolveResponsiveProp(
          borderRadius,
          styles.borderRadius,
          styles.borderRadiusTablet,
          styles.borderRadiusDesktop,
        )
      : // @ts-ignore
        styles.borderRadius[borderRadius!];

  return classnames(
    component !== null && resetStyles.base,
    component !== null &&
      resetStyles.element[component as keyof typeof resetStyleRefs.element],
    styles.background[background!],
    borderRadius !== undefined && resolvedBorderRadius,
    styles.boxShadow[boxShadow!],
    styles.transition[transition!],
    styles.transform[transform!],
    styles.height[height!],
    styles.width[width!],
    styles.position[position!],
    styles.cursor[cursor!],
    styles.pointerEvents[pointerEvents!],
    styles.overflow[overflow!],
    styles.minWidth[minWidth!],
    styles.maxWidth[maxWidth!],
    styles.top[top!],
    styles.bottom[bottom!],
    styles.right[right!],
    styles.left[left!],
    resolvedMarginTop !== undefined &&
      resolveResponsiveProp(
        resolvedMarginTop,
        styles.margin.top,
        styles.marginTablet.top,
        styles.marginDesktop.top,
      ),
    resolvedMarginBottom !== undefined &&
      resolveResponsiveProp(
        resolvedMarginBottom,
        styles.margin.bottom,
        styles.marginTablet.bottom,
        styles.marginDesktop.bottom,
      ),
    resolvedMarginLeft !== undefined &&
      resolveResponsiveProp(
        resolvedMarginLeft,
        styles.margin.left,
        styles.marginTablet.left,
        styles.marginDesktop.left,
      ),
    resolvedMarginRight !== undefined &&
      resolveResponsiveProp(
        resolvedMarginRight,
        styles.margin.right,
        styles.marginTablet.right,
        styles.marginDesktop.right,
      ),
    resolvedPaddingTop !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingTop,
        styles.padding.top,
        styles.paddingTablet.top,
        styles.paddingDesktop.top,
      ),
    resolvedPaddingBottom !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingBottom,
        styles.padding.bottom,
        styles.paddingTablet.bottom,
        styles.paddingDesktop.bottom,
      ),
    resolvedPaddingLeft !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingLeft,
        styles.padding.left,
        styles.paddingTablet.left,
        styles.paddingDesktop.left,
      ),
    resolvedPaddingRight !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingRight,
        styles.padding.right,
        styles.paddingTablet.right,
        styles.paddingDesktop.right,
      ),
    display !== undefined &&
      resolveResponsiveProp(
        display,
        styles.display,
        styles.displayTablet,
        styles.displayDesktop,
      ),
    flexDirection !== undefined &&
      resolveResponsiveProp(
        flexDirection,
        styles.flexDirection,
        styles.flexDirectionTablet,
        styles.flexDirectionDesktop,
      ),
    styles.flexWrap[flexWrap!],
    styles.flexShrink[flexShrink!],
    styles.flexGrow[flexGrow!],
    alignItems !== undefined &&
      resolveResponsiveProp(
        alignItems,
        styles.alignItems,
        styles.alignItemsTablet,
        styles.alignItemsDesktop,
      ),
    justifyContent !== undefined &&
      resolveResponsiveProp(
        justifyContent,
        styles.justifyContent,
        styles.justifyContentTablet,
        styles.justifyContentDesktop,
      ),
    textAlign !== undefined &&
      resolveResponsiveProp(
        textAlign,
        styles.textAlign,
        styles.textAlignTablet,
        styles.textAlignDesktop,
      ),
    styles.userSelect[userSelect!],
    styles.outline[outline!],
    styles.opacity[opacity!],
    styles.zIndex[zIndex!],
    className,
  );
};
