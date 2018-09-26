/* eslint-disable react/prop-types */
import React from 'react';
import classnames from 'classnames';
import styles from './Divider.css.js';
import withTheme from '../private/withTheme';
import Box from '../Box/Box';

const Divider = ({
  borderColor = 'standard',
  borderWidth = 'standard',
  theme,
  className,
  ...props
}) => (
  <Box
    className={classnames({
      [styles.root]: true,
      [className]: className
    })}
    {...props}
  >
    <div
      className={classnames(
        styles.divider,
        theme.atoms.borderWidth[borderWidth],
        theme.atoms.borderColor[borderColor]
      )}
    />
  </Box>
);

Divider.displayName = 'Divider';

export default withTheme(Divider);
