import React, { ReactNode, AllHTMLAttributes } from 'react';
import { PrivateButtonRendererProps } from '../ButtonRenderer/ButtonRenderer';
import { DataAttributeMap } from '../private/buildDataAttributes';
declare type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps
  extends Omit<PrivateButtonRendererProps, 'children'> {
  id?: NativeButtonProps['id'];
  onClick?: NativeButtonProps['onClick'];
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  'aria-controls'?: NativeButtonProps['aria-controls'];
  'aria-expanded'?: NativeButtonProps['aria-expanded'];
  'aria-describedby'?: NativeButtonProps['aria-describedby'];
  tabIndex?: NativeButtonProps['tabIndex'];
  data?: DataAttributeMap;
}
export declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>;
export {};
