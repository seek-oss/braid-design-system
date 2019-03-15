import React from 'react';
import styles from './Divider.css.js';
import Box from '../Box/Box';

const Divider = () => (
  <Box className={styles.root}>
    <Box boxShadow="borderStandard" width="full" className={styles.divider} />
  </Box>
);

Divider.displayName = 'Divider';

export default Divider;
