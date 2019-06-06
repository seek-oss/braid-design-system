import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import * as resetStyleRefs from './reset.treat';
import * as styleRefs from './box.treat';

type ResponsiveProp<AtomName> = AtomName | [AtomName, AtomName];

export interface UseBoxProps {
  component: keyof JSX.IntrinsicElements;
  paddingTop?: ResponsiveProp<keyof typeof styleRefs.padding.top>;
  paddingBottom?: ResponsiveProp<keyof typeof styleRefs.padding.bottom>;
  paddingLeft?: ResponsiveProp<keyof typeof styleRefs.padding.left>;
  paddingRight?: ResponsiveProp<keyof typeof styleRefs.padding.right>;
  marginTop?: ResponsiveProp<keyof typeof styleRefs.margin.top>;
  marginBottom?: ResponsiveProp<keyof typeof styleRefs.margin.bottom>;
  marginLeft?: ResponsiveProp<keyof typeof styleRefs.margin.left>;
  marginRight?: ResponsiveProp<keyof typeof styleRefs.margin.left>;
  display?: ResponsiveProp<keyof typeof styleRefs.display>;
  flexDirection?: ResponsiveProp<keyof typeof styleRefs.flexDirection>;
  borderRadius?: keyof typeof styleRefs.borderRadius;
  backgroundColor?: keyof typeof styleRefs.backgroundColor;
  boxShadow?: keyof typeof styleRefs.boxShadow;
  transform?: keyof typeof styleRefs.transform;
  transition?: keyof typeof styleRefs.transition;
  width?: keyof typeof styleRefs.width;
}

function getResponsiveClasses<PropName extends string>(
  mobileClasses: Record<PropName, string>,
  desktopClasses: Record<PropName, string>,
  propName: ResponsiveProp<PropName>,
) {
  if (typeof propName === 'string') {
    return mobileClasses[propName!];
  } else if (propName instanceof Array) {
    const [mobileProp, desktopProp] = propName;
    return mobileProp !== desktopProp
      ? [mobileClasses[mobileProp!], desktopClasses[desktopProp!]]
      : mobileClasses[mobileProp!];
  }
}

export default ({
  component,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  flexDirection,
  borderRadius,
  backgroundColor,
  boxShadow,
  transition,
  transform,
  width,
}: UseBoxProps) => {
  const resetStyles = useStyles(resetStyleRefs);
  const styles = useStyles(styleRefs);

  return classnames(
    resetStyles.base,
    resetStyles.element[component as keyof typeof resetStyleRefs.element],
    styles.backgroundColor[backgroundColor!],
    styles.borderRadius[borderRadius!],
    styles.boxShadow[boxShadow!],
    styles.transition[transition!],
    styles.transform[transform!],
    styles.width[width!],
    marginTop &&
      getResponsiveClasses(
        styles.margin.top,
        styles.marginDesktop.top,
        marginTop,
      ),
    marginRight &&
      getResponsiveClasses(
        styles.margin.right,
        styles.marginDesktop.right,
        marginRight,
      ),
    marginBottom &&
      getResponsiveClasses(
        styles.margin.bottom,
        styles.marginDesktop.bottom,
        marginBottom,
      ),
    marginLeft &&
      getResponsiveClasses(
        styles.margin.left,
        styles.marginDesktop.left,
        marginLeft,
      ),
    paddingTop &&
      getResponsiveClasses(
        styles.padding.top,
        styles.paddingDesktop.top,
        paddingTop,
      ),
    paddingRight &&
      getResponsiveClasses(
        styles.padding.right,
        styles.paddingDesktop.right,
        paddingRight,
      ),
    paddingBottom &&
      getResponsiveClasses(
        styles.padding.bottom,
        styles.paddingDesktop.bottom,
        paddingBottom,
      ),
    paddingLeft &&
      getResponsiveClasses(
        styles.padding.left,
        styles.paddingDesktop.left,
        paddingLeft,
      ),
    display &&
      getResponsiveClasses(styles.display, styles.displayDesktop, display),
    flexDirection &&
      getResponsiveClasses(
        styles.flexDirection,
        styles.flexDirectionDesktop,
        flexDirection,
      ),
  );
};
