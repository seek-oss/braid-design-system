import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Divider.css.js';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import Box, { BoxProps } from '../Box/Box';
import { BorderColorVariants, BorderWidthVariants } from '../../themes/theme';

export interface DividerProps extends BoxProps {
  borderColor?: BorderColorVariants;
  borderWidth?: BorderWidthVariants;
}

export default class Divider extends Component<DividerProps> {
  static displayName = 'Divider';

  render() {
    const { borderColor, borderWidth, className, ...restProps } = this.props;

    return (
      <ThemeConsumer>
        {theme => (
          <Box className={classnames(styles.root, className)} {...restProps}>
            <div
              className={classnames(
                styles.divider,
                theme.atoms.borderWidth[borderWidth || 'standard'],
                theme.atoms.borderColor[borderColor || 'standard']
              )}
            />
          </Box>
        )}
      </ThemeConsumer>
    );
  }
}
