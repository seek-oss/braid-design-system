import * as styles from './box.treat';
import {
  HorizontalSpacing,
  VerticalPadding,
  Spacing,
  BorderRadius,
  BackgroundColor,
  Display,
  FlexDirection,
  BoxShadow,
  Width,
} from '../../themes/theme';
import { useClassNames } from 'sku/treat';
import { useTheme } from '../../components/private/ThemeContext';
import { ResetProps } from '../../components/Reset/Reset';

export interface BoxProps extends ResetProps {
  paddingTop?: ResponsiveProp<VerticalPadding>;
  paddingBottom?: ResponsiveProp<VerticalPadding>;
  paddingLeft?: ResponsiveProp<HorizontalSpacing>;
  paddingRight?: ResponsiveProp<HorizontalSpacing>;
  marginTop?: ResponsiveProp<Spacing>;
  marginBottom?: ResponsiveProp<Spacing>;
  marginLeft?: ResponsiveProp<HorizontalSpacing>;
  marginRight?: ResponsiveProp<HorizontalSpacing>;
  display?: ResponsiveProp<Display>;
  flexDirection?: ResponsiveProp<FlexDirection>;
  borderRadius?: BorderRadius;
  backgroundColor?: BackgroundColor;
  boxShadow?: BoxShadow;
  transform?: 'touchable';
  transition?: 'fast' | 'touchable';
  width?: Width;
}

type ResponsiveProp<AtomName> = AtomName | [AtomName, AtomName];

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
    atoms.backgroundColor[backgroundColor!],
    atoms.borderRadius[borderRadius!],
    atoms.boxShadow[boxShadow!],
    styles.transition[transition!],
    styles.transform[transform!],
    atoms.width[width!],
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
      getResponsiveClasses(atoms.display, atoms.displayDesktop, display),
    flexDirection &&
      getResponsiveClasses(
        atoms.flexDirection,
        atoms.flexDirectionDesktop,
        flexDirection,
      ),
  );
};
