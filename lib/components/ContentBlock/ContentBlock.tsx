import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import * as styleRefs from './ContentBlock.treat';

export interface ContentBlockProps {
  children: ReactNode;
  width?: keyof typeof styleRefs.width;
}

export const ContentBlock = ({
  width = 'medium',
  children,
}: ContentBlockProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box width="full" className={[styles.root, styles.width[width]]}>
      {children}
    </Box>
  );
};
