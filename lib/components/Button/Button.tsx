import React, { ReactNode, AllHTMLAttributes } from 'react';
import {
  ButtonRenderer,
  ButtonRendererProps,
} from '../ButtonRenderer/ButtonRenderer';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps {
  id?: NativeButtonProps['id'];
  onClick?: NativeButtonProps['onClick'];
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  weight?: ButtonRendererProps['weight'];
  loading?: ButtonRendererProps['loading'];
  'aria-controls'?: NativeButtonProps['aria-controls'];
  'aria-expanded'?: NativeButtonProps['aria-expanded'];
  'aria-describedby'?: NativeButtonProps['aria-describedby'];
  data?: DataAttributeMap;
}

export const Button = ({
  onClick,
  children,
  weight,
  loading,
  type = 'button',
  id,
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
  'aria-describedby': ariaDescribedBy,
  data,
}: ButtonProps) => (
  <ButtonRenderer weight={weight} loading={loading}>
    {(ButtonChildren, buttonProps) => (
      <button
        id={id}
        type={type}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-describedby={ariaDescribedBy}
        onClick={onClick}
        disabled={loading}
        {...buttonProps}
        {...buildDataAttributes(data)}
      >
        <ButtonChildren>{children}</ButtonChildren>
      </button>
    )}
  </ButtonRenderer>
);
