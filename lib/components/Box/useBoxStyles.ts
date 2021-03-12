import { ElementType } from 'react';
import assert from 'assert';
import classnames from 'classnames';
import {
  resolveResponsiveProp,
  ResponsiveProp,
} from '../../utils/responsiveProp';
import * as resetStyles from '../../reset/reset.css';
import * as styles from './useBoxStyles.css';

export type Space = keyof typeof styles['padding']['bottom'];
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
  display?: ResponsiveProp<keyof typeof styles.display>;
  flexDirection?: ResponsiveProp<keyof typeof styles.flexDirection>;
  flexWrap?: keyof typeof styles.flexWrap;
  flexShrink?: keyof typeof styles.flexShrink;
  flexGrow?: keyof typeof styles.flexGrow;
  alignItems?: ResponsiveProp<keyof typeof styles.alignItems>;
  justifyContent?: ResponsiveProp<keyof typeof styles.justifyContent>;
  textAlign?: ResponsiveProp<keyof typeof styles.textAlign>;
  borderRadius?:
    | BorderRadiusFull
    | ResponsiveProp<
        Exclude<keyof typeof styles.borderRadius, BorderRadiusFull>
      >;
  background?: keyof typeof styles.background;
  boxShadow?: keyof typeof styles.boxShadow;
  transform?: keyof typeof styles.transform;
  transition?: keyof typeof styles.transition;
  height?: keyof typeof styles.height;
  width?: keyof typeof styles.width;
  position?: keyof typeof styles.position;
  cursor?: keyof typeof styles.cursor;
  pointerEvents?: keyof typeof styles.pointerEvents;
  overflow?: keyof typeof styles.overflow;
  minWidth?: keyof typeof styles.minWidth;
  maxWidth?: keyof typeof styles.maxWidth;
  top?: keyof typeof styles.top;
  bottom?: keyof typeof styles.bottom;
  left?: keyof typeof styles.left;
  right?: keyof typeof styles.right;
  userSelect?: keyof typeof styles.userSelect;
  outline?: keyof typeof styles.outline;
  opacity?: keyof typeof styles.opacity;
  zIndex?: keyof typeof styles.zIndex;
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
    '`full` is not a supported as a responsive `borderRadius` value.',
  );

  const resolvedBorderRadius =
    borderRadius && Array.isArray(borderRadius)
      ? resolveResponsiveProp(
          borderRadius,
          styles.borderRadius,
          styles.borderRadiusTablet,
          styles.borderRadiusDesktop,
        )
      : // @ts-expect-error this shouldn't need to be here, as it cannot be an array at this point, but typescript is complaining about an array being used as in index.
        styles.borderRadius[borderRadius!];

  return classnames(
    component !== null && resetStyles.base,
    component !== null &&
      resetStyles.element[component as keyof typeof resetStyles.element],
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
