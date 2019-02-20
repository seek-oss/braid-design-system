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

export interface BoxProps extends ResetProps {
  paddingTop?: SpacingVariants | SpacingVariants[];
  paddingBottom?: SpacingVariants | SpacingVariants[];
  paddingLeft?: HorizontalSpacingVariants | HorizontalSpacingVariants[];
  paddingRight?: HorizontalSpacingVariants | HorizontalSpacingVariants[];
  marginTop?: SpacingVariants | SpacingVariants[];
  marginBottom?: SpacingVariants | SpacingVariants[];
  marginLeft?: HorizontalSpacingVariants | HorizontalSpacingVariants[];
  marginRight?: HorizontalSpacingVariants | HorizontalSpacingVariants[];
  borderWidth?: BorderWidthVariants;
  borderRadius?: BorderRadiusVariants;
  backgroundColor?: BackgroundColorVariants;
  borderColor?: BorderColorVariants;
}

export default class Box extends Component<BoxProps> {
  static displayName = 'Box';

  getClass(
    atomsSpace: any,
    atomsDesktopSpace: any,
    propsSpace:
      | SpacingVariants
      | SpacingVariants[]
      | HorizontalSpacingVariants
      | HorizontalSpacingVariants[]
      | undefined
  ) {
    const classes = [];
    if (typeof propsSpace === 'string') classes.push(atomsSpace[propsSpace!]);
    else if (propsSpace instanceof Array)
      classes.push(
        atomsSpace[propsSpace[0]!],
        atomsDesktopSpace[propsSpace[1]!]
      );
    return classes;
  }

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
                ...this.getClass(
                  atoms.marginTop,
                  atoms.marginTopDesktop,
                  marginTop
                ),
                ...this.getClass(
                  atoms.marginRight,
                  atoms.marginRightDesktop,
                  marginRight
                ),
                ...this.getClass(
                  atoms.marginBottom,
                  atoms.marginBottomDesktop,
                  marginBottom
                ),
                ...this.getClass(
                  atoms.marginLeft,
                  atoms.marginLeftDesktop,
                  marginLeft
                ),
                ...this.getClass(
                  atoms.paddingTop,
                  atoms.paddingTopDesktop,
                  paddingTop
                ),
                ...this.getClass(
                  atoms.paddingRight,
                  atoms.paddingRightDesktop,
                  paddingRight
                ),
                ...this.getClass(
                  atoms.paddingBottom,
                  atoms.paddingBottomDesktop,
                  paddingBottom
                ),
                ...this.getClass(
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
