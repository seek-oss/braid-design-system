import React, { Component } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import Reset, { ResetProps } from '../Reset/Reset';
import styles from './Box.css.js';
import {
  HorizontalSpacingVariants,
  SpacingVariants,
  BorderWidthVariants,
  BorderRadiusVariants,
  BackgroundColorVariants,
  BorderColorVariants
} from '../../themes/theme';

function getResponsiveClasses<AtomName extends string>(
  spaceAtoms: Record<AtomName, string>,
  desktopSpaceAtoms: Record<AtomName, string>,
  propValue: ResponsiveProp<AtomName> | undefined
) {
  if (!propValue) {
    return null;
  } else if (typeof propValue === 'string') {
    return spaceAtoms[propValue!];
  } else if (propValue instanceof Array) {
    return propValue[0] !== propValue[1]
      ? `${spaceAtoms[propValue[0]]} ${desktopSpaceAtoms[propValue[1]!]}`
      : propValue[0];
  }
}

type ResponsiveProp<AtomName> = AtomName | [AtomName, AtomName];

export interface BoxProps extends ResetProps {
  paddingTop?: ResponsiveProp<SpacingVariants>;
  paddingBottom?: ResponsiveProp<SpacingVariants>;
  paddingLeft?: ResponsiveProp<HorizontalSpacingVariants>;
  paddingRight?: ResponsiveProp<HorizontalSpacingVariants>;
  marginTop?: ResponsiveProp<SpacingVariants>;
  marginBottom?: ResponsiveProp<SpacingVariants>;
  marginLeft?: ResponsiveProp<HorizontalSpacingVariants>;
  marginRight?: ResponsiveProp<HorizontalSpacingVariants>;
  borderWidth?: BorderWidthVariants;
  borderRadius?: BorderRadiusVariants;
  backgroundColor?: BackgroundColorVariants;
  borderColor?: BorderColorVariants;
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
                    marginTop
                  ),
                marginRight &&
                  getResponsiveClasses(
                    atoms.marginRight,
                    atoms.marginRightDesktop,
                    marginRight
                  ),
                marginBottom &&
                  getResponsiveClasses(
                    atoms.marginBottom,
                    atoms.marginBottomDesktop,
                    marginBottom
                  ),
                marginLeft &&
                  getResponsiveClasses(
                    atoms.marginLeft,
                    atoms.marginLeftDesktop,
                    marginLeft
                  ),
                paddingTop &&
                  getResponsiveClasses(
                    atoms.paddingTop,
                    atoms.paddingTopDesktop,
                    paddingTop
                  ),
                paddingRight &&
                  getResponsiveClasses(
                    atoms.paddingRight,
                    atoms.paddingRightDesktop,
                    paddingRight
                  ),
                paddingBottom &&
                  getResponsiveClasses(
                    atoms.paddingBottom,
                    atoms.paddingBottomDesktop,
                    paddingBottom
                  ),
                paddingLeft &&
                  getResponsiveClasses(
                    atoms.paddingLeft,
                    atoms.paddingLeftDesktop,
                    paddingLeft
                  )
              )}
              {...restProps}
            />
          );
        }}
      </ThemeConsumer>
    );
  }
}
