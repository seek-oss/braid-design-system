import React from 'react';
import { ClearButton } from '../../iconButtons/ClearButton/ClearButton';

export interface ClearFieldButtonProps {
  onClick?: () => void;
  onMouseDown?: () => void;
  visible?: boolean;
  keyboardAccessible?: boolean;
}

export const ClearFieldButton = ({
  onClick,
  onMouseDown,
  keyboardAccessible = true,
}: ClearFieldButtonProps) => (
  <ClearButton
    onClick={onClick}
    onMouseDown={onMouseDown}
    keyboardAccessible={keyboardAccessible}
  />
);
