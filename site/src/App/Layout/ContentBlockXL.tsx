import { Box } from 'braid-src/lib/components/Box/Box';
import type { ReactNode } from 'react';

import * as styles from './ContentBlockXL.css';

interface ContentBlockXLProps {
  readonly children: ReactNode;
}

export const ContentBlockXL = ({ children }: ContentBlockXLProps) => (
  <Box className={styles.container}>{children}</Box>
);
