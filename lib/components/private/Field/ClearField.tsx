import React, { Ref, useCallback, MouseEvent } from 'react';
import { Box } from '../../Box/Box';
import { ClearButton } from '../../iconButtons/ClearButton/ClearButton';

interface Props {
  inputRef: Ref<HTMLInputElement>;
  onClear?: () => void;
  hide?: boolean;
  label?: string;
}
export const ClearField = ({
  hide = false,
  onClear,
  label = 'Clear',
  inputRef,
}: Props) => {
  const clearHandler = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (typeof onClear !== 'function' || event.button !== 0) {
        return;
      }

      onClear();

      if (inputRef && typeof inputRef === 'object' && inputRef.current) {
        inputRef.current.focus();
      }
    },
    [onClear, inputRef],
  );

  return (
    <Box
      component="span"
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
        label={label}
        onMouseDown={clearHandler}
        keyboardAccessible={false}
      />
    </Box>
  );
};
