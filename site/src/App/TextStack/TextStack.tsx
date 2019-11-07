import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, Stack } from '../../../../lib/components';
import * as styleRefs from './TextStack.treat';

interface TextStackProps {
  children: ReactNode;
}

export const TextStack = ({ children }: TextStackProps) => {
  const styles = useStyles(styleRefs);
  return (
    <Box className={styles.root}>
      <Stack space="xlarge">{children}</Stack>
    </Box>
  );
};
