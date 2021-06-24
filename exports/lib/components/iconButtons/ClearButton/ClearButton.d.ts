import React from 'react';
import { IconButtonProps } from '../IconButton';
export declare type ClearButtonProps = Pick<
  IconButtonProps,
  | 'onClick'
  | 'onMouseDown'
  | 'onKeyUp'
  | 'onKeyDown'
  | 'label'
  | 'keyboardAccessible'
  | 'active'
  | 'aria-haspopup'
  | 'aria-expanded'
  | 'tone'
  | 'data'
>;
export declare const ClearButton: React.ForwardRefExoticComponent<
  ClearButtonProps & React.RefAttributes<HTMLButtonElement>
>;
