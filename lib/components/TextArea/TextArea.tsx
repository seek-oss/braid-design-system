import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import styles from './TextArea.css.js';
import { useTheme } from '../private/ThemeContext';
import { Field, FieldProps } from '../private/Field/Field';

interface TextAreaProps extends FieldProps {
  limit?: number;
}

const renderCount = ({
  limit,
  value = '',
}: Pick<TextAreaProps, 'limit' | 'value'>): ReactNode => {
  if (typeof limit === 'undefined') {
    return null;
  }

  const diff = limit - String(value).length;
  const valid = diff >= 0;

  return (
    <Text component="span" color={valid ? 'secondary' : 'critical'}>
      {diff}
    </Text>
  );
};

export const TextArea = ({
  id,
  label,
  name,
  secondaryLabel,
  tertiaryLabel,
  placeholder,
  message,
  tone = 'neutral',
  value,
  onChange,
  onBlur,
  onFocus,
  description,
  limit,
}: TextAreaProps) => {
  const { tokens } = useTheme();

  return (
    <Field
      id={id}
      name={name}
      label={label}
      description={description}
      secondaryLabel={secondaryLabel}
      tertiaryLabel={tertiaryLabel}
      tone={tone}
      message={message}
      secondaryMessage={renderCount({
        limit,
        value,
      })}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {({ className, ...fieldProps }) => (
        <Box
          component="textarea"
          backgroundColor="input"
          boxShadow={tone === 'critical' ? 'borderCritical' : 'borderStandard'}
          display="block"
          width="full"
          paddingLeft="small"
          paddingRight="small"
          paddingTop="standardTouchableText"
          paddingBottom="standardTouchableText"
          borderRadius="standard"
          rows={3}
          style={{
            minHeight: tokens.rowHeight * 15,
          }}
          className={classnames(styles.verticalResizeOnly, className)}
          {...fieldProps}
        />
      )}
    </Field>
  );
};
