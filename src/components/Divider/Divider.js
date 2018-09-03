import React from 'react';
import classnames from 'classnames';
import styles from './Divider.css.js';
import withTheme from '../private/withTheme';
import Box from '../Box/Box';

const Divider = withTheme(
  ({ borderColor = 'standard', borderWidth = 'standard', theme }) => (
    <Box className={styles.root}>
      <div
        className={classnames(
          styles.divider,
          theme.atoms.borderWidth[borderWidth],
          theme.atoms.borderColor[borderColor]
        )}
      />
    </Box>
  )
);

Divider.displayName = 'Divider';

export default Divider;
