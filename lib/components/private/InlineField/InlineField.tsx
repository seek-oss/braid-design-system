import React, { ReactNode, AllHTMLAttributes } from 'react';
import { useClassNames } from 'sku/treat';
import * as styles from './InlineField.treat';
import { Box } from '../../Box/Box';
import { FieldLabelProps } from '../../FieldLabel/FieldLabel';
import {
  FieldMessage,
  FieldMessageProps,
} from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import { Text } from '../../Text/Text';
import { TickIcon } from '../../icons/TickIcon/TickIcon';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface InlineFieldProps {
  id: NonNullable<FormElementProps['id']>;
  label: NonNullable<FieldLabelProps['label']>;
  onChange: NonNullable<FormElementProps['onChange']>;
  checked: NonNullable<FormElementProps['checked']>;
  name?: FormElementProps['name'];
  disabled?: FormElementProps['disabled'];
  message?: FieldMessageProps['message'];
  tone?: FieldMessageProps['tone'];
  children?: ReactNode;
}

interface InternalInlineFieldProps extends InlineFieldProps {
  type: 'checkbox' | 'radio';
}

export const InlineField = ({
  id,
  name,
  checked,
  onChange,
  label,
  type,
  children,
  message,
  tone = 'neutral',
  disabled = false,
}: InternalInlineFieldProps) => {
  const messageId = `${id}-message`;
  const isCheckbox = type === 'checkbox';
  const radioStyles = {
    [styles.circle]: type === 'radio',
  };
  const fieldBorderRadius = isCheckbox ? 'standard' : undefined;

  return (
    <Box>
      <Box
        component="input"
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
        className={useClassNames(styles.realField, styles.fieldSize)}
        aria-describedby={messageId}
        disabled={disabled}
      />
      <Box display="flex">
        <Box
          className={useClassNames(
            styles.fakeField,
            styles.fieldSize,
            radioStyles,
          )}
          marginRight="small"
          backgroundColor={disabled ? 'inputDisabled' : 'input'}
          borderRadius={fieldBorderRadius}
          boxShadow={
            tone === 'critical' && !disabled
              ? 'borderCritical'
              : 'borderStandard'
          }
        >
          <FieldOverlay
            variant={tone === 'critical' && isCheckbox ? tone : undefined}
            backgroundColor={disabled ? 'formAccentDisabled' : 'formAccent'}
            borderRadius={fieldBorderRadius}
            className={useClassNames(styles.selected, radioStyles)}
          />
          {isCheckbox ? (
            <Box transition="fast" width="full" className={styles.icon}>
              <TickIcon size="fill" fill="white" />
            </Box>
          ) : null}
          <FieldOverlay
            variant="focus"
            borderRadius={fieldBorderRadius}
            className={useClassNames(styles.focusOverlay, radioStyles)}
          />
          <FieldOverlay
            variant="hover"
            borderRadius={fieldBorderRadius}
            className={useClassNames(styles.hoverOverlay, radioStyles)}
          />
        </Box>
        <Box
          component="label"
          htmlFor={id}
          paddingTop="standardTouchableText"
          paddingBottom="standardTouchableText"
          className={styles.label}
        >
          <Text
            component="span"
            baseline={false}
            weight={checked ? 'strong' : undefined}
            color={disabled ? 'secondary' : undefined}
          >
            {label}
          </Text>
        </Box>
      </Box>
      {children ? (
        <Box
          display="none"
          paddingLeft="small"
          paddingBottom="small"
          className={useClassNames(styles.children)}
        >
          {children}
        </Box>
      ) : null}
      <FieldMessage
        id={messageId}
        tone={tone}
        disabled={disabled}
        message={message}
      />
    </Box>
  );
};
