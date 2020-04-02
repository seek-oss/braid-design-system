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
  'aria-describedby'?: NativeButtonProps['aria-describedby'];
  data?: DataAttributeMap;
}

export const Button = ({
  onClick,
  children,
  weight = 'regular',
  type = 'button',
  id,
  loading = false,
  'aria-describedby': ariaDescribedBy,
  data,
}: ButtonProps) => (
  <ButtonRenderer weight={weight} loading={loading}>
    {(ButtonChildren, buttonProps) => (
      <button
        id={id}
        type={type}
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
