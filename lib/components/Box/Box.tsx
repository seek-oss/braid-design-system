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
  BorderColorVariants,
  DisplayVariants
} from '../../themes/theme';

export interface BoxProps extends ResetProps {
  paddingTop?: SpacingVariants;
  paddingBottom?: SpacingVariants;
  paddingLeft?: HorizontalSpacingVariants;
  paddingRight?: HorizontalSpacingVariants;
  marginTop?: SpacingVariants;
  marginBottom?: SpacingVariants;
  marginLeft?: HorizontalSpacingVariants;
  marginRight?: HorizontalSpacingVariants;
  borderWidth?: BorderWidthVariants;
  borderRadius?: BorderRadiusVariants;
  backgroundColor?: BackgroundColorVariants;
  borderColor?: BorderColorVariants;
  display?: DisplayVariants;
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
      display,
      className,
      ...restProps
    } = this.props;

    return (
      <ThemeConsumer>
        {theme => (
          <Reset
            className={classnames(
              className,
              styles.root,
              theme.atoms.display[display!],
              theme.atoms.backgroundColor[backgroundColor!],
              theme.atoms.borderColor[borderColor!],
              theme.atoms.borderWidth[borderWidth!],
              theme.atoms.borderRadius[borderRadius!],
              theme.atoms.marginTop[marginTop!],
              theme.atoms.marginRight[marginRight!],
              theme.atoms.marginBottom[marginBottom!],
              theme.atoms.marginLeft[marginLeft!],
              theme.atoms.paddingTop[paddingTop!],
              theme.atoms.paddingRight[paddingRight!],
              theme.atoms.paddingBottom[paddingBottom!],
              theme.atoms.paddingLeft[paddingLeft!]
            )}
            {...restProps}
          />
        )}
      </ThemeConsumer>
    );
  }
}
