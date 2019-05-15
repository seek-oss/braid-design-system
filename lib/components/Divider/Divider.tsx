import React from 'react';
import { useClassNames } from 'sku/treat';
import * as styles from './Divider.treat';
import { Box } from '../Box/Box';

export const Divider = () => (
  <Box className={styles.root}>
    <Box
      boxShadow="borderStandard"
      width="full"
      className={useClassNames(styles.divider)}
    />
  </Box>
);
