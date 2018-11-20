import React, { Component, ReactNode, ReactType } from 'react';
import classnames from 'classnames';
import withTheme, { WithThemeProps } from '../private/withTheme';
import styles from './Text.css.js';
import Box from '../Box/Box';
import {
  FontWeightVariants,
  ColorVariants,
  FontSizeVariants
} from '../../themes/theme';

interface Props extends WithThemeProps {
  component?: ReactType;
  size?: FontSizeVariants;
  color?: ColorVariants;
  weight?: FontWeightVariants;
  baseline?: boolean;
  className?: string;
  children: ReactNode;
}

export default withTheme(
  class Text extends Component<Props> {
    static displayName = 'Text';

    render() {
      const {
        theme,
        component,
        size,
        color,
        weight,
        baseline = true,
        className = '',
        ...restProps
      } = this.props;

      return (
        <Box
          component={component}
          className={classnames(
            className,
            styles.block,
            theme.atoms.fontFamily.text,
            theme.atoms.color[color || 'neutral'],
            theme.atoms.fontSize[size || 'standard'],
            theme.atoms.fontWeight[weight || 'regular'],
            {
              [theme.atoms.fontSize.centered]: !baseline,
              [styles.listItem]: component === 'li'
            }
          )}
          {...restProps}
        />
      );
    }
  }
);
