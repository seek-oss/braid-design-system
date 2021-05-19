import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, BoxProps } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styleRefs from './ContentBlock.treat';

export interface ContentBlockProps {
  children: ReactNode;
  width?: BoxProps['maxWidth'];
  data?: DataAttributeMap;
}

export const ContentBlock = ({
  width = 'medium',
  data,
  children,
}: ContentBlockProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      width="full"
      maxWidth={width}
      className={styles.marginAuto}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      {children}
    </Box>
  );
};
