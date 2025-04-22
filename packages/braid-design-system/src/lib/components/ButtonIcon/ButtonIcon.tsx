import assert from 'assert';

import {
  type AllHTMLAttributes,
  type ReactElement,
  forwardRef,
  cloneElement,
  useId,
} from 'react';

import type { Space } from '../../css/atoms/atoms';
import {
  type UseIconProps,
  iconContainerSize,
  iconSize,
} from '../../hooks/useIcon';
import { Bleed } from '../Bleed/Bleed';
import { Box } from '../Box/Box';
import {
  type ButtonStyleProps,
  ButtonOverlays,
  useButtonStyles,
} from '../Button/Button';
import { Text } from '../Text/Text';
import { TooltipRenderer } from '../TooltipRenderer/TooltipRenderer';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './ButtonIcon.css';

export const buttonIconVariants: Array<
  Extract<ButtonStyleProps['variant'], 'soft' | 'transparent'>
> = ['soft', 'transparent'];

export const buttonIconTones: Array<
  Extract<ButtonStyleProps['tone'], 'neutral' | 'formAccent'>
> = ['neutral', 'formAccent'];
export const buttonIconSizes = ['small', 'standard', 'large'] as const;

type ButtonIconSize = (typeof buttonIconSizes)[number];
type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonIconProps {
  id?: string;
  icon: ReactElement<UseIconProps>;
  label: string;
  size?: ButtonIconSize;
  tone?: (typeof buttonIconTones)[number];
  type?: 'button' | 'submit' | 'reset';
  variant?: (typeof buttonIconVariants)[number];
  onClick?: NativeButtonProps['onClick'];
  onMouseDown?: NativeButtonProps['onMouseDown'];
  onKeyUp?: NativeButtonProps['onKeyUp'];
  onKeyDown?: NativeButtonProps['onKeyDown'];
  'aria-haspopup'?: NativeButtonProps['aria-haspopup'];
  'aria-expanded'?: NativeButtonProps['aria-expanded'];
  tabIndex?: number;
  data?: DataAttributeMap;
  bleed?: boolean;
  tooltipPlacement?: 'bottom' | 'top';
}

const padding: Record<ButtonIconSize, Space> = {
  small: 'xxsmall',
  standard: 'xsmall',
  large: 'xsmall',
};

export const PrivateButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
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
      tooltipPlacement,
      onClick,
      onMouseDown,
      onKeyUp,
      onKeyDown,
      'aria-haspopup': ariaHasPopUp,
      'aria-expanded': ariaExpanded,
      tabIndex,
      data,
      ...restProps
    },
    forwardedRef,
  ) => {
    const { root, content } = useButtonStyles({
      variant,
      tone,
      size: size === 'small' ? 'small' : 'standard',
      radius: 'full',
    });

    assert(
      icon && icon.props.size === undefined,
      "Icons cannot set the 'size' prop when passed to a ButtonIcon component",
    );

    const button = (
      <Box
        component="button"
        type={type}
        id={id}
        zIndex={0}
        ref={forwardedRef}
        aria-label={label}
        aria-haspopup={ariaHasPopUp}
        aria-expanded={ariaExpanded}
        onClick={onClick}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onMouseDown={onMouseDown}
        maxWidth="content"
        tabIndex={tabIndex}
        {...root}
        className={[root.className, styles.button]}
        {...buildDataAttributes({ data, validateRestProps: restProps })}
      >
        <Box {...content} padding={padding[size]}>
          <ButtonOverlays
            variant={variant}
            tone={tone}
            radius="full"
            keyboardFocusable={typeof tabIndex === 'undefined' || tabIndex >= 0}
            forceActive={ariaExpanded === 'true' || ariaExpanded === true}
          />
          <Box
            component="span"
            display="block"
            position="relative"
            className={
              size === 'large'
                ? iconContainerSize()
                : iconSize({ size, crop: true })
            }
          >
            {cloneElement(icon, {
              tone: icon.props.tone || tone,
              size: 'fill',
            })}
          </Box>
        </Box>
      </Box>
    );

    const shouldBleed =
      (typeof bleed === 'undefined' && variant === 'transparent') || bleed;

    return shouldBleed ? <Bleed space={padding[size]}>{button}</Bleed> : button;
  },
);

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ id, label, tooltipPlacement, ...restProps }, forwardedRef) => {
    const fallbackId = useId();
    const resolvedId = id || fallbackId;

    return (
      <TooltipRenderer
        tooltip={<Text>{label}</Text>}
        placement={tooltipPlacement}
      >
        {({ triggerProps: { ref: triggerRef, ...triggerProps } }) => (
          <PrivateButtonIcon
            id={resolvedId}
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
