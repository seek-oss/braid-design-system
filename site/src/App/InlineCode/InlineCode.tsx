import React from 'react';

import { Box } from '../../../../lib/components';

import * as styles from './InlineCode.css';

interface InlineCodeProps {
  children: string;
}
export function InlineCode({ children }: InlineCodeProps) {
  return (
    <Box
      component="code"
      display="inline"
      paddingX="xxsmall"
      className={styles.inlineCode}
    >
      {children}
    </Box>
  );
}
