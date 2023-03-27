import React from 'react';
import { Box } from '../../Box/Box';
import * as styles from './Highlight.css';

export interface HighlightProps {
  children: string;
}

export const Highlight = ({ children }: HighlightProps) => (
  <Box
    component="mark"
    borderRadius="small"
    background={{ lightMode: 'criticalLight', darkMode: 'critical' }}
    className={styles.root}
  >
    {children}
  </Box>
);
