import * as React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import * as styleRefs from './Divider.treat';

export const Divider = () => {
  const styles = useStyles(styleRefs);

  return (
    <Box position="relative">
      <Box
        position="absolute"
        boxShadow="borderStandard"
        width="full"
        className={styles.divider}
      />
    </Box>
  );
};
