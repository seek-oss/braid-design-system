import * as React from 'react';
import { Box } from '../../Box/Box';
import * as styleRefs from './Highlight.treat';
import { useStyles } from 'sku/treat';

export interface HighlightProps {
  children: string;
}

export const Highlight = ({ children }: HighlightProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      component="mark"
      borderRadius="standard"
      background="critical"
      className={styles.root}
    >
      {children}
    </Box>
  );
};
