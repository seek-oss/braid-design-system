import type { ReactNode } from 'react';
import React from 'react';
import { Box } from '../../Box/Box';
import * as styles from './Truncate.css';

export const Truncate = ({ children }: { children: ReactNode }) => (
  <Box component="span" className={styles.truncate}>
    {children}
  </Box>
);
