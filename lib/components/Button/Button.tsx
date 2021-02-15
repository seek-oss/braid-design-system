import React, { ReactNode, AllHTMLAttributes } from 'react';
import {
  PrivateButtonRenderer,
  PrivateButtonRendererProps,
} from '../ButtonRenderer/ButtonRenderer';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps
  extends Omit<PrivateButtonRendererProps, 'children'> {
  id?: NativeButtonProps['id'];
  onClick?: NativeButtonProps['onClick'];
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  'aria-controls'?: NativeButtonProps['aria-controls'];
  'aria-expanded'?: NativeButtonProps['aria-expanded'];
  'aria-describedby'?: NativeButtonProps['aria-describedby'];
  data?: DataAttributeMap;
}

export const Button = ({
  onClick,
  children,
  size,
  tone,
  weight,
  bleedY,
  variant,
  loading,
  type = 'button',
  id,
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
  'aria-describedby': ariaDescribedBy,
  data,
}: ButtonProps) => (
  <PrivateButtonRenderer
    size={size}
    tone={tone}
    weight={weight}
    loading={loading}
    variant={variant}
    bleedY={bleedY}
  >
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
  </PrivateButtonRenderer>
);
