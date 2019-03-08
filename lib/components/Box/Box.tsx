import React, { Component } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import Reset, { ResetProps } from '../Reset/Reset';
import styles from './Box.css.js';
import {
  HorizontalSpacing,
  VerticalPadding,
  Spacing,
  BorderWidth,
  BorderRadius,
  BackgroundColor,
  BorderColor,
  Display,
} from '../../themes/theme';

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
  borderWidth?: BorderWidth;
  borderRadius?: BorderRadius;
  backgroundColor?: BackgroundColor;
  borderColor?: BorderColor;
}

export default class Box extends Component<BoxProps> {
  static displayName = 'Box';

  render() {
    const {
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      borderWidth,
      borderRadius,
      backgroundColor,
      borderColor = 'standard',
      className,
      ...restProps
    } = this.props;

    return (
      <ThemeConsumer>
        {({ atoms }) => {
          return (
            <Reset
              className={classnames(
                className,
                styles.root,
                atoms.backgroundColor[backgroundColor!],
                atoms.borderColor[borderColor!],
                atoms.borderWidth[borderWidth!],
                atoms.borderRadius[borderRadius!],
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
                  getResponsiveClasses(
                    atoms.display,
                    atoms.displayDesktop,
                    display,
                  ),
              )}
              {...restProps}
            />
          );
        }}
      </ThemeConsumer>
    );
  }
}
