import React, { ReactNode, forwardRef, ReactElement } from 'react';
import { Box } from '../../Box/Box';
import { FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { Text } from '../../Text/Text';
import { virtualTouchable } from '../touchable/virtualTouchable';
import { mergeIds } from '../mergeIds';
import { BadgeProps } from '../../Badge/Badge';
import { Inline } from '../../Inline/Inline';
import {
  StyledInput,
  StyledInputProps,
  PrivateStyledInputProps,
} from './StyledInput';
import * as styles from './InlineField.css';

type InlineFieldBaseProps = {
  label: NonNullable<FieldLabelProps['label']>;
  message?: FieldMessageProps['message'];
  reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
  children?: ReactNode;
  description?: ReactNode;
  badge?: ReactElement<BadgeProps>;
};

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
    },
    forwardedRef,
  ) => {
    const messageId = `${id}-message`;
    const descriptionId = `${id}-description`;
    const hasMessage = message || reserveMessageSpace;

    return (
      <Box position="relative" zIndex={0} className={styles.root}>
        <Box display="flex">
          <StyledInput
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

          <Box paddingLeft="small" flexGrow={1}>
            <Inline space="small">
              <Box
                component="label"
                htmlFor={id}
                userSelect="none"
                display="block"
                cursor={!disabled ? 'pointer' : undefined}
                className={[styles.labelOffset[size], virtualTouchable()]}
              >
                <Text
                  weight={checked && !inList ? 'strong' : undefined}
                  tone={disabled ? 'secondary' : undefined}
                  size={size}
                >
                  {label}
                </Text>
              </Box>
              {badge ? (
                <Box className={styles.badgeOffset[size]}>{badge}</Box>
              ) : null}
            </Inline>

            {description ? (
              <Box paddingTop="small">
                <Text tone="secondary" size={size} id={descriptionId}>
                  {description}
                </Text>
              </Box>
            ) : null}

            {children ? (
              <Box
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
