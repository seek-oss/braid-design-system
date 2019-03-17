import React from 'react';
import styles from './Divider.css.js';
import { Box } from '../Box/Box';

export const Divider = () => (
  <Box className={styles.root}>
    <Box boxShadow="borderStandard" width="full" className={styles.divider} />
  </Box>
);
