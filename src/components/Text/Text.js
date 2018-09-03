import React from 'react';
import classnames from 'classnames';
import withTheme from '../private/withTheme';
import styles from './Text.css.js';
import Box from '../Box/Box';

const componentsBySize = {
  standard: 'div'
};

const Text = withTheme(
  ({
    theme,
    component,
    size = 'standard',
    color = 'neutral',
    weight = 'regular',
    baseline = true,
    className,
    children,
    ...restProps
  }) => {
    const Component =
      component || componentsBySize[size] || componentsBySize.standard;

    return (
      <Box
        component={Component}
        className={classnames({
          [className]: className,
          [styles.block]: true,
          [styles.listItem]: component === 'li'
        })}
        {...restProps}
      >
        <span
          className={classnames({
            [styles.block]: true,
            [theme.atoms.color[color]]: color,
            [theme.atoms.fontFamily.body]: true,
            [theme.atoms.fontSize[size]]: size,
            [theme.atoms.fontWeight[weight]]: weight
          })}
          {...(baseline ? {} : { style: { transform: 'none' } })}
        >
          {children}
        </span>
      </Box>
    );
  }
);

Text.displayName = 'Text';

export default Text;
