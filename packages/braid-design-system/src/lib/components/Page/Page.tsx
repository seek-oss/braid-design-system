import type { ReactNode } from 'react';
import React from 'react';
import { Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './Page.css';

interface PageProps {
  children: ReactNode;
  footer: ReactNode;
  footerPosition?: 'belowFold';
  data?: DataAttributeMap;
}

export const Page = ({
  children,
  footer,
  footerPosition,
  data,
  ...restProps
}: PageProps) => (
  <Box
    display="flex"
    flexDirection="column"
    className={styles.fullHeight}
    {...buildDataAttributes({ data, validateRestProps: restProps })}
  >
    <Box
      flexGrow={footerPosition !== 'belowFold' ? 1 : undefined}
      className={footerPosition === 'belowFold' ? styles.fullHeight : undefined}
      paddingBottom="xxlarge"
    >
      {children}
    </Box>
    {footer}
  </Box>
);
