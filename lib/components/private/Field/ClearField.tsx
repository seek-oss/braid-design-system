import React, { Ref, useCallback } from 'react';
import { Box } from '../../Box/Box';
import { ClearButton } from '../../iconButtons/ClearButton/ClearButton';

interface Props {
  inputRef: Ref<HTMLInputElement>;
  onClear?: () => void;
  hide?: boolean;
}
export const ClearField = ({ hide = false, onClear, inputRef }: Props) => {
  const clearHandler = useCallback(() => {
    if (typeof onClear !== 'function') {
      return;
    }

    onClear();

    if (inputRef && typeof inputRef === 'object' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [onClear, inputRef]);

  return (
    <Box
      height="touchable"
      width="touchable"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="fast"
      pointerEvents={hide ? 'none' : undefined}
      opacity={hide ? 0 : undefined}
    >
      <ClearButton
        label="Clear"
        onMouseDown={clearHandler}
        keyboardAccessible={false}
      />
    </Box>
  );
};
