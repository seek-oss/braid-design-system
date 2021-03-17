import React, { ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import * as styles from './ContentBlock.css';

export interface ContentBlockProps {
  children: ReactNode;
  width?: BoxProps['maxWidth'];
}

export const ContentBlock = ({
  width = 'medium',
  children,
}: ContentBlockProps) => (
  <Box width="full" maxWidth={width} className={styles.marginAuto}>
    {children}
  </Box>
);
