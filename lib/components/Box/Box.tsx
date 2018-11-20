import React, { Component, ReactType } from 'react';
import classnames from 'classnames';
import withTheme, { WithThemeProps } from '../private/withTheme';
import Reset from '../Reset/Reset';
import styles from './Box.css.js';
import {
  HorizontalSpacingVariants,
  SpacingVariants,
  BorderWidthVariants,
  BorderRadiusVariants,
  BackgroundColorVariants,
  BorderColorVariants
} from '../../themes/theme';

interface Props extends WithThemeProps {
  component: ReactType;
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
  className?: string;
}

export default withTheme(
  class Box extends Component<Props> {
    static displayName = 'Box';

    render() {
      const {
        theme,
        component,
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
        className = '',
        ...restProps
      } = this.props;

      return (
        <Reset
          component={component}
          className={classnames(
            className,
            styles.root,
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
      );
    }
  }
);
