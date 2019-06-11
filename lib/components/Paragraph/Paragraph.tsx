import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';

interface ParagraphProps {
  children: ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => (
  <Box component="p" paddingBottom="xsmall">
    {children}
  </Box>
);
