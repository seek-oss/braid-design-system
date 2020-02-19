import React, { ReactNode } from 'react';

import * as styleRefs from './LeftHighlight.treat';
import { Box } from '../..';
import { useStyles } from 'sku/react-treat';
import { UseBoxStylesProps } from '../../Box/useBoxStyles';

interface LeftHighlightProps {
  children: ReactNode;
  tone: 'neutral' | 'critical';
  borderRadius: UseBoxStylesProps['borderRadius'];
  boxShadow: UseBoxStylesProps['boxShadow'];
  display: UseBoxStylesProps['display'];
}
export const LeftHighlight = ({
  tone,
  borderRadius,
  boxShadow,
  display,
  children,
}: LeftHighlightProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      position="relative"
      display={display}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      overflow="hidden"
    >
      {children}
      <Box
        position="absolute"
        background={tone}
        className={styles.leftHighlight}
      />
    </Box>
  );
};
