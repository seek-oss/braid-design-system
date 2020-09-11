import React from 'react';
import { useStyles } from 'sku/react-treat';

import { Box } from '../../../../lib/components';

import * as styleRefs from './InlineCode.treat';

interface InlineCodeProps {
  children: string;
}
export function InlineCode({ children }: InlineCodeProps) {
  const styles = useStyles(styleRefs);

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
