import React, { ReactChild } from 'react';
import { Box } from '../../../../lib/components';

import { ThemedExample } from '../ThemeSetting';

interface PreviewProps {
  children: ReactChild;
}
export const Preview = ({ children }: PreviewProps) => (
  <Box padding="small" background="neutralLight" borderRadius="standard">
    <ThemedExample>{children}</ThemedExample>
  </Box>
);
