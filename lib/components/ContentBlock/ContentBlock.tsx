import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, BoxProps } from '../Box/Box';
import * as styleRefs from './ContentBlock.treat';

export interface ContentBlockProps {
  children: ReactNode;
  width?: BoxProps['maxWidth'];
}

export const ContentBlock = ({
  width = 'medium',
  children,
}: ContentBlockProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box width="full" maxWidth={width} className={styles.marginAuto}>
      {children}
    </Box>
  );
};
