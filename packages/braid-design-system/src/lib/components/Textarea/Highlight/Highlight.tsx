import React from 'react';
import { Box } from '../../Box/Box';
import { root, critical, caution } from './Highlight.css';

export interface HighlightProps {
  children: string;
  tone: 'critical' | 'caution';
}

const styleForTone = { caution, critical };

export const Highlight = ({ children, tone }: HighlightProps) => (
  <Box component="mark" className={[root, styleForTone[tone]]}>
    {children}
  </Box>
);
