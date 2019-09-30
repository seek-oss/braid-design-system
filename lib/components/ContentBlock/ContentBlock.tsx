import React, { ReactNode } from 'react';
import { useStyles } from 'sku/treat';
import classnames from 'classnames';
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
    <Box className={classnames(styles.root, styles.width[width])}>
      {children}
    </Box>
  );
};
