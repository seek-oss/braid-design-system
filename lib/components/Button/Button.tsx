import React, { ReactNode, AllHTMLAttributes } from 'react';
import {
  ButtonRenderer,
  ButtonRendererProps,
} from '../ButtonRenderer/ButtonRenderer';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps {
  id?: NativeButtonProps['id'];
  onClick?: NativeButtonProps['onClick'];
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  weight?: ButtonRendererProps['weight'];
  loading?: ButtonRendererProps['loading'];
  'aria-describedby'?: NativeButtonProps['aria-describedby'];
}

export const Button = ({
  onClick,
  children,
  weight = 'regular',
  type = 'button',
  id,
  loading = false,
  'aria-describedby': ariaDescribedBy,
}: ButtonProps) => {
  return (
    <ButtonRenderer weight={weight} loading={loading}>
      {(ButtonChildren, buttonProps) => (
        <button
          id={id}
          type={type}
          aria-describedby={ariaDescribedBy}
          onClick={onClick}
          disabled={loading}
          {...buttonProps}
        >
          <ButtonChildren>{children}</ButtonChildren>
        </button>
      )}
    </ButtonRenderer>
  );
};
