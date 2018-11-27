import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Divider.css.js';
import withTheme, { WithThemeProps } from '../private/withTheme';
import Box from '../Box/Box';
import { BorderColorVariants, BorderWidthVariants } from '../../themes/theme';

interface Props extends WithThemeProps {
  borderColor?: BorderColorVariants;
  borderWidth?: BorderWidthVariants;
  className?: string;
}

export default withTheme(
  class Divider extends Component<Props> {
    static displayName = 'Divider';

    render() {
      const {
        theme,
        borderColor,
        borderWidth,
        className,
        ...restProps
      } = this.props;

      return (
        <Box className={classnames(styles.root, className)} {...restProps}>
          <div
            className={classnames(
              styles.divider,
              theme.atoms.borderWidth[borderWidth || 'standard'],
              theme.atoms.borderColor[borderColor || 'standard']
            )}
          />
        </Box>
      );
    }
  }
);
