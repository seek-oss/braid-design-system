import { ReactType } from 'react';
import { useClassNames } from 'sku/treat';
import * as resetStyles from './reset.treat';
import * as styles from './box.treat';

type ResponsiveProp<AtomName> = AtomName | [AtomName, AtomName];

export interface UseBoxProps {
  component: ReactType;
  paddingTop?: ResponsiveProp<keyof typeof styles.padding.top>;
  paddingBottom?: ResponsiveProp<keyof typeof styles.padding.bottom>;
  paddingLeft?: ResponsiveProp<keyof typeof styles.padding.left>;
  paddingRight?: ResponsiveProp<keyof typeof styles.padding.right>;
  marginTop?: ResponsiveProp<keyof typeof styles.margin.top>;
  marginBottom?: ResponsiveProp<keyof typeof styles.margin.bottom>;
  marginLeft?: ResponsiveProp<keyof typeof styles.margin.left>;
  marginRight?: ResponsiveProp<keyof typeof styles.margin.left>;
  display?: ResponsiveProp<keyof typeof styles.display>;
  flexDirection?: ResponsiveProp<keyof typeof styles.flexDirection>;
  borderRadius?: keyof typeof styles.borderRadius;
  backgroundColor?: keyof typeof styles.backgroundColor;
  boxShadow?: keyof typeof styles.boxShadow;
  transform?: keyof typeof styles.transform;
  transition?: keyof typeof styles.transition;
  width?: keyof typeof styles.width;
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
}: UseBoxProps) =>
  useClassNames(
    resetStyles.base,
    resetStyles.element[component as keyof typeof resetStyles.element],
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
