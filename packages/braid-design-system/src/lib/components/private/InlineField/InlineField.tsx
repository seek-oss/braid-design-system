import React, {
  type ReactNode,
  type ReactElement,
  cloneElement,
  forwardRef,
} from 'react';
import { Box } from '../../Box/Box';
import type { FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  type FieldMessageProps,
  FieldMessage,
} from '../../FieldMessage/FieldMessage';
import { Text } from '../../Text/Text';
import { mergeIds } from '../mergeIds';
import type { BadgeProps } from '../../Badge/Badge';
import {
  type StyledInputProps,
  type PrivateStyledInputProps,
  StyledInput,
} from './StyledInput';
import { virtualTouchable } from '../touchable/virtualTouchable.css';
import * as styles from './InlineField.css';

interface InlineFieldBaseProps {
  label: NonNullable<FieldLabelProps['label']>;
  message?: FieldMessageProps['message'];
  reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
  children?: ReactNode;
  description?: ReactNode;
  badge?: ReactElement<BadgeProps>;
}

export type InlineFieldProps = Omit<
  StyledInputProps,
  'aria-label' | 'aria-labelledby'
> &
  InlineFieldBaseProps;

type PrivateInlineFieldProps = PrivateStyledInputProps &
  InlineFieldBaseProps & {
    inList?: boolean;
  };

export const InlineField = forwardRef<
  HTMLInputElement,
  PrivateInlineFieldProps
>(
  (
    {
      id,
      name,
      value,
      checked,
      data,
      onChange,
      label,
      type,
      children,
      description,
      badge,
      message,
      reserveMessageSpace = false,
      tone = 'neutral',
      disabled = false,
      required,
      inList = false,
      tabIndex,
      size = 'standard',
      'aria-describedby': ariaDescribedBy,
      ...restProps
    },
    forwardedRef,
  ) => {
    const messageId = `${id}-message`;
    const descriptionId = `${id}-description`;
    const hasMessage = (message && !disabled) || reserveMessageSpace;

    if (process.env.NODE_ENV !== 'production') {
      if (badge && badge.props.bleedY !== undefined) {
        // eslint-disable-next-line no-console
        console.warn(
          `Badge elements cannot set the \`bleedY\` prop when passed to a ${type
            .charAt(0)
            .toUpperCase()}${type.slice(1)} component`,
        );
      }
    }

    return (
      <Box position="relative">
        <Box display="flex">
          <StyledInput
            {...restProps}
            type={type}
            id={id}
            checked={checked}
            name={name}
            value={value}
            data={data}
            onChange={onChange}
            disabled={disabled}
            tone={tone}
            tabIndex={tabIndex}
            required={required}
            aria-describedby={mergeIds(
              ariaDescribedBy,
              message ? messageId : undefined,
              description ? descriptionId : undefined,
            )}
            size={size}
            ref={forwardedRef}
          />

          <Box paddingLeft="xsmall" flexGrow={1}>
            <Box
              display="flex"
              className={[styles.sizeVars[size], styles.labelOffset]}
            >
              <Box
                component="label"
                htmlFor={id}
                userSelect="none"
                display="block"
                cursor={!disabled ? 'pointer' : undefined}
                className={virtualTouchable}
              >
                <Text
                  weight={checked && !inList ? 'strong' : undefined}
                  tone={disabled ? 'secondary' : undefined}
                  size={size}
                >
                  {badge ? (
                    <Box component="span" paddingRight="xsmall">
                      {label}
                    </Box>
                  ) : (
                    label
                  )}
                  {badge ? cloneElement(badge, {}) : null}
                </Text>
              </Box>
            </Box>

            {description ? (
              <Box paddingTop="small">
                <Text tone="secondary" size={size} id={descriptionId}>
                  {description}
                </Text>
              </Box>
            ) : null}

            {children ? (
              <Box
                position="relative"
                display="none"
                paddingTop="small"
                className={styles.children}
              >
                {children}
              </Box>
            ) : null}
          </Box>
        </Box>
        {hasMessage ? (
          <Box paddingTop={description ? 'small' : 'xsmall'}>
            <FieldMessage
              id={messageId}
              tone={tone}
              disabled={disabled}
              message={message}
              reserveMessageSpace={reserveMessageSpace}
            />
          </Box>
        ) : null}
      </Box>
    );
  },
);
