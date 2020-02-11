import React from 'react';
import { Box } from '../../Box/Box';
import * as styleRefs from './Highlight.treat';
import { useStyles } from 'sku/treat';

export interface HighlightProps {
  tone: 'info' | 'critical';
  children: string;
}

export const Highlight = ({ tone, children }: HighlightProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      component="mark"
      borderRadius="standard"
      background={tone}
      className={styles.root}
    >
      {children}
    </Box>
  );
};
