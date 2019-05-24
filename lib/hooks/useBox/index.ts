import * as styles from './box.treat';
import {
  HorizontalSpacing,
  VerticalPadding,
  Spacing,
  BoxShadow,
} from '../../themes/theme';
import { useClassNames } from 'sku/treat';
import { useTheme } from '../../components/private/ThemeContext';
import { ResetProps } from '../../components/Reset/Reset';

type ResponsiveProp<AtomName> = AtomName | [AtomName, AtomName];

export interface BoxProps extends ResetProps {
  paddingTop?: ResponsiveProp<VerticalPadding>;
  paddingBottom?: ResponsiveProp<VerticalPadding>;
  paddingLeft?: ResponsiveProp<HorizontalSpacing>;
  paddingRight?: ResponsiveProp<HorizontalSpacing>;
  marginTop?: ResponsiveProp<Spacing>;
  marginBottom?: ResponsiveProp<Spacing>;
  marginLeft?: ResponsiveProp<HorizontalSpacing>;
  marginRight?: ResponsiveProp<HorizontalSpacing>;
  display?: ResponsiveProp<keyof typeof styles.display>;
  flexDirection?: ResponsiveProp<keyof typeof styles.flexDirection>;
  borderRadius?: keyof typeof styles.borderRadius;
  backgroundColor?: keyof typeof styles.backgroundColor;
  boxShadow?: BoxShadow;
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
}: BoxProps) => {
  const { atoms } = useTheme();

  return useClassNames(
    styles.backgroundColor[backgroundColor!],
    styles.borderRadius[borderRadius!],
    atoms.boxShadow[boxShadow!],
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
        atoms.paddingTop,
        atoms.paddingTopDesktop,
        paddingTop,
      ),
    paddingRight &&
      getResponsiveClasses(
        atoms.paddingRight,
        atoms.paddingRightDesktop,
        paddingRight,
      ),
    paddingBottom &&
      getResponsiveClasses(
        atoms.paddingBottom,
        atoms.paddingBottomDesktop,
        paddingBottom,
      ),
    paddingLeft &&
      getResponsiveClasses(
        atoms.paddingLeft,
        atoms.paddingLeftDesktop,
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
