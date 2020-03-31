import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import * as styleRefs from './Divider.treat';

export interface DividerProps {
  weight?: keyof typeof styleRefs.weight;
}

const defaultWeight = 'regular';
export const Divider = ({ weight = defaultWeight }: DividerProps) => {
  const styles = useStyles(styleRefs);

  return (
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
};
