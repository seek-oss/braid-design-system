import type { ReactNode } from 'react';
import React from 'react';
import type { BoxProps } from '../Box/Box';
import { Box } from '../Box/Box';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './ContentBlock.css';

export interface ContentBlockProps {
  children: ReactNode;
  width?: BoxProps['maxWidth'];
  data?: DataAttributeMap;
}

export const ContentBlock = ({
  width = 'medium',
  data,
  children,
}: ContentBlockProps) => (
  <Box
    width="full"
    maxWidth={width}
    className={styles.marginAuto}
    {...(data ? buildDataAttributes(data) : undefined)}
  >
    {children}
  </Box>
);
