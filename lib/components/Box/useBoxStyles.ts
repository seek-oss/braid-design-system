import { ReactType } from 'react';
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

export interface UseBoxStylesProps {
  component: ReactType;
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
  alignItems?: ResponsiveProp<keyof typeof styleRefs.alignItems>;
  justifyContent?: ResponsiveProp<keyof typeof styleRefs.justifyContent>;
  textAlign?: ResponsiveProp<keyof typeof styleRefs.textAlign>;
  borderRadius?: keyof typeof styleRefs.borderRadius;
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

  return classnames(
    resetStyles.base,
    resetStyles.element[component as keyof typeof resetStyleRefs.element],
    styles.background[background!],
    styles.borderRadius[borderRadius!],
    styles.boxShadow[boxShadow!],
    styles.transition[transition!],
    styles.transform[transform!],
    styles.height[height!],
    styles.width[width!],
    styles.position[position!],
    styles.cursor[cursor!],
    styles.pointerEvents[pointerEvents!],
    styles.overflow[overflow!],
    resolvedMarginTop &&
      resolveResponsiveProp(
        resolvedMarginTop,
        styles.margin.top,
        styles.marginTablet.top,
        styles.marginDesktop.top,
      ),
    resolvedMarginBottom &&
      resolveResponsiveProp(
        resolvedMarginBottom,
        styles.margin.bottom,
        styles.marginTablet.bottom,
        styles.marginDesktop.bottom,
      ),
    resolvedMarginLeft &&
      resolveResponsiveProp(
        resolvedMarginLeft,
        styles.margin.left,
        styles.marginTablet.left,
        styles.marginDesktop.left,
      ),
    resolvedMarginRight &&
      resolveResponsiveProp(
        resolvedMarginRight,
        styles.margin.right,
        styles.marginTablet.right,
        styles.marginDesktop.right,
      ),
    resolvedPaddingTop &&
      resolveResponsiveProp(
        resolvedPaddingTop,
        styles.padding.top,
        styles.paddingTablet.top,
        styles.paddingDesktop.top,
      ),
    resolvedPaddingBottom &&
      resolveResponsiveProp(
        resolvedPaddingBottom,
        styles.padding.bottom,
        styles.paddingTablet.bottom,
        styles.paddingDesktop.bottom,
      ),
    resolvedPaddingLeft &&
      resolveResponsiveProp(
        resolvedPaddingLeft,
        styles.padding.left,
        styles.paddingTablet.left,
        styles.paddingDesktop.left,
      ),
    resolvedPaddingRight &&
      resolveResponsiveProp(
        resolvedPaddingRight,
        styles.padding.right,
        styles.paddingTablet.right,
        styles.paddingDesktop.right,
      ),
    display &&
      resolveResponsiveProp(
        display,
        styles.display,
        styles.displayTablet,
        styles.displayDesktop,
      ),
    flexDirection &&
      resolveResponsiveProp(
        flexDirection,
        styles.flexDirection,
        styles.flexDirectionTablet,
        styles.flexDirectionDesktop,
      ),
    styles.flexWrap[flexWrap!],
    alignItems &&
      resolveResponsiveProp(
        alignItems,
        styles.alignItems,
        styles.alignItemsTablet,
        styles.alignItemsDesktop,
      ),
    justifyContent &&
      resolveResponsiveProp(
        justifyContent,
        styles.justifyContent,
        styles.justifyContentTablet,
        styles.justifyContentDesktop,
      ),
    textAlign &&
      resolveResponsiveProp(
        textAlign,
        styles.textAlign,
        styles.textAlignTablet,
        styles.textAlignDesktop,
      ),
  );
};
