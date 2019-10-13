import React from 'react';

import * as styleRefs from './Toast.treat';
import { Box, Text } from '..';
import { useStyles } from 'sku/treat';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';

interface ToastProps {
  message: string;
  onClear: () => void;
}
export const Toast = ({ message, onClear }: ToastProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      display="flex"
      paddingLeft="medium"
      alignItems="center"
      background="card"
      boxShadow="large"
      borderRadius="standard"
      className={styles.root}
    >
      <Text baseline={false} weight="strong">
        {message}
      </Text>
      <ClearButton onClick={onClear} />
    </Box>
  );
};
