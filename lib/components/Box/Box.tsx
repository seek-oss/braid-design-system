import React from 'react';
import { useClassNames } from 'sku/treat';
import { useTheme } from '../private/ThemeContext';
import { Reset, ResetProps } from '../Reset/Reset';
import {
  HorizontalSpacing,
  VerticalPadding,
  Spacing,
  BorderRadius,
  BackgroundColor,
  Display,
  FlexDirection,
  BoxShadow,
  Transition,
  Transform,
  Width,
} from '../../themes/theme';
import { ContrastProvider } from './ContrastContext';

function getResponsiveClasses<AtomName extends string>(
  atoms: Record<AtomName, string>,
  desktopAtoms: Record<AtomName, string>,
  propValue: ResponsiveProp<AtomName>,
) {
  if (typeof propValue === 'string') {
    return atoms[propValue!];
  } else if (propValue instanceof Array) {
    return propValue[0] !== propValue[1]
      ? `${atoms[propValue[0]!] || ''} ${desktopAtoms[propValue[1]!] || ''}`
      : atoms[propValue[0]!];
  }
}

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
  display?: ResponsiveProp<Display>;
  flexDirection?: ResponsiveProp<FlexDirection>;
  borderRadius?: BorderRadius;
  backgroundColor?: BackgroundColor;
  boxShadow?: BoxShadow;
  transform?: Transform;
  transition?: Transition;
  width?: Width;
}

export const Box = ({
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
  className,
  ...restProps
}: BoxProps) => {
  const { atoms } = useTheme();

  const ResetBox = (
    <Reset
      className={useClassNames(
        className,
        atoms.backgroundColor[backgroundColor!],
        atoms.boxShadow[boxShadow!],
        atoms.borderRadius[borderRadius!],
        atoms.boxShadow[boxShadow!],
        atoms.transition[transition!],
        atoms.transform[transform!],
        atoms.width[width!],
        marginTop &&
          getResponsiveClasses(
            atoms.marginTop,
            atoms.marginTopDesktop,
            marginTop,
          ),
        marginRight &&
          getResponsiveClasses(
            atoms.marginRight,
            atoms.marginRightDesktop,
            marginRight,
          ),
        marginBottom &&
          getResponsiveClasses(
            atoms.marginBottom,
            atoms.marginBottomDesktop,
            marginBottom,
          ),
        marginLeft &&
          getResponsiveClasses(
            atoms.marginLeft,
            atoms.marginLeftDesktop,
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
      )}
      {...restProps}
    />
  );

  return backgroundColor ? (
    <ContrastProvider value={backgroundColor}>{ResetBox}</ContrastProvider>
  ) : (
    ResetBox
  );
};
