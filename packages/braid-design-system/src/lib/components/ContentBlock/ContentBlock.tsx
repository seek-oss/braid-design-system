import React, { type ReactNode } from 'react';
import { type BoxProps, Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './ContentBlock.css';

export interface ContentBlockProps {
  children: ReactNode;
  width?: BoxProps['maxWidth'];
  data?: DataAttributeMap;
}

export const ContentBlock = ({
  width = 'medium',
  data,
  children,
  ...restProps
}: ContentBlockProps) => (
  <Box
    width="full"
    maxWidth={width}
    className={styles.marginAuto}
    {...buildDataAttributes({ data, validateRestProps: restProps })}
  >
    {children}
  </Box>
);
