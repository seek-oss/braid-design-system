import React, { forwardRef, ReactNode, AllHTMLAttributes } from 'react';
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
  tabIndex?: NativeButtonProps['tabIndex'];
  data?: DataAttributeMap;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
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
      tabIndex,
      'aria-controls': ariaControls,
      'aria-expanded': ariaExpanded,
      'aria-describedby': ariaDescribedBy,
      data,
    },
    ref,
  ) => (
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
          ref={ref}
          id={id}
          type={type}
          tabIndex={tabIndex}
          aria-controls={ariaControls}
          aria-expanded={ariaExpanded}
          aria-describedby={ariaDescribedBy}
          onClick={onClick}
          disabled={loading}
          {...buttonProps}
          {...(data ? buildDataAttributes(data) : undefined)}
        >
          <ButtonChildren>{children}</ButtonChildren>
        </button>
      )}
    </PrivateButtonRenderer>
  ),
);

Button.displayName = 'Button';
