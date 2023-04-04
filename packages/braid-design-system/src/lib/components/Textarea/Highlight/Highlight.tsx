import React from 'react';
import { Box } from '../../Box/Box';
import { root, critical, caution } from './Highlight.css';

export interface HighlightProps {
  children: string;
  tone: 'critical' | 'caution';
}

export const Highlight = ({ children, tone }: HighlightProps) => (
  <Box
    component="mark"
    borderRadius="small"
    background={{
      lightMode: tone === 'caution' ? 'cautionLight' : 'criticalLight',
    }}
    className={[root, tone === 'caution' ? caution : critical]}
  >
    {children}
  </Box>
);
