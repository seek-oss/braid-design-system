import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { ReactNode } from 'react';
import React from 'react';
import { Box } from '../../Box/Box';
import * as styles from './MaxLines.css';

export const MaxLines = ({
  children,
  lines,
}: {
  children: ReactNode;
  lines: number;
}) => (
  <Box
    component="span"
    className={[styles.base, lines > 1 ? styles.multiLine : undefined]}
    style={assignInlineVars({ [styles.lineLimit]: String(lines) })}
  >
    {children}
  </Box>
);
