import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../../Box/Box';
import { ClearButton } from '../../iconButtons/ClearButton/ClearButton';
import * as styleRefs from './ClearField.treat';

interface Props {
  onMouseDown: () => void;
  hide?: boolean;
}
export const ClearField = ({ hide = false, onMouseDown }: Props) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      height="full"
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="fast"
      pointerEvents={hide ? 'none' : undefined}
      className={hide ? styles.hideClear : undefined}
    >
      <ClearButton
        label="Clear"
        onMouseDown={onMouseDown}
        keyboardAccessible={false}
      />
    </Box>
  );
};
