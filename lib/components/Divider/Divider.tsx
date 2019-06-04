import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import * as styleRefs from './Divider.treat';

export const Divider = () => {
  const styles = useStyles(styleRefs);

  return (
    <Box className={styles.root}>
      <Box boxShadow="borderStandard" width="full" className={styles.divider} />
    </Box>
  );
};
