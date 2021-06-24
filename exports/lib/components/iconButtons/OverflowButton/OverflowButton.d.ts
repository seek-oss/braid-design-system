import React from 'react';
import { IconButtonProps } from '../IconButton';
export declare type OverflowButtonProps = Pick<
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
>;
export declare const OverflowButton: React.ForwardRefExoticComponent<
  OverflowButtonProps & React.RefAttributes<HTMLButtonElement>
>;
