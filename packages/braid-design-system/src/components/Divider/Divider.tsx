import React from 'react';
import { Box } from '../Box/Box';
import * as styles from './Divider.css';

export interface DividerProps {
  weight?: keyof typeof styles.weight;
}

const defaultWeight = 'regular';
export const Divider = ({ weight = defaultWeight }: DividerProps) => (
  <Box position="relative">
    <Box
      position="absolute"
      width="full"
      className={[
        styles.base,
        styles.weight[weight] || styles.weight[defaultWeight],
      ]}
    />
  </Box>
);
