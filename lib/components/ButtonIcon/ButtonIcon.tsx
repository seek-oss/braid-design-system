import assert from 'assert';
import React, {
  AllHTMLAttributes,
  forwardRef,
  ReactElement,
  cloneElement,
} from 'react';
import { Box } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { iconContainerSize, iconSize, UseIconProps } from '../../hooks/useIcon';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import {
  ButtonOverlays,
  ButtonStyleProps,
  useButtonStyles,
} from '../Button/Button';
import { Text } from '../Text/Text';
import { Bleed } from '../Bleed/Bleed';
import { TooltipRenderer } from '../TooltipRenderer/TooltipRenderer';
import * as styles from './ButtonIcon.css';

export const buttonIconVariants: Extract<
  ButtonStyleProps['variant'],
  'soft' | 'transparent'
>[] = ['soft', 'transparent'];

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export type ButtonIconProps = {
  id: string;
  icon: ReactElement<UseIconProps>;
  label: string;
  size?: 'standard' | 'large';
  tone?: 'neutral' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  variant?: typeof buttonIconVariants[number];
  onClick?: NativeButtonProps['onClick'];
  onMouseDown?: NativeButtonProps['onMouseDown'];
  onKeyUp?: NativeButtonProps['onKeyUp'];
  onKeyDown?: NativeButtonProps['onKeyDown'];
  'aria-haspopup'?: NativeButtonProps['aria-haspopup'];
  'aria-expanded'?: NativeButtonProps['aria-expanded'];
  tabIndex?: number;
  data?: DataAttributeMap;
  bleed?: boolean;
};

const padding = 'xsmall';

const PrivateButtonIcon = forwardRef<
  HTMLButtonElement,
  Omit<ButtonIconProps, 'id'> & { id?: string }
>(
  (
    {
      icon,
      label,
      id,
      size = 'standard',
      tone = 'neutral',
      variant = 'soft',
      type = 'button',
      bleed,
      onClick,
      onMouseDown,
      onKeyUp,
      onKeyDown,
      'aria-haspopup': ariaHasPopUp,
      'aria-expanded': ariaExpanded,
      tabIndex,
      data,
    },
    forwardedRef,
  ) => {
    const {
      className: buttonClasses,
      width: _,
      ...buttonStyleProps
    } = useButtonStyles({
      variant,
      tone: 'neutral',
      size: 'standard',
      radius: 'full',
    });

    assert(
      icon.props.size === undefined,
      "Icons cannot set the 'size' prop when passed to a ButtonIcon component",
    );

    const button = (
      <Box
        component="button"
        type={type}
        id={id}
        zIndex={0}
        // If there is no id, there is no tooltip, so use a title instead.
        // Removing once consumers have adopted React 18, and we can safely `useId()`
        title={!id ? label : undefined}
        ref={forwardedRef}
        aria-label={label}
        aria-haspopup={ariaHasPopUp}
        aria-expanded={ariaExpanded}
        padding={padding}
        onClick={onClick}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onMouseDown={onMouseDown}
        className={[buttonClasses, styles.button, virtualTouchable()]}
        tabIndex={tabIndex}
        {...(data ? buildDataAttributes(data) : undefined)}
        {...buttonStyleProps}
      >
        <ButtonOverlays
          variant={variant}
          tone="neutral"
          radius="full"
          keyboardFocusable={typeof tabIndex === 'undefined' || tabIndex >= 0}
          forceActive={ariaExpanded === 'true' || ariaExpanded === true}
        />

        <Box
          component="span"
          display="block"
          position="relative"
          className={size === 'large' ? iconContainerSize() : iconSize()}
        >
          {cloneElement(icon, { tone: icon.props.tone || tone, size: 'fill' })}
        </Box>
      </Box>
    );

    const shouldBleed =
      (typeof bleed === 'undefined' && variant === 'transparent') || bleed;

    return shouldBleed ? <Bleed space={padding}>{button}</Bleed> : button;
  },
);

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ id, label, ...restProps }, forwardedRef) => {
    if (!id) {
      // Remove when we have enough React 18 adoption, in favour of tooltip with `useId()`
      return (
        <PrivateButtonIcon label={label} ref={forwardedRef} {...restProps} />
      );
    }

    return (
      <TooltipRenderer id={`${id}-tooltip`} tooltip={<Text>{label}</Text>}>
        {({ triggerProps: { ref: triggerRef, ...triggerProps } }) => (
          <PrivateButtonIcon
            id={id}
            label={label}
            ref={(node: HTMLButtonElement) => {
              if (forwardedRef) {
                if (typeof forwardedRef === 'function') {
                  forwardedRef(node);
                } else {
                  forwardedRef.current = node;
                }
              }
              triggerRef(node);
            }}
            {...triggerProps}
            {...restProps}
          />
        )}
      </TooltipRenderer>
    );
  },
);

ButtonIcon.displayName = 'ButtonIcon';
